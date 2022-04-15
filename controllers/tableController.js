import { Table } from '../models/Table.js';
import { Restaurant } from '../models/Restaurant.js';
import mongoose from "mongoose";

const getTables = async (req, res) => {
  try {
    const tables = await Table.find();
    res.json(tables);
  } catch(error) {
    res.send(error);
  }
}

const addTable = async (req, res) => {
  const table = new Table({
    id: new mongoose.Types.ObjectId,
    name: req.body.name,
    restaurantId: req.body.restaurantId,
    numberOfSeats: req.body.numberOfSeats,
    withChild: req.body.withChild,
  });

  try {
    const savedTable = await table.save();
    res.send(savedTable);
  } catch(error) {
    res.status(400).send(error);
  }
}

const getTable = async (req, res) => {
  try {
    const table = await Table.findById(req.params.id);
    res.json(table);
  } catch(error) {
    res.send(error);
  }
}

const getTableById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.restaurantId);
    if(!restaurant) {
      res.status(404).send('Invalid restaurant id');
    }
    const table = await Table.find({ restaurantId: req.params.restaurantId });
    res.json(table);
  } catch(error) {
    res.send(error);
  }
}

const updateTable = async (req, res) => {
  try {
    const updatedTable = await Table.updateOne(
      { _id: req.params.id},
      {
        name: req.body.name,
        numberOfSeats: req.body.numberOfSeats,
        withChild: req.body.withChild
      }
    );
    res.json(updatedTable);
  } catch (error) {
    res.json({ message: error });
  }
}

const deleteTable = async (req, res) => {
  try {
    const removedTable = await Table.remove({ _id: req.params.id});
    res.json(removedTable);
  } catch (error) {
    res.json({ message: error });
  }
}

export const tableController = {
  getTables,
  addTable,
  getTable,
  getTableById,
  updateTable,
  deleteTable
}