import { Response, Request } from 'express';

import { products } from '../DummyData/products';
import { rentals } from '../DummyData/rentals';

export class MainAPI {

	getProducts() {
        return async (req: Request, res: Response) => {
			try {
				const results = products;
				res.status(200).send(results);
			} catch (error) {
				console.error(error);
			}
		};
	}

	getRentals() {
        return async (req: Request, res: Response) => {
			try {
				const results = rentals;
				res.status(200).send(results);
			} catch (error) {
				console.error(error);
			}
		};
	}
}
