import { BarcodeBazaarvoiceRepository } from "../../infra/scrapping/bazaarvoice/barcode-bazaarvoice-repository";
import { ProductTottusRepository } from "../../infra/scrapping/tottus/product-tottus-repository";
import { HTTP_METHOD } from "../enums/http-method-enum";
import { Handler } from "../protocols/handler";
import { GetProductRequest } from "../protocols/request";

const productTottusRepository = new ProductTottusRepository();
const barcodeBazaarvoiceRepository = new BarcodeBazaarvoiceRepository();

const handle: Handler<GetProductRequest> = async (request) => {
  const productId = request.query.productId;

  const responseTottus = await productTottusRepository.getByProductId(
    productId
  );

  const barcode = await barcodeBazaarvoiceRepository.getByProductId(productId);

  console.log({ barcode });

  return responseTottus;
};

export default {
  handle,
  method: HTTP_METHOD.GET,
  route: "/tottus/product",
};
