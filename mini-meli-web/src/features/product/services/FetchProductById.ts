'use server';

import { ProductAPI } from '@/features/product/data/datasources/ProductApi';

export const fetchProductById = async (id: string) => {
  const repo = new ProductAPI();
  return await repo.fetchById(id);
};
