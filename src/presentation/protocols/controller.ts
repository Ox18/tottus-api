import { HTTP_METHOD } from "../enums/http-method-enum";
import { Handler } from "./handler";

export interface Controller<T = any> {
  handle: Handler<T>;
  method: HTTP_METHOD;
  route: string;
}
