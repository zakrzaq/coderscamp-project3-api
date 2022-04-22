import express from 'express';
import { logoController } from '../controllers/logoController.js';
import { uploadLogo } from '../controllers/multerLogoController.js';

export const logoRouter = express.Router();
logoRouter
  .get('/', logoController.getAllLogos)
  .post('/', uploadLogo, logoController.addLogo)
  .get('/:id', logoController.getLogoById)
  .delete('/:id', logoController.deleteLogoById)
  .put('/:id', uploadLogo, logoController.updateLogoById);
