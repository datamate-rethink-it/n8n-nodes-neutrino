import type { NeutrinoGeolocationProperties } from '../../Interfaces';

export const geocode_addressDescription: NeutrinoGeolocationProperties = [
	{
		displayName: 'Address',
		name: 'address',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description:
			'The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.',
	},
	{
		displayName: 'House Number',
		name: 'house_number',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'The house/building number to locate.',
	},
	{
		displayName: 'Street',
		name: 'street',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'The street/road name to locate.',
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'The city/town name to locate.',
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'The county/region name to locate.',
	},
	{
		displayName: 'State',
		name: 'state',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'The state name to locate.',
	},
	{
		displayName: 'Postal Code',
		name: 'postal_code',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'The postal code to locate.',
	},
	{
		displayName: 'Country Code',
		name: 'country_code',
		type: 'string',
		placeholder: '',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: '',
		description: 'Limit result to this country (the default is no country bias).',
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
				operation: ['geocode_address'],
			},
		},
		default: '',
		description:
			'The language to display results in, available languages are: de, en, es, fr, it, pt, ru, zh.',
	},
	{
		displayName: 'Fussy Search',
		name: 'fussy_search',
		type: 'boolean',
		required: false,
		displayOptions: {
			show: {
				resource: ['geolocation'],
				operation: ['geocode_address'],
			},
		},
		default: false,
		description:
			'If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches.',
	},
];
