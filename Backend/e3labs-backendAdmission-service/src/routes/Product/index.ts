import { getProducts } from './../../entities/Product/ProductBusiness';
import { Request, Response, NextFunction, Router } from 'express';
const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getProducts(req, res, next);
});

export default router;