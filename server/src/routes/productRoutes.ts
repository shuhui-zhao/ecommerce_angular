import express, { Request, Response } from 'express';
import { Product } from '../models/Product';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get the items in the cart
// router.get('/', async (_req: Request, res: Response) => {
//     const products = await Product.find();
//     res.json(products);
//   });
// // Add a new product
router.post('/newProducts', async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({ err: err.message });
    }
  }
});

export default router;
