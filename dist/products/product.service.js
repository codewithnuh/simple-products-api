"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [
            { id: 1, name: 'Product A', description: 'Description of A', price: 10 },
            { id: 2, name: 'Product B', description: 'Description of B', price: 20 },
        ];
    }
    findAll() {
        return this.products;
    }
    findOne(id) {
        const product = this.products.find((p) => p.id === id);
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    create(product) {
        const newProduct = {
            id: this.products.length + 1,
            ...product,
        };
        this.products.push(newProduct);
        return newProduct;
    }
    update(id, updateProductDto) {
        const index = this.products.findIndex((p) => p.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Product not found');
        }
        this.products[index] = {
            ...this.products[index],
            ...updateProductDto,
        };
        return this.products[index];
    }
    delete(id) {
        this.products = this.products.filter((p) => p.id !== id);
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
//# sourceMappingURL=product.service.js.map