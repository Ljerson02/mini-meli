export interface SearchAuthorDTO {
  name: string;
  lastname: string;
}

export interface SearchProductPriceDTO {
  currency: string;
  amount: number;
  decimals: number;
}

export interface SearchProductDTO {
  id: string;
  title: string;
  price: SearchProductPriceDTO;
  picture: string;
  condition: 'new' | 'used';
  free_shipping: boolean;
}

export interface SearchResponseDTO {
  author: SearchAuthorDTO;
  categories: string[];
  items: SearchProductDTO[];
}
