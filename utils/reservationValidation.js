import Joi from 'joi';
import { httpStatus } from './httpStatusCode.js';

export const validateReservation = (req, res, next) => {
  const schema = Joi.object({
    date: Joi.string().regex(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/),
    hour: Joi.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/),
    customerName: Joi.string().min(2).max(45).required(),
    customerLastName: Joi.string().min(2).max(45).required(),
    customerPhone: Joi.number().required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    const message = error.details[0].message;
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ error: message });
  } else {
    return next();
  }
};

export const validateReservationId = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().hex().length(24),
  });
  const { id } = req.params;
  const { error } = schema.validate({ id });

  if (error) {
    const message = error.details[0].message;
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ error: message });
  } else {
    return next();
  }
};
