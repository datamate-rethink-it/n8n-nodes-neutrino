import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function email_validate(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const email = this.getNodeParameter('email', index) as object;
	const fix_typos = this.getNodeParameter('fix_typos', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			email: email,
			'fix-typos': fix_typos,
		},
		uri: 'https://neutrinoapi.net/email-validate',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
