import { httpStatus } from '../utils/httpStatusCode.js';
import { reservationService } from '../services/reservationService.js';

const getReservations = async function (req, res) {
  try {
    const reservation = await reservationService.getReservations(req.query);

    if (reservation.length === 0) {
      return res.status(httpStatus.NO_CONTENT).json({
        message: 'No reservation found',
      });
    }

    return res.status(httpStatus.OK).json({
      success: true,
      data: reservation,
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server Error',
    });
  }
};

const addReservation = async function (req, res) {
  try {
    const reservation = await reservationService.addReservation(req.body);

    return res.status(httpStatus.CREATED).json({
      success: true,
      data: reservation,
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server Error 😒',
    });
  }
};

const getReservationById = async function (req, res) {
  try {
    const reservation = await reservationService.getReservationById(req.params);
    if (!reservation) {
      return res.status(httpStatus.NO_CONTENT).json({
        message: 'ID not found.',
      });
    }
    return res.status(httpStatus.OK).json({
      success: true,
      data: { reservation },
    });
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

const deleteReservationById = async function (req, res) {
  try {
    await reservationService.deleteReservationById(req.params);

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

const updateReservationById = async function (req, res) {
  try {
    const updatedReservation = await reservationService.updateReservationById(
      req.params,
      req.body,
    );
    return res.status(httpStatus.OK).json({
      success: true,
      data: { updatedReservation },
    });
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      error: 'Server error',
    });
  }
};

export const reservationController = {
  getReservations,
  addReservation,
  getReservationById,
  deleteReservationById,
  updateReservationById,
};
