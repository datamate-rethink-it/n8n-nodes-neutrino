import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function geocode_address(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const address = this.getNodeParameter('address', index) as object;
	const house_number = this.getNodeParameter('house_number', index) as object;
	const street = this.getNodeParameter('street', index) as object;
	const city = this.getNodeParameter('city', index) as object;
	const country = this.getNodeParameter('country', index) as object;
	const state = this.getNodeParameter('state', index) as object;
	const postal_code = this.getNodeParameter('postal_code', index) as object;
	const country_code = this.getNodeParameter('country_code', index) as object;
	const language_code = this.getNodeParameter('language_code', index) as object;
	const fussy_search = this.getNodeParameter('fussy_search', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			address: address,
			'house-number': house_number,
			street: street,
			city: city,
			country: country,
			state: state,
			'postal-code': postal_code,
			'country-code': country_code,
			'language-code': language_code,
			'fussy-search': fussy_search,
		},
		uri: 'https://neutrinoapi.net/geocode-address',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
