import { Request, Response } from "express";
import {
  controller,
  httpGet,
  httpPatch,
  httpPost,
  httpDelete,
} from "inversify-express-utils";
import { CategoryService } from "../services/category.service";

@controller("/api/category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @httpGet("/")
  async index(req: Request, res: Response) {
    const categories = await this.categoryService.findAll();
    res.json({
      data: {
        categories,
      },
    });
  }

  @httpGet("/:id")
  async show(req: Request, res: Response) {
    const category = await this.categoryService.findOne(req.params.id);

    res.json({
      data: {
        category,
      },
    });
  }
}
