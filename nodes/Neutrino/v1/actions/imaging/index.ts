import * as html_render from './html_render';

import type { INodeProperties } from 'n8n-workflow';

export { html_render };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['imaging'],
			},
		},
		options: [
			{
				name: 'HTML Render',
				value: 'html_render',
				description: 'Render HTML content to PDF, JPG or PNG.',
				action: 'HTML Render',
			},
		],
		default: 'html_render',
	},
	...html_render.description,
];
