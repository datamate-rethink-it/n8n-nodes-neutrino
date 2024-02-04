import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function ip_info(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', index) as object;
	const reverse_lookup = this.getNodeParameter('reverse_lookup', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			ip: ip,
			'reverse-lookup': reverse_lookup,
		},
		uri: 'https://neutrinoapi.net/ip-info',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
