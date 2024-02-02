import * as email_verify from './email_verify';
import type { INodeProperties } from 'n8n-workflow';

export { email_verify };

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
				name: 'Email Verify',
				value: 'email_verify',
				description:
					'SMTP based email address verification. Verify real users and filter out low-quality email addresses.',
				action: 'Email Verify',
			},
		],
		default: 'email_verify',
	},
	...email_verify.description,
];
