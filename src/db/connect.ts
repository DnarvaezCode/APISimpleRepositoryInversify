import { IProduct } from "./../models/interfaces/interface.product";
import { ICategory } from "./../models/interfaces/interface.category";
import { model, connect } from "mongoose";
import { injectable } from "inversify";
import { categorySchema } from "../models/category";
import { productSchema } from "../models/product";

@injectable()
export class DbContext {
  private _connectionString: string;
  /**
   *Inicializar propiedades a través del constructor.
   */
  constructor() {
    this._connectionString = process.env.CONNECTION_STRING || "";
  }
  async connect() {
    try {
      await connect(this._connectionString);
      console.log("Database is conected!");
    } catch (error) {
      console.log(error);
    }
  }

  get entity() {
    return {
      products: model<IProduct>("Product", productSchema),
      categories: model<ICategory>("Category", categorySchema),
    };
  }
}
