import { httpStatus } from '../utils/httpStatusCode.js';
import { logoService } from '../services/logoService.js';

const getAllLogos = async function (req, res) {
  try {
    const logo = await logoService.getAllLogos(req.query);

    return res.status(httpStatus.OK).json({
      success: true,
      data: logo,
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server Error',
    });
  }
};

const addLogo = async function (req, res) {
  try {
    const logo = await logoService.addLogo(req);

    return res.status(httpStatus.CREATED).json({
      success: true,
      data: logo,
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server Error',
    });
  }
};

const getLogoById = async function (req, res) {
  try {
    const logo = await logoService.getLogoById(req.params);
    if (!logo) {
      return res.status(httpStatus.NOT_FOUND).json({
        message: 'Logo not found',
      });
    }
    return res.status(httpStatus.OK).json({
      success: true,
      data: { logo },
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

const deleteLogoById = async function (req, res) {
  try {
    await logoService.deleteLogoById(req.params);

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

const updateLogoById = async function (req, res) {
  try {
    const updatedLogo = await logoService.updateLogoById(req);
    return res.status(httpStatus.OK).json({
      success: true,
      data: { updatedLogo },
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

export const logoController = {
  getAllLogos,
  addLogo,
  getLogoById,
  deleteLogoById,
  updateLogoById,
};
