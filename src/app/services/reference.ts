export const PUBLIC_USER = {
    username: 'public',
    password: 'public',
};

export const ROOT_USER = {
    username: 'root',
    password: 'toor',
};

export const APP_KEY = 'kid_BkJoH0wxd';
export const APP_SECRET = 'a6d8caa2cbbd470dacda68c3a85070f3';
export const MASTER_KEY = '69685de165ce42b2ad5d81cedcf134c6';

export const SITE = 'https://baas.kinvey.com/';

export const COLLECTION_END_POINT: string = `${SITE}appdata/${APP_KEY}/`;
export const USER_END_POINT: string = `${SITE}user/${APP_KEY}/`;
export const ROLE_END_POINT: string = `${SITE}roles/${APP_KEY}/`;

export const ROLE_ADMIN: string = '342d09ed-db1e-4d45-adc2-ec7cdbeb9d0b';
export const ROLE_USER: string = 'd9edcef4-e9be-4641-a43c-a64900d5eb9b';