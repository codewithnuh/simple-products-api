// src/products/dto/get-products.dto.ts
import { IsOptional, IsNumber, Min, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetProductsDto {
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => parseInt(value))
  page: number = 1;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Transform(({ value }) => parseInt(value))
  limit: number = 10;
  @IsOptional()
  @IsString()
  search?: string;
}
