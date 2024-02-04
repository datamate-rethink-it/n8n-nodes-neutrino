import type { NeutrinoImagingProperties } from '../../Interfaces';

export const image_resizeDescription: NeutrinoImagingProperties = [
	{
		displayName: 'Image URL',
		name: 'image_url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_resize'],
			},
		},
		default: '',
		description:
			'The URL or Base64 encoded Data URL for the source image. You can also upload an image file directly using multipart/form-data.',
	},
	{
		displayName: 'Width',
		name: 'width',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_resize'],
			},
		},
		default: '',
		description: 'The width to resize to (in px).',
	},
	{
		displayName: 'Height',
		name: 'height',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['image_resize'],
			},
		},
		default: '',
		description:
			"The height to resize to (in px). If you don't set this field then the height will be automatic based on the requested width and image aspect ratio.",
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
				operation: ['image_resize'],
			},
		},
		default: 'png',
		description: 'The output image format, can be either png or jpg.',
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
				operation: ['image_resize'],
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
				operation: ['image_resize'],
			},
		},
		default: 'transparent',
		description:
			"The image background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can also be used. For JPG output the default is black (#000000)",
	},
];
