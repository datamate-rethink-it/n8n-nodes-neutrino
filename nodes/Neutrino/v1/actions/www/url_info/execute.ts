import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function url_info(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const url = this.getNodeParameter('url', index) as object;
	const fetch_content = this.getNodeParameter('fetch_content', index) as object;
	const ignore_certificate_errors = this.getNodeParameter(
		'ignore_certificate_errors',
		index,
	) as object;
	const timeout = this.getNodeParameter('timeout', index) as object;
	const retry = this.getNodeParameter('retry', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			url: url,
			'fetch-content': fetch_content,
			'ignore-certificate-errors': ignore_certificate_errors,
			timeout: timeout,
			retry: retry,
		},
		uri: 'https://neutrinoapi.net/url-info',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
