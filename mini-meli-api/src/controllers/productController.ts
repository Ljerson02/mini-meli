import { Request, Response } from 'express';
import { getAllProducts, getProductById, searchProducts } from '../domain/usecases/productUseCases';

export const getItems = async (req: Request, res: Response) => {
  const q = (req.query.q as string)?.toLowerCase() || '';
  const filtered = q ? await searchProducts(q) : await getAllProducts();

  const categoriesSet = new Set<string>();
  filtered.forEach(p => {
    p.categories.forEach(cat => categoriesSet.add(cat));
  });
  const categories = Array.from(categoriesSet);

  const response = {
    author: { name: "Juan", lastname: "Pérez" },
    categories,
    items: filtered.map(p => ({
      id: p.id,
      title: p.title,
      price: p.price,
      picture: p.picture,
      condition: p.condition,
      free_shipping: p.free_shipping,
    })),
  };

  res.json(response);
};

export const getItemById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = await getProductById(id);

  if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

  const response = {
    author: { name: "Juan", lastname: "Pérez" },
    item: {
      id: product.id,
      title: product.title,
      price: product.price,
      picture: product.picture,
      condition: product.condition,
      free_shipping: product.free_shipping,
      sold_quantity: product.sold_quantity,
      description: product.description,
      categories: product.categories
    }
  };

  res.json(response);
}; 