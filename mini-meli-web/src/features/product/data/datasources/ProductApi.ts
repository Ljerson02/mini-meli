import { ProductRepository } from '@/features/product/data/repositories/ProductRepository';
import Product from '@/features/product/types/Product';
import { SearchResult } from '../../types/SearchResult';

const API_BASE_URL = 'http://localhost:3000/api/items';

export class ProductAPI implements ProductRepository {
  async fetchById(id: string): Promise<Product> {
    try {
      const res = await fetch(`${API_BASE_URL}/${id}`, {
        cache: 'no-store',
      });
      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        throw new Error(
          `Error fetching product by ID: ${res.status} ${res.statusText} ${errorText}`
        );
      }
      const productDetail = await res.json().catch(() => {
        throw new Error('Error parsing product detail response as JSON');
      });
      if (!productDetail || !productDetail.item) {
        throw new Error('Product detail response is missing the item property');
      }
      return productDetail.item;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`fetchById failed: ${error.message}`);
      }
      throw new Error('fetchById failed: Unknown error');
    }
  }

  async searchByKeyword(keyword: string): Promise<SearchResult> {
    try {
      const res = await fetch(`${API_BASE_URL}?q=${encodeURIComponent(keyword)}`, {
        cache: 'no-store',
      });
      if (!res.ok) {
        const errorText = await res.text().catch(() => '');
        throw new Error(`Error searching products: ${res.status} ${res.statusText} ${errorText}`);
      }
      const json = await res.json().catch(() => {
        throw new Error('Error parsing search result response as JSON');
      });
      return json;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`searchByKeyword failed: ${error.message}`);
      }
      throw new Error('searchByKeyword failed: Unknown error');
    }
  }
}
