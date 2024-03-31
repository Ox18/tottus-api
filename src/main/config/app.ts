import { Express } from "express";
import * as express from "express";

export const setupApp = async (): Promise<Express> => {
  const app = express();

  return app;
};
