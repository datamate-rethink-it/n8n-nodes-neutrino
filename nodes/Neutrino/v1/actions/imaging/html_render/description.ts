import type { NeutrinoImagingProperties } from '../../Interfaces';

export const html_renderDescription: NeutrinoImagingProperties = [
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description:
			'The HTML content. This can be either a URL to load from, a file upload (multipart/form-data) or an HTML content string.',
	},
	{
		displayName: 'Format',
		name: 'format',
		type: 'options',
		options: [
			{
				name: 'PDF',
				value: 'PDF',
			},
			{
				name: 'PNG',
				value: 'PNG',
			},
			{
				name: 'JPG',
				value: 'JPG',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: 'PDF',
		description: 'Which format to output, available options are: PDF, PNG, JPG.',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description: 'The document title.',
	},
	{
		displayName: 'Page Size',
		name: 'page_size',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: 'A4',
		description:
			'Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter.',
	},
	{
		displayName: 'Page Width',
		name: 'page_width',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description: 'Set the PDF page width explicitly (in mm).',
	},
	{
		displayName: 'Page Height',
		name: 'page_height',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description: 'Set the PDF page height explicitly (in mm).',
	},
	{
		displayName: 'Image Width',
		name: 'image_width',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '1024',
		description: 'If rendering to an image format (PNG or JPG) use this image width (in pixels).',
	},
	{
		displayName: 'Image Height',
		name: 'image_height',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description:
			'If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content.',
	},
	{
		displayName: 'Margin',
		name: 'margin',
		type: 'number',
		typeOptions: {
			numberPrecision: 1,
		},
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description: 'The document margin (in mm).',
	},
	{
		displayName: 'Landscape',
		name: 'landscape',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: false,
		description: 'Set the document to landscape orientation.',
	},
	{
		displayName: 'Zoom',
		name: 'zoom',
		type: 'number',
		typeOptions: {
			numberPrecision: 1,
		},
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: 1,
		description:
			'Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size).',
	},
	{
		displayName: 'Greyscale',
		name: 'greyscale',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: false,
		description: 'Render the final document in grayscale.',
	},
	{
		displayName: 'CSS',
		name: 'css',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description: "Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'.",
	},
	{
		displayName: 'Background Color',
		name: 'bg_color',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description:
			"For image rendering set the background color in hexadecimal notation (e.g. #0000ff). For PNG output the special value of 'transparent' can be used to create a transparent PNG.",
	},
	{
		displayName: 'Timeout',
		name: 'timeout',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: 300,
		description:
			'Timeout in seconds. Give up if still trying to load the HTML content after this number of seconds.',
	},
	{
		displayName: 'Delay',
		name: 'delay',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: 0,
		description:
			'Number of seconds to wait before rendering the page (can be useful for pages with animations etc).',
	},
	{
		displayName: 'Ignore Certificate Errors',
		name: 'ignore_certificate_errors',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: false,
		description: 'Ignore any TLS/SSL certificate errors and load the page anyway.',
	},
	{
		displayName: 'Header',
		name: 'header',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description:
			'The header HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}.',
	},
	{
		displayName: 'Footer',
		name: 'footer',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['imaging'],
				operation: ['html_render'],
			},
		},
		default: '',
		description:
			'The footer HTML to insert into each page. The following dynamic tags are supported: {date}, {title}, {url}, {pageNumber}, {totalPages}.',
	},
];
