import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    create(product: Product): Promise<Product>;
    update(id: string, updatedData: Partial<Product>): Promise<Product>;
    remove(id: string): Promise<void>;
}
