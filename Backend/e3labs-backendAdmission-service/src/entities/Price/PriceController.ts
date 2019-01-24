import { PriceInterface } from './PriceInterface';
import { AController } from '../../shared/class/AbstractController';

import PriceModel from './PriceModel';

export default class ProductController extends AController <PriceInterface> {
  constructor() {
    super(PriceModel);
  }
}