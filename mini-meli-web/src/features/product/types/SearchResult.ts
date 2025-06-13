import Author from '@/features/product/types/Author';
import Product from '@/features/product/types/Product';

export class SearchResult {
  constructor(
    public author: Author,
    public categories: string[],
    public items: Product[]
  ) {}
}
