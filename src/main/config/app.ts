import { Express } from "express";
import express from "express";

import TestController from "../../presentation/controllers/test.controller";

export const setupApp = async (): Promise<Express> => {
  const app = express();

  app.use(express.json());

  // app[TestController.method](TestController.route, TestController.handle);

  // create router
  app[TestController.method](TestController.route, TestController.handle);

  // app[TestController.method](TestController.route, TestController.handle);

  return app;
};
