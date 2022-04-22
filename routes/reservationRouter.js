import express from 'express';
import { reservationController } from '../controllers/reservationController.js';
import { validateReservation,  validateReservationId} from '../utils/reservationValidation.js';

export const reservationRouter = express.Router();
reservationRouter
  .get('/', reservationController.getReservations)
  .post(
    '/',
    validateReservation,
    reservationController.addReservation,
  )
  .get('/:id', validateReservationId, reservationController.getReservationById)
  .delete(
    '/:id',
    validateReservationId,
    reservationController.deleteReservationById,
  )
  .put(
    '/:id',
    validateReservationId,
    validateReservation,
    reservationController.updateReservationById,
  )
