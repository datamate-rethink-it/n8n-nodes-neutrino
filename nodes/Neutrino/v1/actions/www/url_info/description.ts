import type { NeutrinoWWWProperties } from '../../Interfaces';

export const url_infoDescription: NeutrinoWWWProperties = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['url_info'],
			},
		},
		default: '',
		description: 'The URL to probe.',
	},
	{
		displayName: 'Fetch Content',
		name: 'fetch_content',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['url_info'],
			},
		},
		default: false,
		description:
			'If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs).',
	},
	{
		displayName: 'Ignore Certificate Errors',
		name: 'ignore_certificate_errors',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['url_info'],
			},
		},
		default: false,
		description: 'Ignore any TLS/SSL certificate errors and load the page anyway.',
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['url_info'],
			},
		},
		default: 60,
		description:
			'Timeout in seconds. Give up if still trying to load the page after this number of seconds.',
	},
	{
		displayName: 'Retry',
		name: 'retry',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['url_info'],
			},
		},
		default: 0,
		description: 'If the request fails for any reason try again this many times.',
	},
];
