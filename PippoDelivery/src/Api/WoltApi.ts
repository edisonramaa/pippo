import express, { Express, Response, Request } from 'express';
import fs from 'fs';
import { Config } from '../Config';
import axios from 'axios';

/**
 * Wolt controller
 */
export class WoltAPI {

    route(express: Express) {
        express.post('/api/delivery-order', this.deliveryOrder());
    }

    deliveryOrder() {
        return async (req: Request, res: Response) => {
            try {
                const results = await axios.post(`${Config.services.wolt.url}/merchants/${Config.services.wolt.merchantId}/merchantId`);
                res.status(200).send(results.data);
            } catch (error) {
                console.error(error);
            }
        }
    }
}