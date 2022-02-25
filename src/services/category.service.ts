import { injectable } from "inversify";
import { CategoryRepository } from "../repositories/category.repository";

@injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}
  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findOne(id: string) {
    return this.categoryRepository.findOne(id);
  }
}
