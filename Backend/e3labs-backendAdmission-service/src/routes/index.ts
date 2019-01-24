import Product from './Product';
import HealthCheck from './HealthCheck';
import server from '../shared/server';

export default {
  /**
   * Start routes of server
   */
  initRoutes() {
    server.use('/Product', Product);
    server.use('/health', HealthCheck);
  }
}