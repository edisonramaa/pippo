import { Response, Request } from 'express';

import { products } from '../DummyData/products';

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
