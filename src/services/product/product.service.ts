import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(query: { limit: string; offset: string; brand: string }) {
    const { limit, offset, brand } = query;
    return `PRODUCTS => Limit: ${limit} - Offset: ${offset} - Brand: ${brand}`;
  }
}
