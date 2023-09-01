import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/products')
  getProducts(
    @Query() query: { limit: string; offset: string; brand: string },
  ): string {
    const { limit, offset, brand } = query;
    return `PRODUCTS => Limit: ${limit} - Offset: ${offset} - Brand: ${brand}`;
  }

  @Get('/products/filter')
  getProductByFilter(): string {
    return `Product filter`;
  }

  @Get('/products/productId')
  getProduct(@Param('productId') productId: string): string {
    return `Product: ${productId}`;
  }
}
