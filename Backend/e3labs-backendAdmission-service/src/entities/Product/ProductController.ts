import { ProductInterface } from './ProductInterface';
import { AController } from '../../shared/class/AbstractController';

import ProductModel from './ProductModel';

export default class ProductController extends AController <ProductInterface> {
  constructor() {
    super(ProductModel);
  }
}