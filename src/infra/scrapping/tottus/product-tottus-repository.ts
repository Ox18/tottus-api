import { ProductNotFoundError } from "../../../presentation/errors/product-not-found-error";
import axios from "axios";
import cheerio from "cheerio";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false }); // Ignorar errores de certificado

const axiosInstance = axios.create({
  baseURL: "https://tottus.falabella.com.pe/tottus-pe",
  headers: {
    Referer: "https://tottus.falabella.com.pe/", // Cambia la URL si es necesario
    Origin: "https://tottus.falabella.com.pe/", // Cambia la URL si es necesario
  },
});

export class ProductTottusRepository {
  async getByProductId(productId: string): Promise<any> {
    try {
      const responseTottus = await axiosInstance.get(`/product/${productId}`, {
        httpsAgent: agent, // Desactivar el uso de un agente HTTPS específico
      });

      const html = responseTottus.data; // Obtener el HTML de la respuesta
      const $ = cheerio.load(html); // Cargar el HTML en Cheerio
      const scriptContent = $("script#__NEXT_DATA__").html();

      return JSON.parse(JSON.parse(JSON.stringify(scriptContent, null, 2)));
    } catch (e) {
      if (e.response.status === 404) {
        throw new ProductNotFoundError(productId);
      }

      throw new Error(e);
    }
  }
}
