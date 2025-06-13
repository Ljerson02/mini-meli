import CategoriesNav from '@/features/commons/components/CategoriesNav';
import PriceNumberFormat from '@/features/commons/components/PriceNumberFormat';
import { fetchProductById } from '@/features/product/services/FetchProductById';
import { translateConditionToEs } from '@/utils/formaters';
import Image from 'next/image';

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  let product = null;
  let errorMessage: string | null = null;
  try {
    product = await fetchProductById(resolvedParams.id);
  } catch (error: unknown) {
    if (error instanceof Error) {
      errorMessage = error.message;
    } else {
      errorMessage = String(error);
    }
  }
  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger" role="alert">
          Error: {errorMessage}
        </div>
      )}

      <div data-testid="product-detail" className="container mt-3 mt-md-1 py-2">
        {product?.categories && <CategoriesNav categories={product?.categories} />}
        <div className="row mt-4 mb-4 gx-4 bg-light ">
          <div className="col-12 col-md-8 d-flex flex-column mb-4 mb-md-0 px-4 py-2">
            {product && (
              <>
                <Image
                  className="w-75"
                  src={product.picture}
                  alt={product.title}
                  width={600}
                  height={400}
                  style={{
                    objectFit: 'contain',
                    marginBottom: 24,
                  }}
                />
                <h2 className="mb-3 fw-bold ">Descripción del producto</h2>
                <p style={{ color: '#666' }}>
                  {product.description +
                    product.description +
                    product.description +
                    product.description}
                </p>
              </>
            )}
          </div>

          <div className="col-12 col-md-4" style={{ padding: 24 }}>
            {product && (
              <>
                <p className="mb-1">{translateConditionToEs(product.condition)}</p>
                <h3 className="fs-4 fw-bolder mb-3 text-start">{product.title}</h3>
                <div className="fs-2 fw-bold mb-5">
                  <PriceNumberFormat price={product.price} />
                </div>
                <button
                  className="py-2 bg-primary fs-5 fw-bold w-100"
                  style={{
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                  }}
                >
                  Comprar
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
