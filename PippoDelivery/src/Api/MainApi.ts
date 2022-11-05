import { Response, Request } from 'express';
import { Config } from '../Config';
import axios from 'axios';
import { DeliveryOrderT } from '../wolt';
import { request } from 'http';
import { products } from '../DummyData/products';
/**
 * Wolt controller
 */
export class MainAPI {
	products() {
        return async (req: Request, res: Response) => {
			try {
				const results = products;
				res.status(200).send(results);
			} catch (error) {
				console.error(error);
			}
		};
	}
}
