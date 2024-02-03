import type { NeutrinoWWWProperties } from '../../Interfaces';

export const html_cleanDescription: NeutrinoWWWProperties = [
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['html_clean'],
			},
		},
		default: '',
		description:
			'The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string.',
	},
	{
		displayName: 'Output Type',
		name: 'output_type',
		type: 'options',
		options: [
			{
				name: 'plain-text',
				value: 'plain-text',
			},
			{
				name: 'simple-text',
				value: 'simple-text',
			},
			{
				name: 'basic-html',
				value: 'basic-html',
			},
			{
				name: 'basic-html-with-images',
				value: 'basic-html-with-images',
			},
			{
				name: 'advanced-html',
				value: 'advanced-html',
			},
		],
		required: true,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['html_clean'],
			},
		},
		default: 'simple-text',
		description: 'The level of sanitization.',
	},
];
