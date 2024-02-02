import type { NeutrinoSecurityProperties } from '../../Interfaces';

export const email_verifyDescription: NeutrinoSecurityProperties = [
	{
		displayName: 'E-Mail',
		name: 'email',
		type: 'string',
		placeholder: 'me@example.com',
		required: true,
		displayOptions: {
			show: {
				resource: ['security_networking'],
				operation: ['email_verify'],
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
				resource: ['security_networking'],
				operation: ['email_verify'],
			},
		},
		default: false,
		description: 'Automatically attempt to fix typos in the address.',
	},
];
