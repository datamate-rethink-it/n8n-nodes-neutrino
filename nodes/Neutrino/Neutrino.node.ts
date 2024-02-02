import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { NeutrinoV1 } from './v1/NeutrinoV1.node';

export class Neutrino extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Neutrino',
			name: 'neutrino',
			icon: 'file:neutrino.svg',
			group: ['output'],
			subtitle: '={{$parameter["resource"] + ": " + $parameter["operation"]}}',
			description: 'Interact with the Neutrino general-purpose API.',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new NeutrinoV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
