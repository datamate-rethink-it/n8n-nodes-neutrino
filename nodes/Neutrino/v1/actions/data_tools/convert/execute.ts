import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function convert(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const from_value = this.getNodeParameter('from_value', index) as object;
	const from_type = this.getNodeParameter('from_type', index) as object;
	const to_type = this.getNodeParameter('to_type', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			'from-value': from_value,
			'from-type': from_type,
			'to-type': to_type,
		},
		uri: 'https://neutrinoapi.net/convert',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
