import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductDetail from '../page';
import { fetchProductById } from '@/features/product/services/FetchProductById';

jest.mock('@/features/product/services/FetchProductById', () => ({
  fetchProductById: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('ProductDetail', () => {
  const mockProduct = {
    id: '1',
    title: 'Test Product',
    price: {
      currency: '$',
      amount: 1000,
      decimals: 1,
    },
    picture: 'https://example.com/image.jpg',
    condition: 'new',
    free_shipping: true,
    description: 'Test description',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render product details when fetch is successful', async () => {
    (fetchProductById as jest.Mock).mockResolvedValueOnce(mockProduct);

    const params = Promise.resolve({ id: '1' });
    render(await ProductDetail({ params }));

    expect(screen.getByText('Test Product')).toBeInTheDocument();

    expect(screen.getByText('Nuevo')).toBeInTheDocument();

    expect(screen.getByText('Descripción del producto')).toBeInTheDocument();
    expect(
      screen.getByText(
        mockProduct.description +
          mockProduct.description +
          mockProduct.description +
          mockProduct.description
      )
    ).toBeInTheDocument();

    const productImage = screen.getByAltText('Test Product');
    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', 'https://example.com/image.jpg');

    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });

  it('should render error message when fetch fails', async () => {
    const errorMessage = 'Failed to fetch product';
    (fetchProductById as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const params = Promise.resolve({ id: '1' });
    render(await ProductDetail({ params }));

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it('should handle non-Error objects in catch block', async () => {
    const errorMessage = 'Unknown error';
    (fetchProductById as jest.Mock).mockRejectedValueOnce(errorMessage);

    const params = Promise.resolve({ id: '1' });
    render(await ProductDetail({ params }));

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });
});
