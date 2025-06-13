import ProductListItem from '@/features/product/components/ProductListItem';
import { searchProducts } from '@/features/product/services/SearchProducts';
import type { SearchProductDTO } from '@/features/product/dto/SearchResponseDTO';
import type Product from '@/features/product/types/Product';
import Link from 'next/link';
import CategoriesNav from '@/features/commons/components/CategoriesNav';

function toSearchProductDTO(product: Product): SearchProductDTO {
  return {
    id: product.id,
    title: product.title,
    price: product.price,
    picture: product.picture,
    condition: product.condition === 'new' ? 'new' : 'used',
    free_shipping: product.free_shipping,
  };
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const params = await searchParams;
  const search = params.search || '';
  let products: SearchProductDTO[] = [];
  let categories: string[] = [];
  let errorMessage: string | null = null;
  if (search) {
    try {
      const result = await searchProducts(search);
      products = (result.items || []).map(toSearchProductDTO);
      categories = result.categories || [];
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = String(error);
      }
    }
  }

  return (
    <div className="container py-5">
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          Error: {errorMessage}
        </div>
      )}
      <CategoriesNav categories={categories} />
      <ProductListItem products={products} />
    </div>
  );
}
