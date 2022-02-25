import { injectable } from "inversify";
import { DbContext } from "../db/connect";

@injectable()
export class CategoryRepository {
  constructor(private readonly _dbContext: DbContext) {}

  async findAll() {
    return this._dbContext.entity.categories.find({});
  }

  async findOne(id: string) {
    return this._dbContext.entity.categories.findById(id);
  }
}
