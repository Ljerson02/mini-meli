import { ProductSummary } from '@/features/product/types/ProductSummary';

import Author from '@/features/product/types/Author';
import Product from '@/features/product/types/Product';
import { SearchProductDTO } from '@/features/product/dto/SearchResponseDTO';
import Price from '@/features/product/types/Price';

export const dtoToProductSummary = (dto: SearchProductDTO): ProductSummary => {
  return {
    id: dto.id,
    title: dto.title,
    price: { currency: dto.price.currency } as Price,
    picture: dto.picture,
    condition: dto.condition,
    free_shipping: dto.free_shipping,
  };
};
