'use server';

import { ProductAPI } from '@/features/product/data/datasources/ProductApi';

export async function searchProducts(keyword: string) {
  const repo = new ProductAPI();
  return await repo.searchByKeyword(keyword);
}
