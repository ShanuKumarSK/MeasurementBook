import React from 'react';
import LoginForm from './LoginForm';

interface Props {
    selectedState?: {
        id: number;
        name: string;
    };
}

const AgencyLoginForm = ({ selectedState }: Props) => {
    return (
        <LoginForm
            loginType="AGENCY"
            selectedState={selectedState}
            showBlock={false}
            showPanchayat={false}
            showAgencyFields
        />
    );
};

export default AgencyLoginForm;