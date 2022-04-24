import { RestaurantsChain } from '../models/RestaurantsChain.js';
import mongoose from 'mongoose';

const getAllChains = async function (reqQuery) {
  try {
    const queryObj = { ...reqQuery };
    let query = RestaurantsChain.find(queryObj);
    const chain = await query;
    return chain;
  } catch (err) {
    throw Error('Error while getting chains');
  }
};

const addChain = async function (req, res) {
  const chainToAdd = new RestaurantsChain({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    manager: req.body.manager,
    image: req.file.filename,
  });
  try {
    const chain = await RestaurantsChain.create(chainToAdd);
    return chain;
  } catch (err) {
    throw Error('Error while posting new chain');
  }
};

const getChainById = async function (params) {
  try {
    const chain = await RestaurantsChain.findById(params.id);
    return chain;
  } catch (err) {
    throw Error('Error while getting chain by id');
  }
};

const deleteChainById = async function (params) {
  try {
    const chain = await RestaurantsChain.findById(params.id);
    return await chain.remove();
  } catch (err) {
    throw Error('Error while deleting chain by id');
  }
};

const updateChainById = async function (req) {
  if (req.file) req.body.logoImage = req.file.filename;

  const chainToUpdate = {
    name: req.body.name,
    manager: req.body.manager,
    image: req.body.logoImage,
  };
  try {
    const updatedChain = await RestaurantsChain.findByIdAndUpdate(
      req.params.id,
      chainToUpdate,
    );
    return updatedChain.save();
  } catch (error) {
    throw Error('Error while editing chain');
  }
};

export const restaurantsChainService = {
  getAllChains,
  addChain,
  getChainById,
  deleteChainById,
  updateChainById,
};
