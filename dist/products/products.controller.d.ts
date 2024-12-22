import { ProductsService } from './product.service';
import { Product } from './interface/product.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/updata-products.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Product[];
    findOne(id: number): Product;
    create(createProductDto: CreateProductDto): Product;
    update(id: number, updateProductDto: UpdateProductDto): Product;
    delete(id: number): void;
}
