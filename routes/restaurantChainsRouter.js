import express from 'express';
import { restaurantsChainController } from '../controllers/restaurantsChainController.js';
import { validateRestaurantChain, validateRestaurantChainId } from '../utils/restaurantChainsRouterValidation.js';

export const restaurantChainsRouter = express.Router();
restaurantChainsRouter
  .get('/', restaurantsChainController.getAllChains)
  .post(
    '/',
    validateRestaurantChain,
    restaurantsChainController.addChain,
  )
  .get('/:id', 
    validateRestaurantChainId, 
    restaurantsChainController.getChainById)
  .delete(
    '/:id',
    validateRestaurantChainId,
    restaurantsChainController.deleteChainById,
  )
  .put(
    '/:id',
    validateRestaurantChainId,
    validateRestaurantChain,
    restaurantsChainController.updateChainById,
  )
