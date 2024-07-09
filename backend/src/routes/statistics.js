import express from "express";
import * as controller from "../controller/statistics.js";

export const routeStatistics = express.Router();

// All Statistics related routes will come here
routeStatistics.get('/statsByMonth/:selectedMonth', controller.statisticsByMonth);
routeStatistics.get('/barchartBymonth/:selectedMonth', controller.getBarChartDetailsByMonth);
routeStatistics.get('/piechartByMonth/:selectedMonth', controller.getPiechartByMonth);
routeStatistics.get('/getAllStats/:selectedMonth', controller.getFinalResponseJson);