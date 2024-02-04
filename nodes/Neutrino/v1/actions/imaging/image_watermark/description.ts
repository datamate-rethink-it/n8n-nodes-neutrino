import type { NeutrinoImagingProperties } from '../../Interfaces';

export const image_watermarkDescription: NeutrinoImagingProperties = [
	{
		displayName: 'Image URL',
		name: 'image_url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: '',
		description:
			'The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data.',
	},
	{
		displayName: 'Watermark URL',
		name: 'watermark-url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: '',
		description:
			'The URL or Base64 encoded Data URL for the watermark image. You can also upload an image file directly using multipart/form-data.',
	},
	{
		displayName: 'Opacity',
		name: 'opacity',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: '50',
		description: 'The opacity of the watermark (0 to 100).',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{
				name: 'png',
				value: 'png',
			},
			{
				name: 'jpg',
				value: 'jpg',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: 'png',
		description: 'The output image format, can be either png or jpg.',
	},
	{
		displayName: 'Position',
		name: 'position',
		type: 'options',
		options: [
			{
				name: 'center',
				value: 'center',
			},
			{
				name: 'top-left',
				value: 'top-left',
			},
			{
				name: 'top-center',
				value: 'top-center',
			},
			{
				name: 'top-right',
				value: 'top-right',
			},
			{
				name: 'bottom-left',
				value: 'bottom-left',
			},
			{
				name: 'bottom-center',
				value: 'bottom-center',
			},
			{
				name: 'bottom-right',
				value: 'bottom-right',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: 'center',
		description: 'The position of the watermark image.',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: '',
		description: 'If set resize the resulting image to this width (in px).',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: '',
		description: 'If set resize the resulting image to this height (in px).',
	},
	{
		displayName: 'Resize Mode',
		name: 'resize_mode',
		type: 'options',
		options: [
			{
				name: 'scale',
				value: 'scale',
			},
			{
				name: 'pad',
				value: 'pad',
			},
			{
				name: 'crop',
				value: 'crop',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: 'scale',
		description: 'The resize mode to use, we support 3 main resizing modes.',
	},
	{
		displayName: 'Background Color',
		name: 'bg_color',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_watermark'],
			},
		},
		default: 'transparent',
		description:
			"The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)",
	},
];
