import { Request, Response } from "express";
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
  httpDelete,
} from "inversify-express-utils";
import { ProductService } from "../services/product.service";

@controller("/api/product")
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @httpGet("/")
  async index(req: Request, res: Response) {
    const products = await this.productService.findAll();
    res.json({
      data: {
        products,
      },
    });
  }

  @httpGet("/:id")
  async show(req: Request, res: Response) {
    const product = await this.productService.findOne(req.params.id);

    res.json({
      data: {
        product,
      },
    });
  }
}
