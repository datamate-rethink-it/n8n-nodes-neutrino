import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function geocode_reverse(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const latitude = this.getNodeParameter('latitude', index) as object;
	const longitude = this.getNodeParameter('longitude', index) as object;
	const language_code = this.getNodeParameter('language_code', index) as object;
	const zoom = this.getNodeParameter('zoom', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			latitude: latitude,
			longitude: longitude,
			'language-code': language_code,
			zoom: zoom,
		},
		uri: 'https://neutrinoapi.net/geocode-reverse',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
