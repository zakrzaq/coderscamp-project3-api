import { Reservation } from '../models/Reservation.js';
import mongoose from 'mongoose';

const getReservations = async function (reqQuery) {
  try {
    const queryObj = { ...reqQuery };
    let query = Reservation.find(queryObj);
    const reservation = await query;
    return reservation;
  } catch (err) {
    throw Error('Error while getting reservations');
  }
};

const addReservation = async function (reqBody, res) {
  const reservationToAdd = new Reservation({
    _id: new mongoose.Types.ObjectId(),
    booking: reqBody.booking,
    customer: reqBody.customer,
  });
  try {
    const reservation = await Reservation.create(reservationToAdd);
    return reservation;
  } catch (err) {
    throw Error('Error while posting new reservation');
  }
};

const getReservationById = async function (params) {
  try {
    const reservation = await Reservation.findById(params.id);
    return reservation;
  } catch (err) {
    throw Error('Error while getting reservations by id');
  }
};

const deleteReservationById = async function (params) {
  try {
    const reservation = await Reservation.findById(params.id);
    return await reservation.remove();
  } catch (err) {
    throw Error('Error while deleting reservations by id');
  }
};

const updateReservationById = async function (params, reqBody) {
  const reservationToUpdate = {
    customer: reqBody.customer,
  };
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      params.id,
      reservationToUpdate,
    );
    return updatedReservation.save();
  } catch (error) {
    throw Error('Error while editing reservation');
  }
};

export const reservationService = {
  getReservations,
  addReservation,
  getReservationById,
  deleteReservationById,
  updateReservationById,
};
