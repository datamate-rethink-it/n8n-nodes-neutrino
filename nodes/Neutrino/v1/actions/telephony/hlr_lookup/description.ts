import type { NeutrinoTelephonyProperties } from '../../Interfaces';

export const hlr_lookupDescription: NeutrinoTelephonyProperties = [
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['hlr_lookup'],
			},
		},
		default: '',
		description: 'A phone number.',
	},
	{
		displayName: 'Country Code',
		name: 'country_code',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['hlr_lookup'],
			},
		},
		default: '',
		description:
			'ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign).',
	},
];
