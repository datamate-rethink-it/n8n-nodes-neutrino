import type { NeutrinoGeolocationProperties } from '../../Interfaces';

export const ip_infoDescription: NeutrinoGeolocationProperties = [
	{
		displayName: 'IP',
		name: 'ip',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['ip_info'],
			},
		},
		default: '',
		description: 'IPv4 or IPv6 address.',
	},
	{
		displayName: 'Reverse Lookup',
		name: 'reverse_lookup',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['ip_info'],
			},
		},
		default: false,
		description:
			'Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it.',
	},
];
