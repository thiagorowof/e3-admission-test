import ProductController from "../entities/Product/ProductController";
import PriceController from "../entities/Price/PriceController";
import StockController from "../entities/Stock/StockController";

const providers = (() => {
  const productController = new ProductController();
  const priceController = new PriceController();
  const stockController = new StockController();


  return {
    productController,
    priceController,
    stockController,
  }
})();

export default providers;