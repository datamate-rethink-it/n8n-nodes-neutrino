import type { DataToolsProperties } from '../../Interfaces';

export const convertDescription: DataToolsProperties = [
	{
		displayName: 'From Value',
		name: 'from_value',
		type: 'string',
		placeholder: '10.95',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['convert'],
			},
		},
		default: '',
		description: 'The value to convert from (e.g. 10.95)',
	},
	{
		displayName: 'From Type',
		name: 'from_type',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['convert'],
			},
		},
		default: '',
		description:
			'The type of the value to convert from (e.g. USD). Get all available options from https://www.neutrinoapi.com/api/convert/.',
	},
	{
		displayName: 'To Type',
		name: 'to_type',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['convert'],
			},
		},
		default: '',
		description:
			'The type to convert to (e.g. EUR). Get all available options from https://www.neutrinoapi.com/api/convert/.',
	},
];
