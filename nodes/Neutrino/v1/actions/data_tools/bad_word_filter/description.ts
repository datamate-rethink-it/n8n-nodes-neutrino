import type { DataToolsProperties } from '../../Interfaces';

export const bad_word_filterDescription: DataToolsProperties = [
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['bad_word_filter'],
			},
		},
		default: '',
		description:
			'The content to scan. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string.',
	},
	{
		displayName: 'Censor Character',
		name: 'censor_character',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['bad_word_filter'],
			},
		},
		default: '',
		description: '	The character to use to censor out the bad words found.',
	},
	{
		displayName: 'Catalog',
		name: 'catalog',
		type: 'options',
		options: [
			{
				name: 'strict',
				value: 'strict',
			},
			{
				name: 'obscene',
				value: 'obscene',
			},
		],
		default: 'strict',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['bad_word_filter'],
			},
		},
		description: '	The character to use to censor out the bad words found.',
	},
];
