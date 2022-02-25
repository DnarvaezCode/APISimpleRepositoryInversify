import { injectable } from "inversify";
import { ProductRepository } from "../repositories/product.repository";

@injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findAll() {
    return this.productRepository.findAll();
  }

  async findOne(id: string) {
    return this.productRepository.findOne(id);
  }
}
