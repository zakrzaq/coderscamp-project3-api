import { Test } from "../models/testModel.js";

const createTest = async function (req, res) {
  const test = new Test({
    name: req.body.name,
    surname: req.body.surname,
  });

  try {
    await test.save();
    res.send(test);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTest = async function (req, res) {
  try {
    const test = await Test.find();
    res.send(test);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const testController = { createTest, getTest };
