import * as bin_lookup from './bin_lookup';
import * as currency_convert from './currency_convert';

import type { INodeProperties } from 'n8n-workflow';

export { bin_lookup, currency_convert };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['ecommerce'],
			},
		},
		options: [
			{
				name: 'BIN Lookup',
				value: 'bin_lookup',
				description:
					'Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup..',
				action: 'BIN Lookup',
			},
			{
				name: 'Currency Convert',
				value: 'currency_convert',
				description: 'A currency and unit conversion tool.',
				action: 'Currency Convert',
			},
		],
		default: 'bin_lookup',
	},
	...bin_lookup.description,
	...currency_convert.description,
];
