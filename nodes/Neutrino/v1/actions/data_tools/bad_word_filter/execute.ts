import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function bad_word_filter(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const content = this.getNodeParameter('content', index) as object;
	const censor_character = this.getNodeParameter('censor_character', index) as object;
	const catalog = this.getNodeParameter('catalog', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			content: content,
			'censor-character': censor_character,
			catalog: catalog,
		},
		uri: 'https://neutrinoapi.net/bad-word-filter',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
