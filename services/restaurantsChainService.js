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

const addChain = async function (reqBody, res) {
  const chainToAdd = new RestaurantsChain({
    _id: new mongoose.Types.ObjectId(),
    name: reqBody.name,
    manager: reqBody.manager,
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

const updateChainById = async function (params, reqBody) {
  const chainToUpdate = {
    name: reqBody.name,
    manager: reqBody.manager,
  };
  try {
    const updatedChain = await RestaurantsChain.findByIdAndUpdate(
      params.id,
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
