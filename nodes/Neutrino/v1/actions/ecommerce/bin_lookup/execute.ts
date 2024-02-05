import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function bin_lookup(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const bin_number = this.getNodeParameter('bin_number', index) as object;
	const customer_ip = this.getNodeParameter('customer_ip', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			'bin-number': bin_number,
			'customer-ip': customer_ip,
		},
		uri: 'https://neutrinoapi.net/bin-lookup',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
