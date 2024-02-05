import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { OptionsWithUri } from 'request';

export async function verify_security_code(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const security_code = this.getNodeParameter('security_code', index) as object;
	const limit_by = this.getNodeParameter('limit_by', index) as object;

	const options: OptionsWithUri = {
		method: 'GET',
		qs: {
			'security-code': security_code,
			'limit-by': limit_by,
		},
		uri: 'https://neutrinoapi.net/verify-security-code',
		json: true,
	};

	const responseData = await this.helpers.requestWithAuthentication.call(this, 'neutrino', options);

	return this.helpers.returnJsonArray(responseData as IDataObject[]);
}
