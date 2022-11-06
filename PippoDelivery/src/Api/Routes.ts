import { Express } from 'express';
import { MainAPI } from './MainApi';
import { WoltAPIs } from './WoltApi';

/**
 * Routes controller
 */
export class Routes {

    protected woltApi = new WoltAPIs();
    protected api = new MainAPI();

    route(express: Express) {
        express.post('/api/delivery-order', this.woltApi.deliveryOrder());
        express.get('/api/products', this.api.getProducts());
    }
}