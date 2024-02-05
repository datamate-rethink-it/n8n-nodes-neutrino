import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function phone_verify(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', index) as object;
	const code_length = this.getNodeParameter('code_length', index) as object;
	const security_code = this.getNodeParameter('security_code', index) as object;
	const playback_delay = this.getNodeParameter('playback_delay', index) as object;
	const country_code = this.getNodeParameter('country_code', index) as object;
	const language_code = this.getNodeParameter('language_code', index) as object;
	const limit = this.getNodeParameter('limit', index) as number;
	const limit_ttl = this.getNodeParameter('limit_ttl', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			number: number,
			'code-length': code_length,
			'security-code': security_code,
			'playback-delay': playback_delay,
			'country-code': country_code,
			'language-code': language_code,
			limit: limit,
			'limit-ttl': limit_ttl,
		},
		uri: 'https://neutrinoapi.net/phone-verify',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
