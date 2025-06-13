import { formatLAPrices, translateConditionToEs } from '@/utils/formaters';
import Image from 'next/image';
import Link from 'next/link';

interface ProductListProps {
  products: {
    id: string;
    title: string;
    price: { currency: string; amount: number };
    picture: string;
    condition: string;
    free_shipping: boolean;
  }[];
}

export default function ProductListItem({ products }: ProductListProps) {
  if (!products.length) return <p>No se encontraron productos.</p>;
  return (
    <ul className="list-group">
      {products.map((product) => (
        <li key={product.id} className="d-flex">
          <Link
            data-testid="product-list-item"
            href={`/items/${product.id}`}
            className="d-flex align-items-center text-decoration-none"
            style={{ minHeight: '100px', width: '100%' }}
          >
            <Image
              src={product.picture}
              alt={product.title}
              width={100}
              height={100}
              className="d-block d-sm-none me-3"
            />
            <Image
              src={product.picture}
              alt={product.title}
              width={150}
              height={150}
              className="d-none d-md-block me-3"
            />
            <div className="d-flex flex-column flex-md-row h-100 w-100">
              <div className="d-flex flex-column h-100 w-100 alig-items-start justify-content-start mr-auto">
                <div className="d-flex align-items-center mb-2">
                  <span className="fs-4 me-2">
                    {product.price.currency} {formatLAPrices(product.price.amount)}
                  </span>
                  {product.free_shipping && (
                    <span className="badge rounded-pill bg-secondary">
                      <span className="bi bi-truck"></span>
                    </span>
                  )}
                </div>
                <p className="">{product.title}</p>
              </div>
              <div className="d-flex me-0 me-md-5 mt-3 h-100">
                <p className="small">{translateConditionToEs(product.condition)}</p>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
