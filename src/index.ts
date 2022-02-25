import "dotenv/config";
import "reflect-metadata";
import { App } from "./application";
import "./controllers/product.controller";
import "./controllers/category.controller";

export async function run() {
  new App().setup();
}

run();
