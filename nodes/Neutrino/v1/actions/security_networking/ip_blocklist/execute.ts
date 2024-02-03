import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function ip_blocklist(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', index) as object;
	const vpn_lookup = this.getNodeParameter('vpn_lookup', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			ip: ip,
			'vpn-lookup': vpn_lookup,
		},
		uri: 'https://neutrinoapi.net/ip-blocklist',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
