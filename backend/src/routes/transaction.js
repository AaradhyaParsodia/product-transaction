import express from "express";
import * as controller from "../controller/transaction.js";

export const routeTransaction = express.Router();

// All Transaction related routes will come here
routeTransaction.get('/getAll', controller.getAllTransactions);