import axios from "axios";
import cheerio from "cheerio";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false }); // Ignorar errores de

const axiosInstance = axios.create({
  baseURL: "https://api.bazaarvoice.com/data",
  headers: {
    Referer: "https://api.bazaarvoice.com/", // Cambia la URL si es necesario
    Origin: "https://api.bazaarvoice.com/", // Cambia la URL si es necesario
  },
});

type ResponseApi = {
  BatchedResults: {
    item: {
      Results: {
        EANs: string[];
      }[];
    };
  };
};

export class BarcodeBazaarvoiceRepository {
  async getByProductId(productId: string): Promise<string[]> {
    try {
      const response = await axiosInstance.get<ResponseApi>(
        `/batch.json?passkey=2xga75eqgl9scx29oke8xx11r&apiversion=5.5&displaycode=20056-es_pe&resource.item=products&filter.item=id:eq:${productId}`,
        {
          httpsAgent: agent,
        }
      );

      if (response.data.BatchedResults.item.Results.length > 0) {
        return response.data.BatchedResults.item.Results[0].EANs;
      }

      return [];
    } catch (e) {
      throw new Error(e);
    }
  }
}
