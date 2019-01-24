import { StockInterface } from './StockInterface';
import { AController } from '../../shared/class/AbstractController';

import StockModel from './StockModel';

export default class ProductController extends AController <StockInterface> {
  constructor() {
    super(StockModel);
  }
}