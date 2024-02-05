import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function hlr_lookup(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', index) as object;
	const country_code = this.getNodeParameter('country_code', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			number: number,
			'country-code': country_code,
		},
		uri: 'https://neutrinoapi.net/hlr-lookup',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
