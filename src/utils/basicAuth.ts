
import CryptoJS from 'crypto-js';
export const USERNAME = 'Nrega';
const PASSWORD = 'Nrg2k18';


export const BASIC_USERNAME = CryptoJS.SHA512(USERNAME).toString(
    CryptoJS.enc.Hex,
);

export const BASIC_PASSWORD = CryptoJS.SHA512(PASSWORD).toString(
    CryptoJS.enc.Hex,
);