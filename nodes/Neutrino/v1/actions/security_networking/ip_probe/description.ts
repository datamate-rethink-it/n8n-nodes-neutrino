import type { NeutrinoSecurityProperties } from '../../Interfaces';

export const ip_probeDescription: NeutrinoSecurityProperties = [
	{
		displayName: 'IP',
		name: 'ip',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['ip_probe'],
			},
		},
		default: '',
		description: 'IPv4 or IPv6 address.',
	},
];
