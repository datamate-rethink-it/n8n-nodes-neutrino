import type { NeutrinoTelephonyProperties } from '../../Interfaces';

export const phone_verifyDescription: NeutrinoTelephonyProperties = [
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: '',
		description: 'The phone number to send the verification code to.',
	},
	{
		displayName: 'Code Length',
		name: 'code_length',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: 6,
		description: 'The number of digits to use in the security code (between 4 and 12).',
	},
	{
		displayName: 'Security Code',
		name: 'security_code',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: '',
		description:
			'Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code.',
	},
	{
		displayName: 'Playback Delay',
		name: 'playback_delay',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: '800',
		description: 'The delay in milliseconds between the playback of each security code.',
	},
	{
		displayName: 'Country Code',
		name: 'country_code',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: '',
		description:
			'ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign).',
	},
	{
		displayName: 'Language Code',
		name: 'language_code',
		type: 'options',
		options: [
			{
				name: 'de',
				value: 'de',
			},
			{
				name: 'en',
				value: 'en',
			},
			{
				name: 'es',
				value: 'es',
			},
			{
				name: 'fr',
				value: 'fr',
			},
			{
				name: 'it',
				value: 'it',
			},
			{
				name: 'pt',
				value: 'pt',
			},
			{
				name: 'ru',
				value: 'ru',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: 'en',
		description: 'The language to playback the verification code in.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: '3',
		description:
			'Limit the total number of calls allowed to the supplied phone number, if the limit is reached within the TTL then error code 14 will be returned.',
	},
	{
		displayName: 'Limit TTL',
		name: 'limit_ttl',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_verify'],
			},
		},
		default: '1',
		description:
			"Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days).",
	},
];
