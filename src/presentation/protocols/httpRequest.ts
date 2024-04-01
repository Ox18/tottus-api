import { Request } from "express";

export interface HttpRequest<T = any> extends Request {
  body: T;
}
