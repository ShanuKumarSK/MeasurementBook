import React from 'react';
import LoginForm from './LoginForm';

const PanchayatLoginForm = () => {
  return (
    <LoginForm
      loginType="PANCHAYAT"
      showPanchayat
      showAgencyFields={false}
    />
  );
};

export default PanchayatLoginForm;