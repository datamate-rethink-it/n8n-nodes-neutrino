import * as ip_info from './ip_info';

import type { INodeProperties } from 'n8n-workflow';

export { ip_info };

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
		],
		default: 'ip_info',
	},
	...ip_info.description,
];
