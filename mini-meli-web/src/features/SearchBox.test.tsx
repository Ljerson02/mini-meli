import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('SearchBox', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it('renders search input and button', () => {
    render(<SearchBox />);

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('placeholder', 'Buscar');

    const searchButton = screen.getByRole('button');
    expect(searchButton).toBeInTheDocument();
  });

  it('updates input value when typing', () => {
    render(<SearchBox />);

    const searchInput = screen.getByRole('searchbox');
    fireEvent.change(searchInput, { target: { value: 'test query' } });

    expect(searchInput).toHaveValue('test query');
  });

  it('navigates to search results when submitting with non-empty query', () => {
    render(<SearchBox />);

    const searchInput = screen.getByRole('searchbox');
    const form = screen.getByRole('search');

    fireEvent.change(searchInput, { target: { value: 'test query' } });
    fireEvent.submit(form);

    expect(mockPush).toHaveBeenCalledWith('/items?search=test%20query');
  });

  it('does not navigate when submitting with empty query', () => {
    render(<SearchBox />);

    const form = screen.getByRole('search');
    fireEvent.submit(form);

    expect(mockPush).not.toHaveBeenCalled();
  });

  it('does not navigate when submitting with only whitespace', () => {
    render(<SearchBox />);

    const searchInput = screen.getByRole('searchbox');
    const form = screen.getByRole('search');

    fireEvent.change(searchInput, { target: { value: '   ' } });
    fireEvent.submit(form);

    expect(mockPush).not.toHaveBeenCalled();
  });
});
