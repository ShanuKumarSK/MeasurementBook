import React from 'react';
import LoginForm from './LoginForm';

const BlockLoginForm = () => {
  return (
    <LoginForm
      loginType="BLOCK"
      showPanchayat={false}
    />
  );
};

export default BlockLoginForm;