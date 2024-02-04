import * as ip_info from './ip_info';
import * as geocode_address from './geocode_address';

import type { INodeProperties } from 'n8n-workflow';

export { ip_info, geocode_address };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['geolocation'],
			},
		},
		options: [
			{
				name: 'IP Info',
				value: 'ip_info',
				description:
					'Get location information about an IP address and do reverse DNS (PTR) lookups.',
				action: 'IP Info',
			},
			{
				name: 'Geocode Address',
				value: 'geocode_address',
				description: 'Geocode an address, partial address or just the name of a place.',
				action: 'Geocode Address',
			},
		],
		default: 'ip_info',
	},
	...ip_info.description,
	...geocode_address.description,
];
