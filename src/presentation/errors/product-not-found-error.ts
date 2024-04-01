import { BaseError } from "./base-error";

export class ProductNotFoundError extends BaseError {
  constructor(productId: string) {
    super({
      type: "/tottus/product",
      title: "Product not found",
      status: 404,
      detail: `Product with id ${productId} not found`,
    });
  }
}
