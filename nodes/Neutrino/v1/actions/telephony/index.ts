import * as phone_verify from './phone_verify';
import * as sms_verify from './sms_verify';
import * as verify_security_code from './verify_security_code';
import * as phone_playback from './phone_playback';
import * as hlr_lookup from './hlr_lookup';

import type { INodeProperties } from 'n8n-workflow';

export { phone_verify, sms_verify, verify_security_code, phone_playback, hlr_lookup };

export const descriptions: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['telephony'],
			},
		},
		options: [
			{
				name: 'Phone Verify',
				value: 'phone_verify',
				description:
					'Make an automated call to any valid phone number and playback a unique security code.',
				action: 'Phone Verify',
			},
			{
				name: 'SMS Verify',
				value: 'sms_verify',
				description: 'Send a unique security code to any mobile device via SMS.',
				action: 'SMS Verify',
			},
			{
				name: 'Verify Security Code',
				value: 'verify_security_code',
				description: 'Check if a security code sent via SMS Verify or Phone Verify is valid.',
				action: 'verify_security_code',
			},
		],
		default: 'phone_verify',
	},
	...phone_verify.description,
	...sms_verify.description,
	...verify_security_code.description,
	...phone_playback.description,
	...hlr_lookup.description,
];
