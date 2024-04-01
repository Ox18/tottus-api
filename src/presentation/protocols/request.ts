import { Request } from "express";

export type GetProductRequest = Request & {
  query: {
    productId: string;
  };
};
