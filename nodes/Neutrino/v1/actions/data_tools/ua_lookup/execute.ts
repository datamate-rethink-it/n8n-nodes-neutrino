import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function ua_lookup(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const ua = this.getNodeParameter('ua', index) as object;
	const ua_version = this.getNodeParameter('usa_version', index) as object;
	const ua_platform = this.getNodeParameter('ua_platform', index) as object;
	const ua_platform_version = this.getNodeParameter('ua_platform_version', index) as object;
	const ua_mobile = this.getNodeParameter('ua_mobile', index) as object;
	const device_model = this.getNodeParameter('device_model', index) as object;
	const device_brand = this.getNodeParameter('device_brand', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			ua: ua,
			'ua-version': ua_version,
			'ua-platform': ua_platform,
			'ua-platform-version': ua_platform_version,
			'ua-mobile': ua_mobile,
			device_model: device_model,
			device_brand: device_brand,
		},
		uri: 'https://neutrinoapi.net/ua-lookup',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
