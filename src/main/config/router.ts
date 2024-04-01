import { Express } from "express";
import { Controller } from "@/presentation/protocols/controller";

export default (app: Express, controllers: Controller[]): void => {
  controllers.forEach((controller) => {
    console.log(
      `Loaded controller: [${controller.method.toUpperCase()}] ${
        controller.route
      }`
    );
    app[controller.method](controller.route, controller.handle);
  });
};
