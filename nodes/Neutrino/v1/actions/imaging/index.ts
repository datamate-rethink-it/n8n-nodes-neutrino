import * as html_render from './html_render';
import * as image_resize from './image_resize';
import * as image_watermark from './image_watermark';

import type { INodeProperties } from 'n8n-workflow';

export { html_render, image_resize, image_watermark };

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
			{
				name: 'Image Resize',
				value: 'image_resize',
				description: 'Resize an image and output as either JPEG or PNG.',
				action: 'Image Resize',
			},
			{
				name: 'Image Watermark',
				value: 'image_watermark',
				description: 'Watermark one image with another image.',
				action: 'Image Watermark',
			},
		],
		default: 'html_render',
	},
	...html_render.description,
	...image_resize.description,
];
