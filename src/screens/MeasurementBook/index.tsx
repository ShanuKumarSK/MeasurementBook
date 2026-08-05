 import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  ScreenWrapper,
  SelectionHeader,
  AppInput,
  AppText,
  AppButton,
  RadioButton,
} from '../../components/common';

import theme from '../../theme';

const WORKS = [
  'Road Construction',
  'Drain Construction',
  'PCC Road',
];

const PERIODS = [
  'April 2026',
  'May 2026',
];

const MeasurementBook = ({ navigation }: any) => {

  const today = new Date().toLocaleDateString('en-GB');

  const [musterType, setMusterType] = useState<'PERIOD' | 'WORKER'>('PERIOD');

  return (
    <ScreenWrapper>

      <SelectionHeader
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.card}>

        {/* BOOK DETAILS */}

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}>
          BOOK DETAILS
        </AppText>

        <AppInput
          placeholder="Measurement Book No.*"
          leftIcon="book-outline"
        />

        <AppInput
          placeholder="Page No.*"
          leftIcon="document-text-outline"
        />

        <AppInput
          value={today}
          editable={false}
          leftIcon="calendar-outline"
        />

        {/* WORK INFO */}

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}>
          WORK INFO
        </AppText>

        <AppInput
          placeholder="Search With Work Code"
          leftIcon="search-outline"
        />

        <AppInput
          placeholder="Select Work*"
          leftIcon="briefcase-outline"
          rightIcon="chevron-down-outline"
        />

        {/* MUSTERROLL */}

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}>
          MUSTERROLL TYPE
        </AppText>

        <View style={styles.radioRow}>

          <RadioButton
            label="Musterroll Period Wise"
            selected={musterType === 'PERIOD'}
            onPress={() => setMusterType('PERIOD')}
          />

          <RadioButton
            label="Musterroll Worker Wise"
            selected={musterType === 'WORKER'}
            onPress={() => setMusterType('WORKER')}
          />

        </View>

        {/* PERIOD */}

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}>
          PERIOD
        </AppText>

        <AppInput
          placeholder="Select Measurement Period*"
          leftIcon="time-outline"
          rightIcon="chevron-down-outline"
        />

        <AppButton
          title="Submit"
          style={styles.button}
          onPress={() =>
            navigation.navigate('Activity')
          }
        />

      </View>

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

    shadowOffset: {
      width: 0,
      height: 8,
    },

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

    justifyContent: 'space-between',

    flexWrap: 'nowrap',

    marginTop: 8,

  },

  button: {

    marginTop: 25,

  },

});