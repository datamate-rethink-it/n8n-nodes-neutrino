import * as domain_lookup from './domain_lookup';
import * as email_verify from './email_verify';
import * as ip_probe from './ip_probe';
import * as ip_blocklist from './ip_blocklist';
import * as host_reputation from './host_reputation';

import type { INodeProperties } from 'n8n-workflow';

export { domain_lookup, email_verify, ip_probe, ip_blocklist, host_reputation };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['security_networking'],
			},
		},
		options: [
			{
				name: 'Domain lookup',
				value: 'domain_lookup',
				description:
					'Retrieve domain name details and detect potentially malicious or dangerous domains.',
				action: 'Domain Lookup',
			},
			{
				name: 'Email Verify',
				value: 'email_verify',
				description:
					'SMTP based email address verification. Verify real users and filter out low-quality email addresses.',
				action: 'Email Verify',
			},
			{
				name: 'IP Probe',
				value: 'ip_probe',
				description: 'Execute a realtime network probe against an IPv4 or IPv6 address.',
				action: 'IP Probe',
			},
			{
				name: 'IP Blocklist',
				value: 'ip_blocklist',
				description:
					'The IP Blocklist API will detect potentially malicious or dangerous IP addresses.',
				action: 'IP Blocklist',
			},
			{
				name: 'Host Reputation',
				value: 'host_reputation',
				description:
					'Check the reputation of an IP address, domain name or URL against a comprehensive list of blacklists and blocklists.',
				action: 'Host Reputation',
			},
		],
		default: 'domain_lookup',
	},
	...domain_lookup.description,
	...email_verify.description,
	...ip_probe.description,
	...ip_blocklist.description,
	...host_reputation.description,
];
