import type { INodeTypeDescription } from 'n8n-workflow';

import * as data_tools from './data_tools';
import * as www from './www';
import * as security_networking from './security_networking';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Neutrino',
	name: 'neutrino',
	icon: 'file:neutrino.svg',
	group: ['output'],
	version: 1,
	subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
	description: 'Interact with the Neutrino API.',
	defaults: {
		name: 'Neutrino Api',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'neutrino',
			required: true,
		},
	],
	properties: [
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Data Tools',
					value: 'data_tools',
				},
				{
					name: 'WWW',
					value: 'www',
				},
				{
					name: 'Security and Networking',
					value: 'security_networking',
				},
			],
			default: 'data_tools',
		},
		...data_tools.descriptions,
		...www.descriptions,
		...security_networking.descriptions,
	],
};
