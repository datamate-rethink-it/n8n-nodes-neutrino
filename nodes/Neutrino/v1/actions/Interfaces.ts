import type { AllEntities, Entity, PropertiesOf } from 'n8n-workflow';

type NeutrinoMap = {
	data_tools: 'email_validate' | 'phone_validate' | 'ua_lookup' | 'bad_word_filter' | 'convert';
	www: 'browser_bot' | 'html_clean' | 'url_info';
	telephony:
		| 'phone_verify'
		| 'sms_verify'
		| 'verify_security_code'
		| 'phone_playback'
		| 'hlr_lookup';
	geolocation: 'ip_info' | 'geocode_address' | 'geocode_reverse';
	security_networking:
		| 'domain_lookup'
		| 'email_verify'
		| 'ip_probe'
		| 'ip_blocklist'
		| 'host_reputation';
	imaging: 'html_render' | 'image_resize' | 'image_watermark' | 'qr_code';
};

export type Neutrino = AllEntities<NeutrinoMap>;

export type NeutrinoDataTools = Entity<NeutrinoMap, 'data_tools'>;
export type NeutrinoWWW = Entity<NeutrinoMap, 'www'>;
export type NeutrinoTelephony = Entity<NeutrinoMap, 'telephony'>;
export type NeutrinoGeolocation = Entity<NeutrinoMap, 'geolocation'>;
export type NeutrinoSecurityNetworking = Entity<NeutrinoMap, 'security_networking'>;
export type NeutrinoImaging = Entity<NeutrinoMap, 'imaging'>;

export type DataToolsProperties = PropertiesOf<NeutrinoDataTools>;
export type NeutrinoWWWProperties = PropertiesOf<NeutrinoWWW>;
export type NeutrinoTelephonyProperties = PropertiesOf<NeutrinoTelephony>;
export type NeutrinoGeolocationProperties = PropertiesOf<NeutrinoGeolocation>;
export type NeutrinoSecurityProperties = PropertiesOf<NeutrinoSecurityNetworking>;
export type NeutrinoImagingProperties = PropertiesOf<NeutrinoImaging>;
