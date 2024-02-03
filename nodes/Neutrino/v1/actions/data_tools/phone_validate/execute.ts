import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function phone_validate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', index) as object;
	const country_code = this.getNodeParameter('country_code', index) as object;
	const ip = this.getNodeParameter('ip', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			number: number,
			'country-code': country_code,
			ip: ip,
		},
		uri: 'https://neutrinoapi.net/phone-validate',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
