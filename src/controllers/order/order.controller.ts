import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
  @Get('/')
  getOrders() {
    return `Order controller`;
  }
}
