import axios from 'axios';
import { Buffer } from 'buffer';

import {
  MEASUREMENT_BOOK_BASE_URL,
  MEASUREMENT_BOOK_ENDPOINTS,
} from '../api/endpoints';

import {
  BASIC_USERNAME,
  BASIC_PASSWORD,
} from '../utils/basicAuth';

export interface MeasurementBookRecord {
  work_code: string;
  work_name: string;
  work_cat_code: string;
  Block_Code: string;
  panchayat_Code: string;
  MSR_No: string;
  DT_From: string;
  DT_to: string;
}

interface MeasurementBookResponse {
  Data: MeasurementBookRecord[];
  status: string;
  message: string;
}

const measurementBookApi = axios.create({
  baseURL: MEASUREMENT_BOOK_BASE_URL,
  timeout: 30000,
});

measurementBookApi.interceptors.request.use(config => {
  const auth = Buffer.from(
    `${BASIC_USERNAME}:${BASIC_PASSWORD}`,
  ).toString('base64');

  config.headers.set(
    'Username',
    BASIC_USERNAME,
  );

  config.headers.set(
    'Password',
    BASIC_PASSWORD,
  );

  config.headers.set(
    'Authorization',
    `Basic ${auth}`,
  );

  config.headers.set(
    'Content-Type',
    'application/x-www-form-urlencoded',
  );

  return config;
});

export const getMeasurementBook = async (
  blockCode: string | number,
  panchayatCode: string | number,
): Promise<MeasurementBookRecord[]> => {
  const body = new URLSearchParams();

  body.append('blockCode', String(blockCode));
  body.append('panchayat_code', String(panchayatCode));

  const response =
    await measurementBookApi.post<MeasurementBookResponse>(
      MEASUREMENT_BOOK_ENDPOINTS.MEASUREMENT_BOOK,
      body.toString(),
    );

  if (
    response.data?.status !== 'True' ||
    !Array.isArray(response.data?.Data)
  ) {
    throw new Error(
      response.data?.message || 'Failed to fetch Measurement Book data',
    );
  }

  return response.data.Data;
};