import type { NeutrinoSecurityProperties } from '../../Interfaces';

export const host_reputationDescription: NeutrinoSecurityProperties = [
	{
		displayName: 'Host',
		name: 'host',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['host_reputation'],
			},
		},
		default: '',
		description:
			'An IP address, domain name, FQDN or URL. If you supply a domain/URL it will be checked against the URI DNSBL lists.',
	},
	{
		displayName: 'list-rating',
		name: 'list_rating',
		type: 'number',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['host_reputation'],
			},
		},
		default: 3,
		description: 'Only check lists with this rating or better.',
	},
	{
		displayName: 'Zones',
		name: 'zones',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['host_reputation'],
			},
		},
		default: '',
		description:
			'Only check these DNSBL zones/hosts. Multiple zones can be supplied as comma-separated values.',
	},
];
