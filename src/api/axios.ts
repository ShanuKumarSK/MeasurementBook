import axios from 'axios';
import { Buffer } from 'buffer';

import { BASE_URL } from './endpoints';
import {
  BASIC_USERNAME,
  BASIC_PASSWORD,
} from '../utils/basicAuth';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
});

api.interceptors.request.use(
  config => {

    const auth = Buffer.from(
      `${BASIC_USERNAME}:${BASIC_PASSWORD}`,
    ).toString('base64');

    config.headers.Authorization = `Basic ${auth}`;

    console.log('================ REQUEST ================');
    console.log('URL :', `${config.baseURL}${config.url}`);
    console.log('METHOD :', config.method);
    console.log('HEADERS :', config.headers);
    console.log('BODY :', config.data);
    console.log('=========================================');

    return config;
  },
  error => {
    console.log('REQUEST ERROR', error);
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {

    console.log('================ RESPONSE ================');
    console.log('URL :', response.config.url);
    console.log('STATUS :', response.status);
    console.log('DATA :', JSON.stringify(response.data, null, 2));
    console.log('==========================================');

    return response;
  },
  error => {

    console.log('================ ERROR ===================');

    if (error.response) {

      console.log('STATUS :', error.response.status);
      console.log(
        'DATA :',
        JSON.stringify(error.response.data, null, 2),
      );

    } else {

      console.log(error.message);

    }

    console.log('==========================================');

    return Promise.reject(error);
  },
);

export default api;