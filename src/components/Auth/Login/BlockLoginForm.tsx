import React from 'react';
import LoginForm from './LoginForm';

interface Props{
    selectedState:{
        id:number;
        name:string;
    };
}

const BlockLoginForm = ({selectedState}:Props) => {
  return (
    <LoginForm
      loginType="BLOCK"
      selectedState={selectedState}
      showPanchayat={false}
      showBlock
      showAgencyFields={false}
    />
  );
};

export default BlockLoginForm;