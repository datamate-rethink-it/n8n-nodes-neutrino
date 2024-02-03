import type { NeutrinoSecurityProperties } from '../../Interfaces';

export const ip_blocklistDescription: NeutrinoSecurityProperties = [
	{
		displayName: 'IP',
		name: 'ip',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['ip_blocklist'],
			},
		},
		default: '',
		description:
			'An IPv4 or IPv6 address. Accepts standard IP notation (with or without port number), CIDR notation and IPv6 compressed notation. If multiple IPs are passed using comma-separated values the first non-bogon address on the list will be checked.',
	},
	{
		displayName: 'VPN Lookup',
		name: 'vpn_lookup',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['ip_blocklist'],
			},
		},
		default: false,
		description:
			'Include public VPN provider IP addresses. NOTE: For more advanced VPN detection including the ability to identify private and stealth VPNs use the IP Probe API.',
	},
];
