import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function host_reputation(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const host = this.getNodeParameter('host', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			host: host,
		},
		uri: 'https://neutrinoapi.net/host_reputation',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
