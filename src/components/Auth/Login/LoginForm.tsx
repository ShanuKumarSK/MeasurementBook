// import React, { useEffect, useState } from 'react';
// import { View, StyleSheet } from 'react-native';

// import {
//   AppButton,
//   AppInput,
//   AppSelect,
//   AppSelectModal,
//   AppText,
//   RadioButton,
// } from '../../common';

// import AuthHeader from '../../common/AuthHeader';
// import theme from '../../../theme';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../../../types/navigation';
// import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
// import {
//   clearBlocks,
//   clearDistricts,
//   clearPanchayats,
//   fetchBlocks,
//   fetchDistricts,
//   fetchPanchayats,
//   setSelectedBlock,
//   setSelectedDistrict,
//   setSelectedPanchayat,
// } from '../../../redux/slices/locationSlice';

// type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// interface Props {
//   showPanchayat?: boolean;

//   showAgencyFields?: boolean;

//   loginType: 'BLOCK' | 'PANCHAYAT' | 'AGENCY';
// }

// interface Item {
//   id: number;
//   name: string;
// }

// const years: Item[] = [{ id: 1, name: '2026-27' }];

// const LEVELS = ['Zila Panchayat', 'Block Panchayat', 'Gram Panchayat'];

// const ROLE_CODES = ['POTAMB', 'POAEMB', 'POJEMB'];

// // const LOGIN_LEVELS = [
// //   'State Level',
// //   'District Level',
// //   'Block Level',
// //   'Panchayat Level',
// // ];

// const LoginForm = ({
//   showPanchayat = false,
//   showAgencyFields = false,
//   loginType,
// }: Props) => {
//   const navigation = useNavigation<NavigationProp>();
//   const [yearVisible, setYearVisible] = useState(false);
//   const [selectedFinancialYear, setSelectedFinancialYear] = useState('2026-27');
//   const [districtVisible, setDistrictVisible] = useState(false);
//   const [blockVisible, setBlockVisible] = useState(false);
//   const [panchayatVisible, setPanchayatVisible] = useState(false);
//   const [roleCodeVisible, setRoleCodeVisible] = useState(false);
//   const [loginLevelVisible, setLoginLevelVisible] = useState(false);
//   const [selectedRoleCode, setSelectedRoleCode] = useState('');
//   //   const [selectedLoginLevel, setSelectedLoginLevel] = useState('');
//   const dispatch = useAppDispatch();
//   const {
//     selectedState,
//     selectedDistrict,
//     selectedBlock,
//     selectedPanchayat,
//     districts,
//     blocks,
//     panchayats,
//     loading,
//   } = useAppSelector(state => state.location);

//   const redux = useAppSelector(state => state.location);

//   console.log('Redux Location:', redux);

//   useEffect(() => {
//     if (!selectedState) {
//       return;
//     }

//     dispatch(clearDistricts());
//     dispatch(clearBlocks());
//     dispatch(clearPanchayats());

//     dispatch(fetchDistricts(selectedState.id));
//   }, [selectedState]);

//   const getCurrentFinancialYear = () => {
//     const today = new Date();
//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;

//     return month >= 4 ? `${year}-${year + 1}` : `${year - 1}-${year}`;
//   };

//   onSelect={item => {
//   dispatch(setSelectedDistrict(item));
//   dispatch(clearBlocks());
//   dispatch(clearPanchayats());
//   dispatch(setSelectedBlock(null));
//   dispatch(setSelectedPanchayat(null));
//   dispatch(fetchBlocks(item.id));
// }}

//   const isFormValid =
//     !!selectedState &&
//     !!selectedFinancialYear &&
//     !!selectedDistrict &&
//     !!selectedBlock &&
//     (!showPanchayat || !!selectedPanchayat) &&
//     !!selectedRoleCode &&
//     !!userId.trim() &&
//     !!password.trim() &&
//     (!showAgencyFields || false);

//   return (
//     <View>
//       <AuthHeader
//         title={
//           loginType === 'BLOCK'
//             ? 'Block Login'
//             : loginType === 'PANCHAYAT'
//             ? 'Panchayat Login'
//             : 'Agency Login'
//         }
//         subtitle="Enter your details to login"
//         icon="leaf-outline"
//       />

//       <View style={styles.card}>
//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           STATE
//         </AppText>

//         <AppInput
//           value={selectedState?.name ?? ''}
//           placeholder="Select State"
//           required
//           editable={false}
//           leftIcon="map"
//           rightText="Change"
//           onPress={() =>
//             navigation.replace('StateSelection', {
//               role: loginType,
//             })
//           }
//         />

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           FINANCIAL YEAR
//         </AppText>

