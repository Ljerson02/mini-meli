import { Product } from '../entities/Product';
import { ProductDataSource } from '../../data/productDataSource';

const dataSource = new ProductDataSource();

export const getAllProducts = async (): Promise<Product[]> => {
  return dataSource.getAll();
};

export const getProductById = async (id: string): Promise<Product | undefined> => {
  return dataSource.findById(id);
};

export const searchProducts = async (query: string): Promise<Product[]> => {
  return dataSource.search(query);
}; 