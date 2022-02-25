import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { container } from "./container";
import { BaseApplication } from "./utils/base.application";
import { DbContext } from "./db/connect";

export class App extends BaseApplication {
  setup() {
    const db = container.get(DbContext);

    db.connect();

    const server = new InversifyExpressServer(container);

    server.setConfig((app) => {
      app.use(express.json());
    });

    const app = server.build();

    app.listen(process.env.PORT, () => {
      console.log(`server is running on http://localhost:${process.env.PORT}`);
    });
  }
}
