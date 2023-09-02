import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategory(@Param() query: { id: string; productId: string }) {
    const { id, productId } = query;
    return `Producto ${productId} Id ${id}`;
  }
}
