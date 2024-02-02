import type { ILoadOptionsFunctions, INodePropertyOptions } from 'n8n-workflow';
//import { OptionsWithUri } from 'request';

//import { getTableColumns, seaTableApiRequest, updateAble } from '../GenericFunctions';
//import type { IRow } from '../actions/Interfaces';

export async function getServers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
	const returnData: INodePropertyOptions[] = [];
	/*
	const options: OptionsWithUri = {
		method: 'GET',
		qs: {},
		uri: `https://api.hetzner.cloud/v1/servers`,
		json: true,
	};

	const serverlist = await this.helpers.requestWithAuthentication.call(
		this,
		'hetznercloud',
		options,
	);

	if (serverlist.servers) {
		for (const server of serverlist.servers) {
			returnData.push({
				name: server.name,
				value: server.id,
			});
		}
	}
	*/
	return returnData;
}
