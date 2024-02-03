import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function browser_bot(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const url = this.getNodeParameter('url', index) as object;
	const timeout = this.getNodeParameter('timeout', index) as object;
	const delay = this.getNodeParameter('delay', index) as object;
	const selector = this.getNodeParameter('selector', index) as object;
	const exec = this.getNodeParameter('exec', index) as object;
	const user_agent = this.getNodeParameter('user_agent', index) as object;
	const ignore_certificate_errors = this.getNodeParameter(
		'ignore_certificate_errors',
		index,
	) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			url: url,
			timeout: timeout,
			delay: delay,
			selector: selector,
			exec: exec,
			'user-agent': user_agent,
			'ignore-certificate-errors': ignore_certificate_errors,
		},
		uri: 'https://neutrinoapi.net/browser-bot',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
