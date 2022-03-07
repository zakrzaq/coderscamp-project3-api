import { Table } from '../models/Table';
import mongoose from "mongoose";

const getTables = async (req, res) => {

}

const addTable = async (req, res) => {
  const table = new Table({
    id: new mongoose.Types.ObjectId,
    name: req.body.name,
    numberOfSeats: req.body.numberOfSeats,
    withChild: req.bodu.withChild,
  });

  try {
    const savedTable = await table.save();
    res.send(savedTable);
  } catch(error) {
    res.status(400).send(error);
  }
}

const getTable = async (req, res) => {

}

const updateTable = async (req, res) => {

}

const deleteTable = async (req, res) => {

}

export const tableController = {
  getTables,
  addTable,
  getTable,
  updateTable,
  deleteTable
}