import type { DataToolsProperties } from '../../Interfaces';

export const email_validateDescription: DataToolsProperties = [
	{
		displayName: 'E-Mail',
		name: 'email',
		type: 'string',
		placeholder: 'me@example.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['email_validate'],
			},
		},
		default: '',
	},
	{
		displayName: 'Try to fix typos',
		name: 'fix_typos',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['email_validate'],
			},
		},
		default: false,
		description: 'Automatically attempt to fix typos in the address.',
	},
];
