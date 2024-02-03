import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function domain_lookup(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const host = this.getNodeParameter('host', index) as object;
	const live = this.getNodeParameter('live', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			host: host,
			live: live,
		},
		uri: 'https://neutrinoapi.net/domain-lookup',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
