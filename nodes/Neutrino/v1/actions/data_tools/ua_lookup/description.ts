import type { DataToolsProperties } from '../../Interfaces';

export const ua_lookupDescription: DataToolsProperties = [
	{
		displayName: 'User Agent',
		name: 'ua',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
	{
		displayName: 'UA-Full-Version',
		name: 'ua_version',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
	{
		displayName: 'UA-Platform',
		name: 'ua_platform',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
	{
		displayName: 'UA-Platform-Version',
		name: 'ua_platform_version',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
	{
		displayName: 'UA-Mobile',
		name: 'ua_mobile',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
	{
		displayName: 'UA-Model',
		name: 'device_model',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
	{
		displayName: 'UA-Model-Brand',
		name: 'device_brand',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['ua_lookup'],
			},
		},
		default: '',
	},
];
