import type { DataToolsProperties } from '../../Interfaces';

export const phone_validateDescription: DataToolsProperties = [
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['phone_validate'],
			},
		},
		default: '',
		description:
			'A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the country-code OR ip options as well.',
	},
	{
		displayName: 'Country Code',
		name: 'country_code',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['phone_validate'],
			},
		},
		default: '',
		description:
			'ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign).',
	},
	{
		displayName: 'IP',
		name: 'ip',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['data_tools'],
				operation: ['phone_validate'],
			},
		},
		default: '',
		description:
			'Pass in a users IP address and we will assume numbers are based in the country of the IP address.',
	},
];