//         <AppSelect
//           placeholder="Select Financial Year"
//           value={selectedFinancialYear}
//           required
//           leftIcon="calendar-outline"
//           onPress={() => setYearVisible(true)}
//         />

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           DISTRICT
//         </AppText>

//         <AppSelect
//           placeholder="Select District"
//           value={selectedDistrict?.name}
//           required
//           leftIcon="business-outline"
//           onPress={() => setDistrictVisible(true)}
//         />
//         <View>
//           <AppText
//             variant="caption"
//             weight="600"
//             color="textSecondary"
//             style={styles.label}
//           >
//             BLOCK
//           </AppText>

//           <AppSelect
//             placeholder="Select Block"
//             value={selectedBlock?.name}
//             required
//             leftIcon="grid-outline"
//             onPress={() => setBlockVisible(true)}
//           />
//         </View>

//         {showPanchayat && (
//           <View>
//             <AppText
//               variant="caption"
//               weight="600"
//               color="textSecondary"
//               style={styles.label}
//             >
//               PANCHAYAT
//             </AppText>

//             <AppSelect
//               placeholder="Select Panchayat"
//               value={selectedPanchayat?.name}
//               required
//               leftIcon="people-outline"
//               onPress={() => setPanchayatVisible(true)}
//             />
//           </View>
//         )}

//         {showAgencyFields && (
//           <View>
//             <AppText
//               variant="caption"
//               weight="600"
//               color="textSecondary"
//               style={styles.label}
//             >
//               LEVEL OF WORK
//             </AppText>

//             {LEVELS.map(level => (
//               <RadioButton key={level} label={level} />
//             ))}

//             <AppText
//               variant="caption"
//               weight="600"
//               color="textSecondary"
//               style={styles.label}
//             >
//               AGENCY CATEGORY
//             </AppText>

//             <AppInput
//               placeholder="Select Agency Category"
//               leftIcon="grid-outline"
//               rightIcon="chevron-down-outline"
//             />

//             <AppText
//               variant="caption"
//               weight="600"
//               color="textSecondary"
//               style={styles.label}
//             >
//               EXECUTING AGENCY
//             </AppText>

//             <AppInput
//               placeholder="Select Executing Agency"
//               leftIcon="people-outline"
//               rightIcon="chevron-down-outline"
//             />
//           </View>
//         )}

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           ROLE CODE
//         </AppText>

//         <AppSelect
//           placeholder="Select Role Code"
//           value={selectedRoleCode}
//           required
//           leftIcon="code-working-outline"
//           onPress={() => setRoleCodeVisible(true)}
//         />

//         {/* <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           LOGIN LEVEL
//         </AppText>

//         <AppSelect
//           placeholder="Select Login Level"
//           value={selectedLoginLevel}
//           leftIcon="layers-outline"
//           onPress={() => setLoginLevelVisible(true)}
//         /> */}

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           USER ID
//         </AppText>

//         <AppInput
//           placeholder="User ID"
//           leftIcon="person-outline"
//           required
//           value={userId}
//           onChangeText={setUserId}
//         />

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.label}
//         >
//           PASSWORD
//         </AppText>

//         <AppInput
//           placeholder="Password"
//           leftIcon="lock-closed-outline"
//           rightIcon="eye-outline"
//           secureTextEntry
//           required
//           value={password}
//           onChangeText={setPassword}
//         />

//         <AppButton
//           title="Login"
//           style={styles.button}
//           disabled={!isFormValid}
//           onPress={() => {
//             if (!isFormValid) {
//               return;
//             }

//             navigation.replace('MeasurementBook');
//           }}
//         />
//       </View>

//       <AppSelectModal
//         visible={yearVisible}
//         title="Select Financial Year"
//         data={years}
//         onClose={() => setYearVisible(false)}
//         onSelect={item => {
//           setSelectedFinancialYear(item.name);
//           setYearVisible(false);
//         }}
//       />

//       <AppSelectModal
//         visible={districtVisible}
//         title="Select District"
//         data={districts}
//         onClose={() => setDistrictVisible(false)}
//         onSelect={item => {
//           dispatch(setSelectedDistrict(item));

//           dispatch(fetchBlocks(item.id));
//         }}
//       />

//       <AppSelectModal
//         visible={blockVisible}
//         title="Select Block"
//         data={blocks}
//         onClose={() => setBlockVisible(false)}
//         onSelect={item => {
//           dispatch(setSelectedBlock(item));

//           if (loginType === 'PANCHAYAT') {
//             dispatch(fetchPanchayats(item.id));
//           }
//         }}
//       />

//       <AppSelectModal
//         visible={panchayatVisible}
//         title="Select Panchayat"
//         data={panchayats}
//         onClose={() => setPanchayatVisible(false)}
//         onSelect={item => {
//           dispatch(setSelectedPanchayat(item));
//         }}
//       />

