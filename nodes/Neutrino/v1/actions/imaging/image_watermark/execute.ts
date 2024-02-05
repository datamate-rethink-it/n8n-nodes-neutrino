import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function image_watermark(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const image_url = this.getNodeParameter('image_url', index) as object;
	const watermark_url = this.getNodeParameter('watermark_url', index) as object;
	const opacity = this.getNodeParameter('opacity', index) as object;
	const format = this.getNodeParameter('format', index) as object;
	const position = this.getNodeParameter('position', index) as object;
	const width = this.getNodeParameter('width', index) as object;
	const height = this.getNodeParameter('height', index) as object;
	const resize_mode = this.getNodeParameter('resize_mode', index) as object;
	const bg_color = this.getNodeParameter('bg_color', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			'image-url': image_url,
			'watermark-url': watermark_url,
			opacity: opacity,
			format: format,
			position: position,
			width: width,
			height: height,
			'resize-mode': resize_mode,
			'bg-color': bg_color,
		},
		uri: 'https://neutrinoapi.net/image-watermark',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
