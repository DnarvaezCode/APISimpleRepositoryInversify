import mongoose from "mongoose";
import { injectable } from "inversify";
import { categorySchema } from "../models/category";
import { productSchema } from "../models/product";

@injectable()
export class DbContext {
  private _db: typeof mongoose;
  private _connectionString: string;

  /**
   *Inicializar propiedades a través del constructor.
   */
  constructor() {
    this._connectionString = process.env.CONNECTION_STRING || "";
  }
  async connect() {
    try {
      this._db = await mongoose.connect(this._connectionString);
    } catch (error) {
      console.log(error);
    }
  }

  get entity() {
    return {
      products: this._db.model("Product", productSchema),
      categories: this._db.model("Category", categorySchema),
    };
  }
}
