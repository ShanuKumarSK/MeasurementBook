import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import {
    AppButton,
    AppInput,
    AppText,
    RadioButton
} from '../../common';

import AuthHeader from '../../common/AuthHeader';
import theme from '../../../theme';
import {
    NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const STATES = ['ANDAMAN AND NICOBAR'];

interface Props {

    showPanchayat?: boolean;

    showAgencyFields?: boolean;

    showBlock?: boolean;

    loginType: 'BLOCK' | 'PANCHAYAT' | 'AGENCY';

    selectedState?: {
        id: number;
        name: string;
    };

}

const LEVELS = [
    'Zila Panchayat',
    'Block Panchayat',
    'Gram Panchayat',
];

const AGENCY_CATEGORY = [
    'Civil',
    'Electrical',
    'Forest',
];

const EXECUTING_AGENCY = [
    'ABC Construction',
    'XYZ Pvt Ltd',
];

const LoginForm = ({
    showPanchayat = false,
    showBlock = false,
    showAgencyFields = false,
    loginType,
    selectedState,
}: Props) => {

    const navigation = useNavigation<NavigationProp>();

    return (
        <>
            <AuthHeader
                title={loginType === 'BLOCK' ? 'Block Login' : loginType === 'PANCHAYAT' ? 'Panchayat Login' : 'Agency Login'}
                subtitle="Enter your details to login"
                icon="leaf-outline"
            />

            <View style={styles.card}>

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    STATE
                </AppText>

                <AppInput
                    value={selectedState?.name ?? ''}
                    placeholder="Select State"
                    editable={false}
                    leftIcon="map"
                    rightText="Change"
                    onPress={() =>
                        navigation.replace('StateSelection', {
                            role: loginType,
                        })
                    }
                />

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    FINANCIAL YEAR
                </AppText>

                <AppInput
                    placeholder="Select Financial Year"
                    leftIcon="calendar-outline"
                    rightIcon="chevron-down-outline"
                />

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    DISTRICT
                </AppText>

                <AppInput
                    placeholder="Select District"
                    leftIcon="business-outline"
                    rightIcon="chevron-down-outline"
                />

                {showBlock && (
                    <>
                        <AppText
                            variant="caption"
                            weight="600"
                            color="textSecondary"
                            style={styles.label}>
                            BLOCK
                        </AppText>

                        <AppInput
                            placeholder="Select Block"
                            leftIcon="grid-outline"
                            rightIcon="chevron-down-outline"
                        />
                    </>
                )}

                {showPanchayat && (
                    <>
                        <AppText
                            variant="caption"
                            weight="600"
                            color="textSecondary"
                            style={styles.label}>
                            PANCHAYAT
                        </AppText>

                        <AppInput
                            placeholder="Select Panchayat"
                            leftIcon="people-outline"
                            rightIcon="chevron-down-outline"
                        />
                    </>
                )}

                {showAgencyFields && (
                    <>
                        <AppText
                            variant="caption"
                            weight="600"
                            color="textSecondary"
                            style={styles.label}>
                            LEVEL OF WORK
                        </AppText>

                        {LEVELS.map(level => (
                            <RadioButton
                                key={level}
                                label={level}
                            />
                        ))}

                        <AppText
                            variant="caption"
                            weight="600"
                            color="textSecondary"
                            style={styles.label}>
                            AGENCY CATEGORY
                        </AppText>

                        <AppInput
                            placeholder="Select Agency Category"
                            leftIcon="grid-outline"
                            rightIcon="chevron-down-outline"
                        />

                        <AppText
                            variant="caption"
                            weight="600"
                            color="textSecondary"
                            style={styles.label}>
                            EXECUTING AGENCY
                        </AppText>

                        <AppInput
                            placeholder="Select Executing Agency"
                            leftIcon="people-outline"
                            rightIcon="chevron-down-outline"
                        />
                    </>
                )}

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    USER ID
                </AppText>

                <AppInput
                    placeholder="User ID"
                    leftIcon="person-outline"
                />

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    PASSWORD
                </AppText>

                <AppInput
                    placeholder="Password"
                    leftIcon="lock-closed-outline"
                    rightIcon="eye-outline"
                    secureTextEntry
                />

                <AppButton
                    title="Login"
                    style={styles.button}
                    onPress={() =>
                        navigation.replace('MeasurementBook')
                    }
                />

            </View>
        </>
    );
};

export default LoginForm;

const styles = StyleSheet.create({

    card: {

        marginTop: -35,

        marginHorizontal: 14,

        backgroundColor: theme.colors.white,

        borderRadius: 32,

        padding: 18,

        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 8,
        },

        shadowOpacity: 0.08,

        shadowRadius: 18,

        elevation: 8,

        marginBottom: 20,
    },

    label: {

        letterSpacing: 2,

        marginTop: 16,

        marginBottom: 8,
    },

    button: {

        marginTop: 28,
    },

});