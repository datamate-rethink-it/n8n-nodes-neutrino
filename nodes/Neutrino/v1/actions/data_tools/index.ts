import * as email_validate from './email_validate';
import * as phone_validate from './phone_validate';
import * as ua_lookup from './ua_lookup';
import * as bad_word_filter from './bad_word_filter';
import * as convert from './convert';

import type { INodeProperties } from 'n8n-workflow';

export { email_validate, phone_validate, ua_lookup, bad_word_filter, convert };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['data_tools'],
			},
		},
		options: [
			{
				name: 'Email Validate',
				value: 'email_validate',
				description: 'Parse, validate and clean an email address.',
				action: 'Email Validate',
			},
			{
				name: 'Phone Validate',
				value: 'phone_validate',
				description: 'Parse, validate and get location information about a phone number.',
				action: 'Phone Validate',
			},
			{
				name: 'UA Lookup',
				value: 'ua_lookup',
				description:
					'Parse, validate and get detailed user-agent information from a user agent string or from client hints.',
				action: 'UA Lookup',
			},
			{
				name: 'Bad Word Filter',
				value: 'bad_word_filter',
				description: 'Detect bad words, swear words and profanity in a given text.',
				action: 'Bad Word Filter',
			},
			{
				name: 'Convert',
				value: 'convert',
				description:
					'Convert between currency, cryptocurrency and various other units using an up-to-date data feed.',
				action: 'Convert (currency and units)',
			},
		],
		default: 'email_validate',
	},
	...email_validate.description,
	...phone_validate.description,
	...ua_lookup.description,
	...bad_word_filter.description,
	...convert.description,
];
