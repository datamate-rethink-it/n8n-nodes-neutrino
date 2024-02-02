import type {
	ICredentialTestRequest,
	ICredentialType,
	IAuthenticateGeneric,
	INodeProperties,
} from 'n8n-workflow';

export class NeutrinoApi implements ICredentialType {
	name = 'neutrino';
	displayName = 'Neutrino API';
	documentationUrl = 'https://www.neutrinoapi.com/api/api-basics/';
	properties: INodeProperties[] = [
		{
			displayName: 'User ID',
			name: 'user_id',
			type: 'string',
			description: 'Get your user ID from https://www.neutrinoapi.com/account/main/',
			default: '',
		},
		{
			displayName: 'API Key',
			name: 'api_key',
			type: 'string',
			description:
				'API key, generate keys within your account (https://www.neutrinoapi.com/account/keys/)',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'User-ID': '={{$credentials.user_id}}',
				'API-Key': '={{$credentials.api_key}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://neutrinoapi.net',
			url: '/ping',
		},
	};
}
