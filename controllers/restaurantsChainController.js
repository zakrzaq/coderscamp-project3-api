import { httpStatus } from '../utils/httpStatusCode.js';
import { restaurantsChainService } from '../services/restaurantsChainService.js';

const getAllChains = async function (req, res) {
  try {
    const chain = await restaurantsChainService.getAllChains(req.query);

    return res.status(httpStatus.OK).json({
      success: true,
      data: chain,
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server Error',
    });
  }
};

const addChain = async function (req, res) {
  try {
    const chain = await restaurantsChainService.addChain(req);

    return res.status(httpStatus.CREATED).json({
      success: true,
      data: chain,
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server Error',
    });
  }
};

const getChainById = async function (req, res) {
  try {
    const chain = await restaurantsChainService.getChainById(req.params);
    if (!chain) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'ID not found.',
      });
    }
    return res.status(httpStatus.OK).json({
      success: true,
      data: { chain },
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

const deleteChainById = async function (req, res) {
  try {
    await restaurantsChainService.deleteChainById(req.params);

    return res.status(httpStatus.NOT_FOUND).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

const updateChainById = async function (req, res) {
  try {
    const updatedChain = await restaurantsChainService.updateChainById(req);
    return res.status(httpStatus.OK).json({
      success: true,
      data: { updatedChain },
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

export const restaurantsChainController = {
  getAllChains,
  addChain,
  getChainById,
  deleteChainById,
  updateChainById,
};
