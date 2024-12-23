import { DataSource, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductRepository extends Repository<Product> {
    private dataSource;
    constructor(dataSource: DataSource);
}
