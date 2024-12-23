import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity'; // your Product entity
import { ProductRepository } from './products/product.repository'; // your ProductRepository
import { DatabaseService } from './database/database.service'; // Add the DatabaseService if needed

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // Replace with your PostgreSQL username
      password: 'your_password', // Replace with your PostgreSQL password
      database: 'ecommerce_db', // Replace with your database name
      entities: [Product],
      synchronize: true, // Make sure you only use synchronize in development (not production)
    }),
    TypeOrmModule.forFeature([ProductRepository]), // Add ProductRepository to TypeOrmModule
  ],
  providers: [DatabaseService], // Add your service if required
})
export class AppModule {}
