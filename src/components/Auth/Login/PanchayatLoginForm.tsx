import React from 'react';
import LoginForm from './LoginForm';

interface Props{
    selectedState:{
        id:number;
        name:string;
    };
}

const PanchayatLoginForm = ({selectedState}:Props) => {
  return (
    <LoginForm
      loginType="PANCHAYAT"
      selectedState={selectedState}
      showPanchayat
      showBlock={false}
      showAgencyFields={false}
    />
  );
};

export default PanchayatLoginForm;