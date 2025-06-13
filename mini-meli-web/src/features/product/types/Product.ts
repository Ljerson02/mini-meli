import { ProductSummary } from '@/features/product/types/ProductSummary';
import Price from '@/features/product/types/Price';

export default class Product extends ProductSummary {
  constructor(
    public id: string,
    public title: string,
    public price: Price,
    public picture: string,
    public condition: string,
    public free_shipping: boolean,
    public sold_quantity: number,
    public description: string,
    public categories?: string[]
  ) {
    super(id, title, price, picture, condition, free_shipping);
    this.sold_quantity = sold_quantity;
    this.description = description;
    this.categories = categories;
  }
}
