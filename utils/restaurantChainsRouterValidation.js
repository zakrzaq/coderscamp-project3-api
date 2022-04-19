import Joi from 'joi';
import { httpStatus } from './httpStatusCode.js';

export const validateRestaurantChain = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(45).required(),
    manager: Joi.string().min(2).max(45).required(),
  });
  const { error } = schema.validate(req.body);

  if (error) {
    const message = error.details[0].message;
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ error: message });
  } else {
    return next();
  }
};

export const validateRestaurantChainId = (req, res, next) => {
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
