import { HTTP_METHOD } from "../enums/http-method-enum";
import { Handler } from "../protocols/handler";
import axios from "axios";
import cheerio from "cheerio";

type Test = {
  productId: string;
};

const api = "https://tottus.falabella.com.pe/tottus-pe/product/";

const handle: Handler<Test> = async (request, response) => {
  try {
    const productId = Number(request.query.productId);

    const responseTottus = await axios.get(`${api}${productId}`);

    console.log(responseTottus.data);

    const html = responseTottus.data; // Obtener el HTML de la respuesta
    const $ = cheerio.load(html); // Cargar el HTML en Cheerio
    const scriptContent = $("script#__NEXT_DATA__").html();

    response.json(
      JSON.parse(JSON.parse(JSON.stringify(scriptContent, null, 2)))
    );
  } catch (ex) {
    response.status(500).json({ message: ex.message });
  }
};

export default {
  handle,
  method: HTTP_METHOD.GET,
  route: "/tottus/product",
};
