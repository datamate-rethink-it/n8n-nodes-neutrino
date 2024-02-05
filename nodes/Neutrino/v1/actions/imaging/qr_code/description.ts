import type { NeutrinoImagingProperties } from '../../Interfaces';

export const image_watermarkDescription: NeutrinoImagingProperties = [
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['qr_code'],
			},
		},
		default: '',
		description: 'The content to encode into the QR code (e.g. a URL or a phone number).',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['qr_code'],
			},
		},
		default: '256',
		description: 'The width of the QR code (in px).',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['qr_code'],
			},
		},
		default: '256',
		description: 'The height of the QR code (in px).',
	},
	{
		displayName: 'Foreground Color',
		name: 'fg_color',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['qr_code'],
			},
		},
		default: '#000000',
		description: 'The QR code foreground color.',
	},
	{
		displayName: 'Background Color',
		name: 'bg_color',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['qr_code'],
			},
		},
		default: '#ffffff',
		description: 'The QR code background color.',
	},
];
