import{ OK }from 'http-status-codes';
import { Request, Response, NextFunction } from 'express';

import GenericException from '../../shared/exceptions/GenericException';
import providers from '../../config/providers';

const productController = providers.productController;

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await productController.find({});
    res.status(OK).send(result);
  }
  catch (err) {
    next(new GenericException({ name: err.name, message: err.message }));
  }
}