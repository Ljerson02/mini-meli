import Price from '@/features/product/types/Price';

export class ProductSummary {
  constructor(
    public id: string,
    public title: string,
    public price: Price,
    public picture: string,
    public condition: string,
    public free_shipping: boolean
  ) {}
}
