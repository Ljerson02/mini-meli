import { render, screen } from '@testing-library/react';
import SearchPage from '../page';
import { searchProducts } from '@/features/product/services/SearchProducts';

jest.mock('@/features/product/services/SearchProducts', () => ({
  searchProducts: jest.fn(),
}));

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('SearchPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render empty state when no search query is provided', async () => {
    const searchParams = Promise.resolve({});
    render(await SearchPage({ searchParams }));

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should render products when search is successful', async () => {
    const mockProducts = {
      items: [
        {
          id: '1',
          title: 'Test Product',
          price: {
            currency: '$',
            amount: 1000,
            decimals: 1,
          },
          picture:
            'https://tayuh2o6fu1ffl9a.public.blob.vercel-storage.com/products/iphone13.webpclear',
          condition: 'new',
          free_shipping: true,
        },
      ],
      categories: ['Category 1', 'Category 2'],
    };

    (searchProducts as jest.Mock).mockResolvedValueOnce(mockProducts);

    const searchParams = Promise.resolve({ search: 'test' });
    render(await SearchPage({ searchParams }));

    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Category 2')).toBeInTheDocument();

    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });

  it('should render error message when search fails', async () => {
    const errorMessage = 'Failed to fetch products';
    (searchProducts as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    const searchParams = Promise.resolve({ search: 'test' });
    render(await SearchPage({ searchParams }));

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });

  it('should handle non-Error objects in catch block', async () => {
    const errorMessage = 'Unknown error';
    (searchProducts as jest.Mock).mockRejectedValueOnce(errorMessage);

    const searchParams = Promise.resolve({ search: 'test' });
    render(await SearchPage({ searchParams }));

    expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
  });
});
