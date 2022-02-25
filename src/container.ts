import { Container } from "inversify";
import { DbContext } from "./db/connect";
import { CategoryRepository } from "./repositories/category.repository";
import { ProductRepository } from "./repositories/product.repository";
import { CategoryService } from "./services/category.service";
import { ProductService } from "./services/product.service";

export const container = new Container({
  defaultScope: "Singleton",
});

container.bind(DbContext).toSelf();
container.bind(ProductRepository).toSelf();
container.bind(ProductService).toSelf();
container.bind(CategoryRepository).toSelf();
container.bind(CategoryService).toSelf();
