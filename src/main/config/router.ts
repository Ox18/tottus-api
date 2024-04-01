import { Express } from "express";
import { Controller } from "../../presentation/protocols/controller";
import { expressRouteAdapter } from "../adapters/express-route-adapter";

export default (app: Express, controllers: Controller[]): void => {
  controllers.forEach((controller) => {
    console.log(
      `Loaded controller: [${controller.method.toUpperCase()}] ${
        controller.route
      }`
    );

    app[controller.method](
      controller.route,
      expressRouteAdapter(controller.handle)
    );
  });
};
