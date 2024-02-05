import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function phone_playback(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const number = this.getNodeParameter('number', index) as object;
	const audio_url = this.getNodeParameter('audio_url', index) as object;
	const limit = this.getNodeParameter('limit', index) as number;
	const limit_ttl = this.getNodeParameter('limit_ttl', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			number: number,
			'audio-url': audio_url,
			limit: limit,
			'limit-ttl': limit_ttl,
		},
		uri: 'https://neutrinoapi.net/phone-playback',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
