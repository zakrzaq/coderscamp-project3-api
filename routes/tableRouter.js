import express from 'express';
import { tableController } from '../controllers/tableController';

export const tableRouter = express.Router();

tableRouter
  .get('/')
  .post('/')
  .get('/id')
  .put('/id')
  .delete('/id');

