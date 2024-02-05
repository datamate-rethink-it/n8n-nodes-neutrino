import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function image_watermark(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const content = this.getNodeParameter('content', index) as object;
	const width = this.getNodeParameter('width', index) as object;
	const height = this.getNodeParameter('height', index) as object;
	const fg_color = this.getNodeParameter('fg_color', index) as object;
	const bg_color = this.getNodeParameter('bg_color', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			content: content,
			width: width,
			height: height,
			'fg-color': fg_color,
			'bg-color': bg_color,
		},
		uri: 'https://neutrinoapi.net/qr-code',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
