import { Controller, Get, Query, Param } from '@nestjs/common';
import { ProductService } from '../../services/product';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  getProducts(
    @Query() query: { limit: string; offset: string; brand: string },
  ): string {
    return this.productService.getProducts(query);
  }

  @Get('/filter')
  getProductByFilter(): string {
    return `Product filter`;
  }

  @Get('/:productId')
  getProduct(@Param('productId') productId: string): string {
    return `Product: ${productId}`;
  }
}
