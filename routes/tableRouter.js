import express from 'express';
import { tableController } from '../controllers/tableController.js';

export const tableRouter = express.Router();

tableRouter
  .get('/', tableController.getTables)
  .post('/', tableController.addTable)
  .get('/:id', tableController.getTable)
  .get('/restaurant/:restaurantId', tableController.getTableById)
  .put('/:id', tableController.updateTable)
  .delete('/:id', tableController.deleteTable);

