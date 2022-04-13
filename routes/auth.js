import bcrypt from "bcryptjs/dist/bcrypt.js";
import express from "express";
import { User } from "../models/userModel.js";
import {
  registerValidation,
  loginValidation,
} from "../utils/userValidation.js";
import jwt from "jsonwebtoken";
import { httpStatus } from "../utils/httpStatusCode.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error)
    return res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(httpStatus.BAD_REQUEST).send("Email already exists.");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    username: req.body.username,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    password: hashedPassword,
    role: "user",
  });
  try {
    const savedUser = await user.save();
    res.send({ user: savedUser._id });
  } catch (err) {
    res.status(httpStatus.BAD_REQUEST).send(err);
  }
});

let refreshTokens = [];

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error)
    return res.status(httpStatus.BAD_REQUEST).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(httpStatus.BAD_REQUEST)
      .send("Email or password is wrong");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res
      .status(httpStatus.BAD_REQUEST)
      .send("Email or password is wrong");

  const accessToken = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: "60d",
  });
  const refreshToken = jwt.sign(
    { _id: user._id },
    process.env.TOKEN_SECRET_REFRESH
  );
  refreshTokens.push(refreshToken);

  res.header("auth-token", accessToken).json({ accessToken, refreshToken });
});

router.post("/token", (req, res) => {
  const { token } = req.body;

  if (!token)
    return res.status(httpStatus.UNAUTHORIZED).send("Unauthorized Access");
  if (!refreshTokens.includes(token))
    return res.status(httpStatus.FORBIDDEN).send("Forbidden response");

  jwt.verify(token, refreshTokens, (err, user) => {
    if (err) return res.status(httpStatus.FORBIDDEN).send("Forbidden response");

    const accessToken = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "60d",
    });

    res.json({
      accessToken,
    });
  });
});

router.post("/logout", (req, res) => {
  const { token } = req.body;

  refreshTokens = refreshTokens.filter((t) => t !== token);

  res.status(httpStatus.NO_CONTENT).send("Logout successful");
});

router.get("/userInfo", function (req, res) {
  const token = req.header("auth-token");
  if (!token)
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send({ auth: false, message: "No token provided." });

  jwt.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    User.findById(decoded._id, { password: 0, date: 0 }, function (err, user) {
      if (err)
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR)
          .send("There was a problem finding the user.");
      if (!user) return res.status(httpStatus.NOT_FOUND).send("No user found.");

      res.status(200).send(user);
    });
  });
});

export { router };
