import { injectable } from "inversify";
import { DbContext } from "../db/connect";

@injectable()
export class ProductRepository {
  constructor(private readonly _dbContext: DbContext) {}

  async findAll() {
    return this._dbContext.entity.products.find({});
  }

  async findOne(id: string) {
    return this._dbContext.entity.products.findById(id);
  }
}
