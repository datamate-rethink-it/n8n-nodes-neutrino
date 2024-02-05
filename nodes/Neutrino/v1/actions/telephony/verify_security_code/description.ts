import type { NeutrinoTelephonyProperties } from '../../Interfaces';

export const verify_security_codeDescription: NeutrinoTelephonyProperties = [
	{
		displayName: 'Security Code',
		name: 'security_code',
		type: 'string',
		placeholder: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['verify_security_code'],
			},
		},
		default: '',
		description: '	The security code to verify.',
	},
	{
		displayName: 'Limit by',
		name: 'limit_by',
		type: 'string',
		required: false,
		displayOptions: {
			show: {
				resource: ['telephony'],
				operation: ['verify_security_code'],
			},
		},
		default: '',
		description:
			'If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts.',
	},
];
