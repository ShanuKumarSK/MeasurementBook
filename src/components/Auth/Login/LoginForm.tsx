import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import {
    AppButton,
    AppInput,
    AppSelect,
    AppSelectModal,
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
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { clearBlocks, clearDistricts, clearPanchayats, fetchBlocks, fetchDistricts, fetchPanchayats, setSelectedBlock, setSelectedDistrict, setSelectedPanchayat, } from '../../../redux/slices/locationSlice';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const STATES = ['ANDAMAN AND NICOBAR'];

interface Props {

    showPanchayat?: boolean;

    showAgencyFields?: boolean;

    loginType: 'BLOCK' | 'PANCHAYAT' | 'AGENCY';

}

const LEVELS = [
    'Zila Panchayat',
    'Block Panchayat',
    'Gram Panchayat',
];

const ROLE_CODES = [
    'ROLE001',
    'ROLE002',
    'ROLE003',
    'ROLE004',
];

const LOGIN_LEVELS = [
    'State Level',
    'District Level',
    'Block Level',
    'Panchayat Level',
];

const LoginForm = ({
    showPanchayat = false,
    showAgencyFields = false,
    loginType,
}: Props) => {

    const navigation = useNavigation<NavigationProp>();
    const [districtVisible, setDistrictVisible] = useState(false);
    const [blockVisible, setBlockVisible] = useState(false);
    const [panchayatVisible, setPanchayatVisible] = useState(false);
    const [roleCodeVisible, setRoleCodeVisible] = useState(false);
    const [loginLevelVisible, setLoginLevelVisible] = useState(false);
    const [selectedRoleCode, setSelectedRoleCode] = useState('');
    const [selectedLoginLevel, setSelectedLoginLevel] = useState('');
    const dispatch = useAppDispatch();
    const {
        selectedState,
        selectedDistrict,
        selectedBlock,
        selectedPanchayat,
        districts,
        blocks,
        panchayats,
        loading,
    } = useAppSelector(state => state.location);

    const redux = useAppSelector(state => state.location);

    console.log('Redux Location:', redux);

    useEffect(() => {

        if (!selectedState) {
            return;
        }

        dispatch(clearDistricts());
        dispatch(clearBlocks());
        dispatch(clearPanchayats());

        dispatch(fetchDistricts(selectedState.id));

    }, [selectedState]);

    const getCurrentFinancialYear = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;

        return month >= 4
            ? `${year}-${year + 1}`
            : `${year - 1}-${year}`;
    };

    const CURRENT_FINANCIAL_YEAR = getCurrentFinancialYear();

    console.log("Props District :", selectedDistrict);
    console.log("Redux District :", redux.selectedDistrict);
    console.log('Selected State:', selectedState);
    console.log('Selected District:', selectedDistrict);
    console.log('Selected Block:', selectedBlock);
    console.log('Selected Panchayat:', selectedPanchayat);
    console.log('Districts:', districts);
    console.log('Blocks:', blocks);
    console.log('Panchayats:', panchayats);

    return (
        <View>
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

                {/* <AppInput
                    placeholder="Select Financial Year"
                    leftIcon="calendar-outline"
                    rightIcon="chevron-down-outline"
                /> */}
                <AppInput
                    value={CURRENT_FINANCIAL_YEAR}
                    editable={false}
                    leftIcon="calendar-outline"
                />

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    DISTRICT
                </AppText>

                <AppSelect
                    placeholder="Select District"
                    value={selectedDistrict?.name}
                    leftIcon="business-outline"
                    onPress={() => setDistrictVisible(true)}
                />
                <View>
                    <AppText
                        variant="caption"
                        weight="600"
                        color="textSecondary"
                        style={styles.label}>
                        BLOCK
                    </AppText>

                    <AppSelect
                        placeholder="Select Block"
                        value={selectedBlock?.name}
                        leftIcon="grid-outline"
                        onPress={() => setBlockVisible(true)}
                    />
                </View>

                {showPanchayat && (
                    <View>
                        <AppText
                            variant="caption"
                            weight="600"
                            color="textSecondary"
                            style={styles.label}>
                            PANCHAYAT
                        </AppText>

                        <AppSelect
                            placeholder="Select Panchayat"
                            value={selectedPanchayat?.name}
                            leftIcon="people-outline"
                            onPress={() => setPanchayatVisible(true)}
                        />
                    </View>
                )}

                {showAgencyFields && (
                    <View>
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
                    </View>
                )}

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    ROLE CODE
                </AppText>

                <AppSelect
                    placeholder="Select Role Code"
                    value={selectedRoleCode}
                    leftIcon="code-working-outline"
                    onPress={() => setRoleCodeVisible(true)}
                />

                <AppText
                    variant="caption"
                    weight="600"
                    color="textSecondary"
                    style={styles.label}>
                    LOGIN LEVEL
                </AppText>

                <AppSelect
                    placeholder="Select Login Level"
                    value={selectedLoginLevel}
                    leftIcon="layers-outline"
                    onPress={() => setLoginLevelVisible(true)}
                />

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

            <AppSelectModal
                visible={districtVisible}
                title="Select District"
                data={districts}
                onClose={() => setDistrictVisible(false)}
                onSelect={item => {

                    dispatch(setSelectedDistrict(item));

                    dispatch(fetchBlocks(item.id));

                }}
            />

            <AppSelectModal
                visible={blockVisible}
                title="Select Block"
                data={blocks}
                onClose={() => setBlockVisible(false)}
                onSelect={item => {

                    dispatch(setSelectedBlock(item));

                    if (loginType === 'PANCHAYAT') {

                        dispatch(fetchPanchayats(item.id));

                    }

                }}
            />

            <AppSelectModal
                visible={panchayatVisible}
                title="Select Panchayat"
                data={panchayats}
                onClose={() => setPanchayatVisible(false)}
                onSelect={item => {

                    dispatch(setSelectedPanchayat(item));

                }}
            />

            <AppSelectModal
                visible={roleCodeVisible}
                title="Select Role Code"
                data={ROLE_CODES.map((code, index) => ({
                    id: index + 1,
                    name: code,
                }))}
                onClose={() => setRoleCodeVisible(false)}
                onSelect={item => {
                    setSelectedRoleCode(item.name);
                    setRoleCodeVisible(false);
                }}
            />

            <AppSelectModal
                visible={loginLevelVisible}
                title="Select Login Level"
                data={LOGIN_LEVELS.map((level, index) => ({
                    id: index + 1,
                    name: level,
                }))}
                onClose={() => setLoginLevelVisible(false)}
                onSelect={item => {
                    setSelectedLoginLevel(item.name);
                    setLoginLevelVisible(false);
                }}
            />
            
        </View>
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