import { join } from "path";
import { readdirSync } from "fs";
import { Controller } from "@/presentation/protocols/controller";

export default (): Promise<Controller[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const controllers = [];

      const files = readdirSync(
        join(__dirname, "../../presentation/controllers")
      );

      for (let file of files) {
        const controller = await require("../../presentation/controllers/" +
          file).default;

        controllers.push(controller);
      }

      resolve(controllers);
    } catch (err) {
      reject(err);
    }
  });
};
