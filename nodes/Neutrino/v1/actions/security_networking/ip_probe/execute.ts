import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function ip_probe(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			ip: ip,
		},
		uri: 'https://neutrinoapi.net/ip-probe',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
