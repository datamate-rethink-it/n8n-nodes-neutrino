import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type NeutrinoMap = {
	data_tools: 'email_validate' | 'phone_validate' | 'ua_lookup' | 'bad_word_filter' | 'convert';
	www: 'browser_bot' | 'html_clean';
	security_networking:
		| 'domain_lookup'
		| 'email_verify'
		| 'ip_probe'
		| 'ip_blocklist'
		| 'host_reputation';
};

export type Neutrino = AllEntities<NeutrinoMap>;

export type NeutrinoDataTools = Entity<NeutrinoMap, 'data_tools'>;
export type NeutrinoWWW = Entity<NeutrinoMap, 'www'>;
export type NeutrinoSecurityNetworking = Entity<NeutrinoMap, 'security_networking'>;

export type DataToolsProperties = PropertiesOf<NeutrinoDataTools>;
export type NeutrinoWWWProperties = PropertiesOf<NeutrinoWWW>;
export type NeutrinoSecurityProperties = PropertiesOf<NeutrinoSecurityNetworking>;
