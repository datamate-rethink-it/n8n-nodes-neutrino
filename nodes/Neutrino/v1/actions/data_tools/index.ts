import * as email_validate from './email_validate';
import type { INodeProperties } from 'n8n-workflow';

export { email_validate };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
			},
		},
		options: [
			{
				name: 'Email Validate',
				value: 'email_validate',
				description: 'Parse, validate and clean an email address',
				action: 'Email Validate',
			},
		],
		default: 'email_validate',
	},
	...email_validate.description,
];
