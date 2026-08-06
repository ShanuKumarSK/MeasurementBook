import api from '../api/axios';
import { ENDPOINTS } from '../api/endpoints';

export const getStates = async () => {

  console.log('Calling States API...');

  const body = new URLSearchParams();

  // body.append('lgd_st_code', '20');
  body.append('fin_yr', '2025-2026');

  const response = await api.post(
    ENDPOINTS.STATES,
    body.toString(),
    {
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded',
      },
    },
  );
  console.log(
    'States Response:',
    response.data,
  );

  return response;
};

export const getDistricts = async (stateId: number) => {

  console.log('Calling District API...');

  const body = new URLSearchParams();

  body.append('lgd_st_code', stateId.toString());
  body.append('fin_yr', '2025-2026');

  const response = await api.post(
    ENDPOINTS.DISTRICTS,
    body.toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  console.log('District Response:', response.data);

  return response;

};

export const getBlocks = async (stateId: number, districtId: number) => {

  console.log('Calling Block API...');

  const body = new URLSearchParams();

  body.append('lgd_st_code', stateId.toString());
  body.append('fin_yr', '2025-2026');
  body.append('lgd_Dist_code', districtId.toString());

  const response = await api.post(
    ENDPOINTS.BLOCKS,
    body.toString(),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  console.log('Block Response:', response.data);

  return response;

};

export const getPanchayats = async (
  stateId: number,
  districtId: number,
  blockId: number,
) => {

  console.log('Calling Panchayat API...');

  const body = new URLSearchParams();

  body.append('lgd_st_code', stateId.toString());
  body.append('fin_yr', '2025-2026');
  body.append('lgd_Dist_code', districtId.toString());
  body.append('lgd_blk_code', blockId.toString());

  const response = await api.post(
    ENDPOINTS.PANCHAYATS,
    body.toString(),
    {
      headers: {
        'Content-Type':
          'application/x-www-form-urlencoded',
      },
    },
  );

  console.log(
    'Panchayat Response:',
    response,
  );

  return response;
};