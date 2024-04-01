import { Response } from "express";
import { HttpRequest } from "./httpRequest";

export type Handler<T = any> = (
  request: HttpRequest<T>,
  response: Response
) => Promise<any> | any;
