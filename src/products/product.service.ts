// src/products/products.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './interface/product.interface';
import { UpdateProductDto } from './dto/updata-products.dto';
@Injectable()
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Product A', description: 'Description of A', price: 10 },
    { id: 2, name: 'Product B', description: 'Description of B', price: 20 },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  create(product: Omit<Product, 'id'>): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...product,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, updateProductDto: UpdateProductDto): Product {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    // Update the product using the provided DTO properties
    this.products[index] = {
      ...this.products[index], // Keep existing properties
      ...updateProductDto, // Overwrite with DTO values
    };

    return this.products[index];
  }
  delete(id: number): void {
    this.products = this.products.filter((p) => p.id !== id);
  }
}
