import { productos, Producto } from '../data';

export class ProductDataSource {
  async getAll(): Promise<Producto[]> {
    return productos;
  }

  async findById(id: string): Promise<Producto | undefined> {
    return productos.find(p => p.id === id);
  }

  async search(query: string): Promise<Producto[]> {
    const q = query.toLowerCase();
    return productos.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.categories.some(cat => cat.toLowerCase().includes(q))
    ).slice(0, 4);
  }
} 