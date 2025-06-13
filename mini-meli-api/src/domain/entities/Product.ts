export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  description: string;
  categories: string[];
} 