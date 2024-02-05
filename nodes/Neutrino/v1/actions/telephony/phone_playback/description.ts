import type { NeutrinoTelephonyProperties } from '../../Interfaces';

export const phone_playbackDescription: NeutrinoTelephonyProperties = [
	{
		displayName: 'Number',
		name: 'number',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_playback'],
			},
		},
		default: '',
		description: 'The phone number to call. Must be in valid international format.',
	},
	{
		displayName: 'Audio URL',
		name: 'audio_url',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_playback'],
			},
		},
		default: '',
		description:
			'A URL to a valid audio file. Accepted audio formats are: MP3, WAV, OGG. You can use the following MP3 URL for testing: https://www.neutrinoapi.com/test-files/test1.mp3.',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['phone_playback'],
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
				operation: ['phone_playback'],
			},
		},
		default: '1',
		description:
			"Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days).",
	},
];
