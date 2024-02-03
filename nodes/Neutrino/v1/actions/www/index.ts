import * as browser_bot from './browser_bot';
import * as html_clean from './html_clean';

import type { INodeProperties } from 'n8n-workflow';

export { browser_bot, html_clean };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['www'],
			},
		},
		options: [
			{
				name: 'Browser Bot',
				value: 'browser_bot',
				description:
					'Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website.',
				action: 'Browser Bot',
			},
			{
				name: 'HTML Clean',
				value: 'html_clean',
				description: 'Clean and sanitize untrusted HTML.',
				action: 'HTML Clean',
			},
		],
		default: 'browser_bot',
	},
	...browser_bot.description,
	...html_clean.description,
];
