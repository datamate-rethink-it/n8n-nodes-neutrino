import type { NeutrinoSecurityProperties } from '../../Interfaces';

export const domain_lookupDescription: NeutrinoSecurityProperties = [
	{
		displayName: 'Host',
		name: 'host',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['domain_lookup'],
			},
		},
		default: '',
		description: 'A domain name, hostname, FQDN, URL, HTML link or email address to lookup.',
	},
	{
		displayName: 'live',
		name: 'live',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['email_verify'],
			},
		},
		default: true,
		description:
			'For domains that we have never seen before then perform various live checks and realtime reconnaissance. NOTE: this option may add additional non-deterministic delay to the request, if you require consistently fast API response times or just want to check our domain blocklists then you can disable this option.',
	},
];