//       <AppSelectModal
//         visible={roleCodeVisible}
//         title="Select Role Code"
//         data={ROLE_CODES.map((code, index) => ({
//           id: index + 1,
//           name: code,
//         }))}
//         onClose={() => setRoleCodeVisible(false)}
//         onSelect={item => {
//           setSelectedRoleCode(item.name);
//           setRoleCodeVisible(false);
//         }}
//       />

//       {/* <AppSelectModal
//         visible={loginLevelVisible}
//         title="Select Login Level"
//         data={LOGIN_LEVELS.map((level, index) => ({
//           id: index + 1,
//           name: level,
//         }))}
//         onClose={() => setLoginLevelVisible(false)}
//         onSelect={item => {
//           setSelectedLoginLevel(item.name);
//           setLoginLevelVisible(false);
//         }}
//       /> */}
//     </View>
//   );
// };

// export default LoginForm;

// const styles = StyleSheet.create({
//   card: {
//     marginTop: -35,

//     marginHorizontal: 14,

//     backgroundColor: theme.colors.white,

//     borderRadius: 32,

//     padding: 18,

//     shadowColor: '#000',

//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },

//     shadowOpacity: 0.08,

//     shadowRadius: 18,

//     elevation: 8,

//     marginBottom: 20,
//   },

//   label: {
//     letterSpacing: 2,

//     marginTop: 16,

//     marginBottom: 8,
//   },

//   button: {
//     marginTop: 28,
//   },
// });

























import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import {
  AppButton,
  AppInput,
  AppSelect,
  AppSelectModal,
  AppText,
  RadioButton,
} from '../../common';

import AuthHeader from '../../common/AuthHeader';
import theme from '../../../theme';
import { RootStackParamList } from '../../../types/navigation';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

import {
  clearBlocks,
  clearDistricts,
  clearPanchayats,
  fetchBlocks,
  fetchDistricts,
  fetchPanchayats,
  setSelectedBlock,
  setSelectedDistrict,
  setSelectedPanchayat,
} from '../../../redux/slices/locationSlice';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface Props {
  showPanchayat?: boolean;
  showAgencyFields?: boolean;
  loginType: 'BLOCK' | 'PANCHAYAT' | 'AGENCY';
}

interface Item {
  id: number;
  name: string;
}

const years: Item[] = [{ id: 1, name: '2026-27' }];

const LEVELS = [
  'Zila Panchayat',
  'Block Panchayat',
  'Gram Panchayat',
];

const ROLE_CODES = ['POTAMB', 'POAEMB', 'POJEMB'];

