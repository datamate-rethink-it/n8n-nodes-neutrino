import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function html_clean(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const content = this.getNodeParameter('content', index) as object;
	const output_type = this.getNodeParameter('output_type', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			content: content,
			output_type: output_type,
		},
		uri: 'https://neutrinoapi.net/html-clean',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
