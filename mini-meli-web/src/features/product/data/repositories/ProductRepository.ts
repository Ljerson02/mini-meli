import Product from '@/features/product/types/Product';
import { SearchResult } from '@/features/product/types/SearchResult';

export interface ProductRepository {
  fetchById(id: string): Promise<Product>;
  searchByKeyword(keyword: string): Promise<SearchResult>;
}
