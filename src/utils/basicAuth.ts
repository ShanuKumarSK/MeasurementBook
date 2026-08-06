
import CryptoJS from 'crypto-js';
export const BASIC_USERNAME = 'Nrega';

const PASSWORD = 'Nrg2k18';

export const BASIC_PASSWORD = CryptoJS.SHA512(PASSWORD).toString(
    CryptoJS.enc.Hex,
);