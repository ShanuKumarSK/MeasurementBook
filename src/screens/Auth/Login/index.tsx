import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { ScreenWrapper } from '../../../components/common';

import BlockLoginForm from '../../../components/Auth/Login/BlockLoginForm';
import PanchayatLoginForm from '../../../components/Auth/Login/PanchayatLoginForm';
import AgencyLoginForm from '../../../components/Auth/Login/AgencyLoginForm';

import { RootStackParamList } from '../../../types/navigation';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const Login = ({ route }: Props) => {

  const { role, state } = route.params;

  return (
    <ScreenWrapper>

      {role === 'BLOCK' && (
        <BlockLoginForm selectedState={state} />
      )}

      {role === 'PANCHAYAT' && (
        <PanchayatLoginForm selectedState={state} />
      )}

      {role === 'AGENCY' && (
        <AgencyLoginForm selectedState={state} />
      )}

    </ScreenWrapper>
  );
};

export default Login;