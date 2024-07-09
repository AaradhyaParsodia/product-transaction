import express from 'express';
import { routeTransaction } from './transaction.js';
import { routeStatistics } from './statistics.js';

export const rootRouter = express.Router();

// Entry Point for all routes of transaction related data
rootRouter.use('/transaction', routeTransaction);

// Entry Point For all routes of statistics related data
rootRouter.use('/statistics', routeStatistics);