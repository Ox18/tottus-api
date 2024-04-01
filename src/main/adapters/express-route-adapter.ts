import { BaseError } from "../../presentation/errors/base-error";
import { Handler } from "../../presentation/protocols/handler";
import { Request, Response } from "express";

export const expressRouteAdapter = (handle: Handler) => {
  return async (request: Request, response: Response) => {
    try {
      const responseApi = await handle(request);

      response.json({
        success: true,
        data: responseApi,
      });
    } catch (err) {
      if (err instanceof BaseError) {
        return response.status(err.status).json(err);
      }

      console.error(err);
      return response.status(500).json({
        type: "internal",
        title: "Internal Error",
        status: 500,
        detail: "An error occurred while processing the request",
      });
    }
  };
};
