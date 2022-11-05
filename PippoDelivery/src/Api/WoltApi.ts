import { Response, Request } from 'express';
import { Config } from '../Config';
import axios from 'axios';

/**
 * Wolt controller
 */
export class WoltAPIs {
	deliveryOrder() {
		return async (req: Request, res: Response) => {
			try {
				const results = await axios.post(
					`${Config.services.wolt.url}/merchants/${Config.services.wolt.merchantId}/delivery-order`,
					req.body,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${Config.services.wolt.key}`,
						},
					}
				);
				res.status(200).send(results.data);
			} catch (error) {
				console.error(error);
			}
		};
	}
}
