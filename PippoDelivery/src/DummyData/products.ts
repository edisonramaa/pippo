export const products = [
	{
		id: 1,
		product: {
			title: 'VR glasses',
			description:
				'Enjoy! The Oculus Quest 2 is a self-contained unit capable of tracking controller, hand, and headset movement without further kit, as did its predecessor. The inside-out tracking on the Quest 2 manages to keep up exceptionally well, and without fear of falling out of eyeline with the sensors',
			category: 'indoors',
			rent_price: 7,
			currency: 'Eur',
			count: 1,
			days: 1,
			preparation_time: 10,
			imageUrl:
				'https://d3fa68hw0m2vcc.cloudfront.net/534/242227088.jpeg',
		},
		owner: {
			name: 'Hanna',
			phoneNumber: '+358414141414',
			send_tracking_link_sms: true,
			address: 'Capellan Puistotie 25A',
		},
	},
	{
		id: 2,
		product: {
			title: 'Ice Scates size 38',
			description: 'Feel free to rent my skates for a full day.',
			category: 'outdoors',
			rent_price: 2,
			currency: 'Eur',
			count: 1,
			days: 1,
			preparation_time: 10,
			imageUrl:
				'https://cdn.shopify.com/s/files/1/0331/9201/8057/products/jackson-mystique-figure-skates-white-figure-skates-29165325713557_1200x.jpg?v=1647347049',
		},
		owner: {
			name: 'Oona',
			phoneNumber: '+358313131313',
			send_tracking_link_sms: true,
			address: 'Olavinkatu 1',
		},
	},
	{
		id: 3,
		product: {
			title: 'PS5',
			description: '',
			category: 'indoors',
			rent_price: 5,
			currency: 'Eur',
			count: 1,
			days: 1,
			preparation_time: 0,
			imageUrl:
				'https://cdn.arstechnica.net/wp-content/uploads/2022/10/ps5.jpg',
		},
		owner: {
			name: 'Esa',
			phoneNumber: '+358515151515',
			send_tracking_link_sms: true,
			address: 'Mannerheimintie 109',
		},
	},
	{
		product: {
			title: '1984',
			description:
				'Do you feel like reading a book? Here is one of the best dystopian social science fiction novel and cautionary tale written by the English writer George Orwell. ',
			category: 'indoors',
			rent_price: 2,
			currency: 'Eur',
			count: 1,
			days: 30,
			preparation_time: 5,
			imageUrl: 'https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg',
		},
		owner: {
			name: 'Elio',
			phoneNumber: '+358515151515',
			send_tracking_link_sms: true,
			address: 'Radiokatu 10A',
		},
	},
];
