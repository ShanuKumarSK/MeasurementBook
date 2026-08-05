export type RootStackParamList = {
    Splash: undefined;

    ChooseRole: undefined;

    Login: {
        role: 'BLOCK' | 'PANCHAYAT' | 'AGENCY';
        state: {
            id: number;
            name: string;
        };
    };

    StateSelection: {
        role: 'BLOCK' | 'PANCHAYAT' | 'AGENCY';
    };


    MeasurementBook: undefined;

    Activity: undefined;

    Material: undefined;
};