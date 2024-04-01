import { Express } from "express";
import express from "express";

import readControllers from "./controllers";
import router from "./router";

export const setupApp = async (): Promise<Express> => {
  const app = express();

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.use(express.json());

  const controllers = await readControllers();

  router(app, controllers);

  return app;
};
