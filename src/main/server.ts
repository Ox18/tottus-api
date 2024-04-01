import { setupApp } from "./config/app";
import env from "./config/env";

process.env.DEBUG = "axios:*,-axios:response,-axios:request";

(async () => {
  const app = await setupApp();
  app.listen(env.port, () =>
    console.log(`Server running at http://localhost:${env.port}`)
  );
})().catch(console.error);
