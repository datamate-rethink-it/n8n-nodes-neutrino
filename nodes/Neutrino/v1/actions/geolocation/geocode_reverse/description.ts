import type { NeutrinoGeolocationProperties } from '../../Interfaces';

export const geocode_reverseDescription: NeutrinoGeolocationProperties = [
	{
		displayName: 'Latitude',
		name: 'latitude',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_reverse'],
			},
		},
		default: '',
		description: 'The location latitude in decimal degrees format.',
	},
	{
		displayName: 'Longitude',
		name: 'longitude',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_reverse'],
			},
		},
		default: '',
		description: 'The location longitude in decimal degrees format.',
	},
	{
		displayName: 'Language Code',
		name: 'language_code',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_reverse'],
			},
		},
		default: '',
		description:
			'The language to display results in, available languages are: de, en, es, fr, it, pt, ru.',
	},
	{
		displayName: 'Zoom',
		name: 'zoom',
		type: 'options',
		options: [
			{
				name: 'address',
				value: 'address',
			},
			{
				name: 'street',
				value: 'street',
			},
			{
				name: 'city',
				value: 'city',
			},
			{
				name: 'state',
				value: 'state',
			},
			{
				name: 'country',
				value: 'country',
			},
		],
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_reverse'],
			},
		},
		default: 'address',
		description:
			'The zoom level to respond with: address - the most precise address available, street - the street level, city - the city level, state - the state level, country - the country level.',
	},
];
