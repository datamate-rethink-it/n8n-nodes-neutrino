import type { NeutrinoEcommerceProperties } from '../../Interfaces';

export const bin_lookupDescription: NeutrinoEcommerceProperties = [
	{
		displayName: 'BIN Number',
		name: 'bin_number',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['ecommerce'],
				operation: ['bin_lookup'],
			},
		},
		default: '',
		description:
			'The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy.',
	},
	{
		displayName: 'Customer IP',
		name: 'customer_ip',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['ecommerce'],
				operation: ['bin_lookup'],
			},
		},
		default: '',
		description:
			'Pass in the customers IP address and we will return some extra information about them.',
	},
];
