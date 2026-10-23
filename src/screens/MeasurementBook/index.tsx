// import React, { useState } from 'react';
// import {
//   View,
//   StyleSheet,
// } from 'react-native';

// import {
//   ScreenWrapper,
//   SelectionHeader,
//   AppInput,
//   AppText,
//   AppButton,
//   RadioButton,
// } from '../../components/common';

// import theme from '../../theme';

// const WORKS = [
//   'Road Construction',
//   'Drain Construction',
//   'PCC Road',
// ];

// const PERIODS = [
//   'April 2026',
//   'May 2026',
// ];

// const MeasurementBook = ({ navigation }: any) => {

//   const today = new Date().toLocaleDateString('en-GB');

//   const [musterType, setMusterType] = useState<'PERIOD' | 'WORKER'>('PERIOD');

//   return (
//     <ScreenWrapper>

//       <SelectionHeader
//         title=""
//         subtitle=""
//         icon="bar-chart"
//         onBackPress={() => navigation.goBack()}
//         onMenuPress={() => { }}
//       />

//       <View style={styles.card}>

//         {/* BOOK DETAILS */}

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.heading}>
//           BOOK DETAILS
//         </AppText>

//         <AppInput
//           placeholder="Measurement Book No.*"
//           leftIcon="book-outline"
//         />

//         <AppInput
//           placeholder="Page No.*"
//           leftIcon="document-text-outline"
//         />

//         <AppInput
//           value={today}
//           editable={false}
//           leftIcon="calendar-outline"
//         />

//         {/* WORK INFO */}

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.heading}>
//           WORK INFO
//         </AppText>

//         <AppInput
//           placeholder="Search With Work Code"
//           leftIcon="search-outline"
//         />

//         <AppInput
//           placeholder="Select Work*"
//           leftIcon="briefcase-outline"
//           rightIcon="chevron-down-outline"
//         />

//         {/* MUSTERROLL */}

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.heading}>
//           MUSTERROLL TYPE
//         </AppText>

//         <View style={styles.radioRow}>

//           <RadioButton
//             label="Musterroll Period Wise"
//             selected={musterType === 'PERIOD'}
//             onPress={() => setMusterType('PERIOD')}
//           />

//           <RadioButton
//             label="Musterroll Wise"
//             selected={musterType === 'WORKER'}
//             onPress={() => setMusterType('WORKER')}
//           />

//         </View>

//         {/* PERIOD */}

//         <AppText
//           variant="caption"
//           weight="600"
//           color="textSecondary"
//           style={styles.heading}>
//           PERIOD
//         </AppText>

//         <AppInput
//           placeholder="Select Measurement Period*"
//           leftIcon="time-outline"
//           rightIcon="chevron-down-outline"
//         />

//         <AppButton
//           title="Submit"
//           style={styles.button}
//           onPress={() =>
//             navigation.navigate('Activity')
//           }
//         />

//       </View>

//     </ScreenWrapper>
//   );
// };

// export default MeasurementBook;

// const styles = StyleSheet.create({

//   card: {

//     marginTop: -35,

//     marginHorizontal: 14,

//     backgroundColor: '#FFF',

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

//   heading: {

//     letterSpacing: 2,

//     marginTop: 16,

//     marginBottom: 10,

//   },

//   radioRow: {

//     flexDirection: 'column',

//     justifyContent: 'space-between',

//     flexWrap: 'nowrap',

//     marginTop: 8,

//   },

//   button: {

//     marginTop: 25,

//   },

// });

