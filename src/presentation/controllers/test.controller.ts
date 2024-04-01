import { Response } from "express";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/httpRequest";
import { HTTP_METHOD } from "../enums/http-method-enum";

type Test = {
  productId: string;
};

const handle = async (request: HttpRequest<Test>, response: Response) => {
  const { productId } = request.body;
  return response.status(200).json({ productId: 1 });
};

export default {
  handle,
  method: HTTP_METHOD.GET,
  route: "/tottus/product",
};
