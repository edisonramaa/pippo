import { Response, Request } from 'express';
import { Config } from '../Config';
import axios from 'axios';
import { DeliveryOrderT } from '../wolt';
import { v4 as uuidv4 } from 'uuid';

/**
 * Wolt controller
 */
export class WoltAPIs {
	deliveryOrder() {
		return async (req: Request, res: Response) => {
			const extraData = {
				customer_support: {
					email: 'customersupport@pippo.com',
					phone_number: '+358213141516',
					url: 'https://pipo.com/contact_us',
				},
				merchant_order_reference_id: uuidv4(),
				is_no_contact: true,
				tips: [],
				scheduled_dropoff_time: null,
			};
			const payload: DeliveryOrderT = { ...extraData, ...req.body };
			try {
				const results = await axios.post(
					`${Config.services.wolt.url}/merchants/${Config.services.wolt.merchantId}/delivery-order`,
					payload,
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${Config.services.wolt.key}`,
						},
					}
				);

				const data = {
					tracking: results.data.tracking,
					price: results.data.price,
					eta: results.data.dropoff.eta,
				}
				res.status(200).send(results.data);
			} catch (error) {
				console.error(error);
			}
		};
	}
}