import React, { useEffect, useMemo, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import {
  ScreenWrapper,
  SelectionHeader,
  AppInput,
  AppSelect,
  AppSelectModal,
  AppText,
  AppButton,
  RadioButton,
} from '../../components/common';

import {
  getMeasurementBook,
  MeasurementBookRecord,
} from '../../services/measurementBookService';

import { useAppSelector } from '../../redux/hooks';

interface SelectItem {
  id: number;
  name: string;
}

const formatDate = (value: string) => {
  const parts = value.split(' ')[0].split('/');

  if (parts.length !== 3) {
    return value;
  }

  const [month, day, year] = parts;

  return `${day.padStart(2, '0')}/${month.padStart(2, '0')}/${year}`;
};

const MeasurementBook = ({ navigation }: any) => {
  const today = new Date().toLocaleDateString('en-GB');

  // const { selectedBlock, selectedPanchayat } = useAppSelector(
  //   state => state.location,
  // );

  const [musterType, setMusterType] = useState<'PERIOD' | 'WORKER'>('PERIOD');
  const [workSelectMode, setWorkSelectMode] = useState<'CODE' | 'NAME'>('NAME');
  const [records, setRecords] = useState<MeasurementBookRecord[]>([]);
  const [selectedWorkCode, setSelectedWorkCode] = useState('');
  const [selectedRecord, setSelectedRecord] =
    useState<MeasurementBookRecord | null>(null);
  const [workSearch, setWorkSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [workVisible, setWorkVisible] = useState(false);
  const [periodVisible, setPeriodVisible] = useState(false);
  const [msrVisible, setMsrVisible] = useState(false);
  const [selectedMsrNo, setSelectedMsrNo] = useState<string | null>(null);

  useEffect(() => {
    // const blockCode = selectedBlock?.id;
    // const panchayatCode = selectedPanchayat?.id;

    const fixedBlockCode = '0601001';
    const fixedPanchayatCode = '0601001001';

    if (!fixedBlockCode || !fixedPanchayatCode) {
      setRecords([]);
      return;
    }

    let active = true;

    const loadRecords = async () => {
      try {
        setLoading(true);

        const result = await getMeasurementBook(
          fixedBlockCode,
          fixedPanchayatCode,
        );

        if (active) {
          setRecords(result);
        }
      } catch (error) {
        if (active) {
          Alert.alert('Error', 'Unable to load Measurement Book records.');
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    loadRecords();

    return () => {
      active = false;
    };
  }, []);

  const works = useMemo(
    () =>
      records.map((record, index) => ({
        id: index + 1,
        name: `${record.work_code} - ${record.work_name}`,
        workCode: record.work_code,
        record,
      })),
    [records],
  );

  const filteredWorksByCode = useMemo(
    () =>
      works
        .filter(item =>
          item.record.work_code
            .toLowerCase()
            .includes(workSearch.trim().toLowerCase()),
        )
        .map(item => ({
          id: item.id,
          name: item.record.work_code,
          workCode: item.workCode,
        })),
    [works, workSearch],
  );

  const filteredWorksByName = useMemo(
    () =>
      works.map(item => ({
        id: item.id,
        name: `${item.record.work_name} (${item.record.work_code})`,
        workCode: item.workCode,
      })),
    [works],
  );

  const selectedWorkRecords = useMemo(
    () =>
      records.filter(
        record =>
          record.work_code === selectedWorkCode &&
          record.MSR_No === selectedMsrNo,
      ),
    [records, selectedWorkCode, selectedMsrNo],
  );

  const periods: SelectItem[] = selectedWorkRecords.map((record, index) => ({
    id: index + 1,
    name: `${formatDate(record.DT_From)} - ${formatDate(record.DT_to)}`,
  }));

  const musterrolls: SelectItem[] = selectedWorkRecords.map(
    (record, index) => ({
      id: index + 1,
      name: record.MSR_No,
    }),
  );

  const handleSelectWork = (item: SelectItem & { workCode?: string }) => {
    const work = works.find(option => option.id === item.id);

    if (!work) return;

    setSelectedWorkCode(work.workCode);
    setSelectedMsrNo(work.record.MSR_No);
    setSelectedRecord(work.record);
    setWorkVisible(false);
  };

  const handleSelectRecord = (item: SelectItem) => {
    const record = selectedWorkRecords[item.id - 1];

    if (record) {
      setSelectedRecord(record);
    }

    setPeriodVisible(false);
    setMsrVisible(false);
  };

  const handleSubmit = () => {
    if (!selectedRecord) {
      Alert.alert(
        'Required',
        'Please select a work and its measurement period or musterroll.',
      );
      return;
    }

    navigation.navigate('Activity', {
      workCode: selectedRecord.work_code,
      workName: selectedRecord.work_name,
      musterType,
      msrNo: selectedRecord.MSR_No,
      dateFrom: selectedRecord.DT_From,
      dateTo: selectedRecord.DT_to,
    });
  };

  return (
    <ScreenWrapper>
      <SelectionHeader
        title=""
        subtitle=""
        icon="bar-chart"
        onBackPress={() => navigation.goBack()}
        onMenuPress={() => {}}
      />

      <View style={styles.card}>
        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}
        >
          BOOK DETAILS
        </AppText>

        <AppInput placeholder="Measurement Book No.*" leftIcon="book-outline" />

        <AppInput placeholder="Page No.*" leftIcon="document-text-outline" />

        <AppInput value={today} editable={false} leftIcon="calendar-outline" />

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}
        >
          WORK INFO
        </AppText>

        <AppSelect
          placeholder="Search With Work Code"
          leftIcon="search-outline"
          value={selectedWorkCode}
          onPress={() => {
            if (!loading) {
              setWorkSelectMode('CODE');
              setWorkSearch('');
              setWorkVisible(true);
            }
          }}
        />

        <AppSelect
          placeholder={loading ? 'Loading Works...' : 'Select Work*'}
          value={
            works.find(
              item =>
                item.workCode === selectedWorkCode &&
                item.record.MSR_No === selectedMsrNo,
            )
              ? `${
                  works.find(
                    item =>
                      item.workCode === selectedWorkCode &&
                      item.record.MSR_No === selectedMsrNo,
                  )?.record.work_name
                } (${selectedWorkCode})`
              : ''
          }
          leftIcon="briefcase-outline"
          onPress={() => {
            if (!loading) {
              setWorkSelectMode('NAME');
              setWorkVisible(true);
            }
          }}
        />

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}
        >
          MUSTERROLL TYPE
        </AppText>

        <View style={styles.radioRow}>
          <RadioButton
            label="Musterroll Period Wise"
            selected={musterType === 'PERIOD'}
            onPress={() => {
              setMusterType('PERIOD');
              setSelectedRecord(null);
            }}
          />

          <RadioButton
            label="Musterroll Wise"
            selected={musterType === 'WORKER'}
            onPress={() => {
              setMusterType('WORKER');
              setSelectedRecord(null);
            }}
          />
        </View>

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}
        >
          {musterType === 'PERIOD' ? 'PERIOD' : 'MUSTERROLL'}
        </AppText>

        <AppSelect
          placeholder={
            musterType === 'PERIOD'
              ? 'Select Measurement Period*'
              : 'Select MSR No.*'
          }
          value={
            selectedRecord
              ? musterType === 'PERIOD'
                ? `${formatDate(selectedRecord.DT_From)} - ${formatDate(
                    selectedRecord.DT_to,
                  )}`
                : selectedRecord.MSR_No
              : ''
          }
          leftIcon="time-outline"
          onPress={() => {
            if (!selectedWorkCode) {
              Alert.alert('Required', 'Please select a work first.');
              return;
            }

            if (musterType === 'PERIOD') {
              setPeriodVisible(true);
            } else {
              setMsrVisible(true);
            }
          }}
        />

        <AppButton
          title="Submit"
          style={styles.button}
          onPress={handleSubmit}
        />
      </View>

      <AppSelectModal
        visible={workVisible}
        title="Select Work"
        data={
          workSelectMode === 'CODE' ? filteredWorksByCode : filteredWorksByName
        }
        onClose={() => {
          setWorkVisible(false);
          setWorkSearch('');
        }}
        onSelect={handleSelectWork}
      />

      <AppSelectModal
        visible={periodVisible}
        title="Select Measurement Period"
        data={periods}
        onClose={() => setPeriodVisible(false)}
        onSelect={handleSelectRecord}
      />

      <AppSelectModal
        visible={msrVisible}
        title="Select Musterroll No."
        data={musterrolls}
        onClose={() => setMsrVisible(false)}
        onSelect={handleSelectRecord}
      />
    </ScreenWrapper>
  );
};

export default MeasurementBook;

const styles = StyleSheet.create({
  card: {
    marginTop: -35,
    marginHorizontal: 14,
    backgroundColor: '#FFF',
    borderRadius: 32,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 18,
    elevation: 8,
    marginBottom: 20,
  },

  heading: {
    letterSpacing: 2,
    marginTop: 16,
    marginBottom: 10,
  },

  radioRow: {
    flexDirection: 'column',
    marginTop: 8,
  },

  button: {
    marginTop: 25,
  },
});
