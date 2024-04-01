import { Response } from "express";
import { HttpRequest } from "./httpRequest";
import { HTTP_METHOD } from "../enums/http-method-enum";

export interface Controller<T = any> {
  handle: (request: HttpRequest<T>, response: Response) => Promise<any>;
  method: HTTP_METHOD;
  route: string;
}
