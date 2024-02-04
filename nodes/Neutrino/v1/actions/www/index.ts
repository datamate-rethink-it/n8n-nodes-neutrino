import * as browser_bot from './browser_bot';
import * as html_clean from './html_clean';
import * as url_info from './url_info';

import type { INodeProperties } from 'n8n-workflow';

export { browser_bot, html_clean, url_info };

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
			{
				name: 'URL Info',
				value: 'url_info',
				description: 'Parse, analyze and retrieve content from the supplied URL.',
				action: 'URL Info',
			},
		],
		default: 'browser_bot',
	},
	...browser_bot.description,
	...html_clean.description,
	...url_info.description,
];
