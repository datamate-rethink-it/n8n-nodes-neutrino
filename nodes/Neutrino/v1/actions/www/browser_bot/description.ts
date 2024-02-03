import type { NeutrinoWWWProperties } from '../../Interfaces';

export const browser_botDescription: NeutrinoWWWProperties = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: '',
		description: 'The URL to load.',
	},
	{
		displayName: 'timeout',
		name: 'timeout',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: 30,
		description:
			'Timeout in seconds. Give up if still trying to load the page after this number of seconds.',
	},
	{
		displayName: 'delay',
		name: 'delay',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: 3,
		description:
			'Delay in seconds to wait before capturing any page data, executing selectors or JavaScript.',
	},
	{
		displayName: 'Selector',
		name: 'selector',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: '',
		description:
			'Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference at https://www.w3schools.com/cssref/css_selectors.asp.',
	},
	{
		displayName: 'Exec',
		name: 'exec',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: '',
		description:
			'Execute JavaScript on the website. This parameter accepts JavaScript as either a string containing JavaScript or for sending multiple separate statements a JSON array or POST array can also be used. If a statement returns any value it will be returned in the exec-results response.',
	},
	{
		displayName: 'User agent',
		name: 'user_agent',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: '',
		description: 'Override the browsers default user-agent string with this one.',
	},
	{
		displayName: 'Ignore Certificate Errors',
		name: 'ignore_certificate_errors',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['www'],
				operation: ['browser_bot'],
			},
		},
		default: false,
		description: 'Ignore any TLS/SSL certificate errors and load the page anyway.',
	},
];
