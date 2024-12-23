import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: Partial<Product>): Promise<Product>;
    update(id: number, updatedData: Partial<Product>): Promise<Product>;
    remove(id: number): Promise<void>;
}