const LoginForm = ({
  showPanchayat = false,
  showAgencyFields = false,
  loginType,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();
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

  const [selectedFinancialYear, setSelectedFinancialYear] =
    useState('2026-27');
  const [selectedRoleCode, setSelectedRoleCode] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const [selectedLevel, setSelectedLevel] = useState('');
  const [agencyCategory, setAgencyCategory] = useState('');
  const [executingAgency, setExecutingAgency] = useState('');

  const [yearVisible, setYearVisible] = useState(false);
  const [districtVisible, setDistrictVisible] = useState(false);
  const [blockVisible, setBlockVisible] = useState(false);
  const [panchayatVisible, setPanchayatVisible] = useState(false);
  const [roleCodeVisible, setRoleCodeVisible] = useState(false);

  useEffect(() => {
    if (!selectedState) {
      return;
    }

    dispatch(clearDistricts());
    dispatch(clearBlocks());
    dispatch(clearPanchayats());

    dispatch(setSelectedDistrict(null));
    dispatch(setSelectedBlock(null));
    dispatch(setSelectedPanchayat(null));

    dispatch(fetchDistricts(selectedState.id));
  }, [selectedState?.id, dispatch]);

  const isAgencyValid =
    !showAgencyFields ||
    (!!selectedLevel &&
      !!agencyCategory.trim() &&
      !!executingAgency.trim());

  const isFormValid =
    !!selectedState &&
    !!selectedFinancialYear.trim() &&
    !!selectedDistrict &&
    !!selectedBlock &&
    (!showPanchayat || !!selectedPanchayat) &&
    !!selectedRoleCode.trim() &&
    !!userId.trim() &&
    !!password.trim() &&
    isAgencyValid;

  const handleLogin = () => {
    if (!isFormValid) {
      Alert.alert(
        'Required Fields',
        'Please fill in all required fields before continuing.',
      );
      return;
    }

    navigation.replace('MeasurementBook');
  };

  return (
    <View>
      <AuthHeader
        title={
          loginType === 'BLOCK'
            ? 'Block Login'
            : loginType === 'PANCHAYAT'
              ? 'Panchayat Login'
              : 'Agency Login'
        }
        subtitle="Enter your details to login"
        icon="leaf-outline"
      />

      <View style={styles.card}>
        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.label}
        >
          STATE *
        </AppText>

        <AppInput
          value={selectedState?.name ?? ''}
          placeholder="Select State"
          required
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
          style={styles.label}
        >
          FINANCIAL YEAR *
        </AppText>

        <AppSelect
          placeholder="Select Financial Year"
          value={selectedFinancialYear}
          required
          leftIcon="calendar-outline"
          onPress={() => setYearVisible(true)}
        />

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.label}
        >
          DISTRICT *
        </AppText>

        <AppSelect
          placeholder="Select District"
          value={selectedDistrict?.name ?? ''}
          required
          leftIcon="business-outline"
          onPress={() => {
            if (!selectedState) {
              Alert.alert('Required', 'Please select a State first.');
              return;
            }

            setDistrictVisible(true);
          }}
        />

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.label}
        >
          BLOCK *
        </AppText>

        <AppSelect
          placeholder="Select Block"
          value={selectedBlock?.name ?? ''}
          required
          leftIcon="grid-outline"
          onPress={() => {
            if (!selectedDistrict) {
              Alert.alert('Required', 'Please select a District first.');
              return;
            }

            setBlockVisible(true);
          }}
        />

        {showPanchayat && (
          <>
            <AppText
              variant="caption"
              weight="600"
              color="textSecondary"
              style={styles.label}
            >
              PANCHAYAT *
            </AppText>

            <AppSelect
              placeholder="Select Panchayat"
              value={selectedPanchayat?.name ?? ''}
              required
              leftIcon="people-outline"
              onPress={() => {
                if (!selectedBlock) {
                  Alert.alert('Required', 'Please select a Block first.');
                  return;
                }

                setPanchayatVisible(true);
              }}
            />
          </>
        )}

        {showAgencyFields && (
          <>
            <AppText
              variant="caption"
              weight="600"
              color="textSecondary"
              style={styles.label}
            >
              LEVEL OF WORK *
            </AppText>

            {LEVELS.map(level => (
              <RadioButton
                key={level}
                label={level}
                selected={selectedLevel === level}
                onPress={() => setSelectedLevel(level)}
              />
            ))}

            <AppText
              variant="caption"
              weight="600"
              color="textSecondary"
              style={styles.label}
            >
              AGENCY CATEGORY *
            </AppText>

            <AppInput
              placeholder="Enter Agency Category"
              value={agencyCategory}
              onChangeText={setAgencyCategory}
              required
              leftIcon="grid-outline"
            />

            <AppText
              variant="caption"
              weight="600"
              color="textSecondary"
              style={styles.label}
            >
              EXECUTING AGENCY *
            </AppText>

            <AppInput
              placeholder="Enter Executing Agency"
              value={executingAgency}
              onChangeText={setExecutingAgency}
              required
              leftIcon="people-outline"
            />
          </>
        )}

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.label}
        >
          ROLE CODE *
        </AppText>

        <AppSelect
          placeholder="Select Role Code"
          value={selectedRoleCode}
          required
          leftIcon="code-working-outline"
          onPress={() => setRoleCodeVisible(true)}
        />

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.label}
        >
          USER ID *
        </AppText>

        <AppInput
          placeholder="User ID"
          value={userId}
          onChangeText={setUserId}
          required
          leftIcon="person-outline"
        />

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.label}
        >
          PASSWORD *
        </AppText>

        <AppInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          required
          leftIcon="lock-closed-outline"
          rightIcon="eye-outline"
          secureTextEntry
        />

        <AppButton
          title="Login"
          style={styles.button}
          disabled={!isFormValid || loading}
          onPress={handleLogin}
        />
      </View>

      <AppSelectModal
        visible={yearVisible}
        title="Select Financial Year"
        data={years}
        onClose={() => setYearVisible(false)}
        onSelect={item => {
          setSelectedFinancialYear(item.name);
          setYearVisible(false);
        }}
      />

      <AppSelectModal
        visible={districtVisible}
        title="Select District"
        data={districts}
        onClose={() => setDistrictVisible(false)}
        onSelect={item => {
          dispatch(setSelectedDistrict(item));

          dispatch(clearBlocks());
          dispatch(clearPanchayats());
          dispatch(setSelectedBlock(null));
          dispatch(setSelectedPanchayat(null));

          setDistrictVisible(false);
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
          dispatch(clearPanchayats());
          dispatch(setSelectedPanchayat(null));

          setBlockVisible(false);

          if (loginType === 'PANCHAYAT' || showPanchayat) {
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
          setPanchayatVisible(false);
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