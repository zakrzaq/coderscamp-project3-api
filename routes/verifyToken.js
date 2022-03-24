import jwt from "jsonwebtoken";
import { httpStatus } from "../utils/httpStatusCode.js";

export const verify = (req, res, next) => {
    const token = req.header("auth-token");

    if (!token)
        return res.status(httpStatus.FORBIDDEN).send("Unauthorized Access");

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(httpStatus.UNAUTHORIZED).send("Forbidden response");
    }
};
