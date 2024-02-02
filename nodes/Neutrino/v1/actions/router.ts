import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';

import * as data_tools from './data_tools';
import * as security_networking from './security_networking';

import { Neutrino } from './Interfaces';

export async function router(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
	const items = this.getInputData();
	const operationResult: INodeExecutionData[] = [];
	let responseData: IDataObject | IDataObject[] = [];

	for (let i = 0; i < items.length; i++) {
		const resource = this.getNodeParameter<Neutrino>('resource', i);
		const operation = this.getNodeParameter('operation', i);

		//console.log(operation);
		//console.log(resource);

		const neutrino = {
			resource,
			operation,
		} as Neutrino;

		try {
			if (neutrino.resource === 'data_tools') {
				responseData = await data_tools[neutrino.operation].execute.call(this, i);
			} else if (neutrino.resource === 'security_networking') {
				responseData = await security_networking[neutrino.operation].execute.call(this, i);
			}

			const executionData = this.helpers.constructExecutionMetaData(
				this.helpers.returnJsonArray(responseData),
				{ itemData: { item: i } },
			);
			operationResult.push(...executionData);
		} catch (err) {
			if (this.continueOnFail()) {
				operationResult.push({ json: this.getInputData(i)[0].json, error: err });
			} else {
				if (err.context) err.context.itemIndex = i;
				throw err;
			}
		}
	}

	return [operationResult];
}
