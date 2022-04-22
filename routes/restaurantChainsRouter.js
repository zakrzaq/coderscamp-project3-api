import express from 'express';
import { restaurantsChainController } from '../controllers/restaurantsChainController.js';
import { uploadLogo } from '../controllers/multerLogoController.js';

export const restaurantChainsRouter = express.Router();
restaurantChainsRouter
  .get('/', restaurantsChainController.getAllChains)
  .post(
    '/',
    uploadLogo,
    restaurantsChainController.addChain,
  )
  .get('/:id', 
    restaurantsChainController.getChainById)
  .delete(
    '/:id',
    restaurantsChainController.deleteChainById,
  )
  .put(
    '/:id',
    uploadLogo,
    restaurantsChainController.updateChainById,
  )
