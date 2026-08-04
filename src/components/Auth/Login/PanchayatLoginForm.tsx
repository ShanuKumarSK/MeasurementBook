import React from 'react';
import LoginForm from './LoginForm';

const PanchayatLoginForm = () => {
  return (
    <LoginForm
      loginType="PANCHAYAT"
      showPanchayat
    />
  );
};

export default PanchayatLoginForm;