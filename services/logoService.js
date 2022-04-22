import { Logo } from '../models/Logo.js';
import mongoose from 'mongoose';

const getAllLogos = async function (reqQuery) {
  try {
    const queryObj = { ...reqQuery };
    let query = Logo.find(queryObj);
    const logo = await query;
    return logo;
  } catch (err) {
    throw Error('Error while getting logos');
  }
};

const addLogo = async function (req, res) {
  const logoToAdd = new Logo({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.file.filename,
  });
  try {
    const logo = await Logo.create(logoToAdd);
    return logo;
  } catch (err) {
    throw Error('Error while posting new logo');
  }
};

const getLogoById = async function (params) {
  try {
    const logo = await Logo.findById(params.id);
    return logo;
  } catch (err) {
    throw Error('Error while getting logo by id');
  }
};

const deleteLogoById = async function (params) {
  try {
    const logo = await Logo.findById(params.id);
    return await logo.remove();
  } catch (err) {
    throw Error('Error while deleting logo by id');
  }
};

const updateLogoById = async function (req) {
  if (req.file) req.body.logoImage = req.file.filename;

  const logoToUpdate = {
    name: req.body.name,
    image: req.body.logoImage,
  };

  try {
    const updatedLogo = await Logo.findByIdAndUpdate(
      req.params.id,
      logoToUpdate,
    );
    return updatedLogo.save();
  } catch (err) {
    console.log(err);

    throw Error('Error while editing logo');
  }
};

export const logoService = {
  getAllLogos,
  addLogo,
  getLogoById,
  deleteLogoById,
  updateLogoById,
};
