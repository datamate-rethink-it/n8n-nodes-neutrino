import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function html_render(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const content = this.getNodeParameter('content', index) as object;
	const format = this.getNodeParameter('format', index) as object;
	const title = this.getNodeParameter('title', index) as object;
	const page_size = this.getNodeParameter('page_size', index) as object;
	const page_width = this.getNodeParameter('page_width', index) as object;
	const page_height = this.getNodeParameter('page_height', index) as object;
	const margin = this.getNodeParameter('margin', index) as object;
	const landscape = this.getNodeParameter('landscape', index) as object;
	const zoom = this.getNodeParameter('zoom', index) as object;
	const grayscale = this.getNodeParameter('grayscale', index) as object;
	const css = this.getNodeParameter('css', index) as object;
	const bg_color = this.getNodeParameter('bg_color', index) as object;
	const timeout = this.getNodeParameter('timeout', index) as object;
	const delay = this.getNodeParameter('delay', index) as object;
	const ignore_certificate_errors = this.getNodeParameter(
		'ignore_certificate_errors',
		index,
	) as object;
	const header = this.getNodeParameter('header', index) as object;
	const footer = this.getNodeParameter('footer', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			content: content,
			format: format,
			title: title,
			'page-size': page_size,
			'page-width': page_width,
			'page-height': page_height,
			margin: margin,
			landscape: landscape,
			zoom: zoom,
			grayscale: grayscale,
			css: css,
			'bg-color': bg_color,
			timeout: timeout,
			delay: delay,
			'ignore-certificate-errors': ignore_certificate_errors,
			header: header,
			footer: footer,
		},
		uri: 'https://neutrinoapi.net/html-render',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
