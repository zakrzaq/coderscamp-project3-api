import { httpStatus } from '../utils/httpStatusCode.js';
import { restaurantsChainService } from '../services/restaurantsChainService.js';

const getChains = async function (req, res) {
  try {
    const chain = await restaurantsChainService.getChains(req.query);

    if (chain.length === 0) {
      return res.status(httpStatus.NO_CONTENT).json({
        message: 'No chain found',
      });
    }

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
    const chain = await restaurantsChainService.addChain(req.body);

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
      return res.status(httpStatus.NO_CONTENT).json({
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

    return res.status(httpStatus.NO_CONTENT).json({
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
    const updatedChain = await restaurantsChainService.updateChainById(
      req.params,
      req.body,
    );
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
  getChains,
  addChain,
  getChainById,
  deleteChainById,
  updateChainById,
};
