import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float') // Change this to 'float' or 'numeric' instead of 'integer'
  price: number;

  @Column('float', { nullable: true }) // Similarly for discountPrice
  discountPrice: number;

  @Column()
  description: string;

  @Column()
  sku: string;

  @Column()
  category: string;

  @Column('int') // integer type for stock
  stock: number;

  @Column('text', { array: true, nullable: true })
  tags: string[];

  @Column({ default: true })
  isActive: boolean;

  @Column({ nullable: true })
  imageUrl: string;
}
