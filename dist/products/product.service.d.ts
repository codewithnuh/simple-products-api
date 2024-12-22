import { Product } from './interface/product.interface';
import { UpdateProductDto } from './dto/updata-products.dto';
export declare class ProductsService {
    private products;
    findAll(): Product[];
    findOne(id: number): Product;
    create(product: Omit<Product, 'id'>): Product;
    update(id: number, updateProductDto: UpdateProductDto): Product;
    delete(id: number): void;
}
