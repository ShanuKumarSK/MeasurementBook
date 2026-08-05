import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import { AppText } from '../../common';
import theme from '../../../theme';

interface Props {
  label: string;
  value: string | number;
  valueColor?: string;
}

const InfoRow = ({
  label,
  value,
  valueColor = theme.colors.textPrimary,
}: Props) => {
  return (
    <View style={styles.row}>

      <AppText
        weight="600"
        style={styles.label}>
        {label}
      </AppText>

      <AppText
        weight="500"
        style={[
          styles.value,
          { color: valueColor },
        ]}>
        {value}
      </AppText>

    </View>
  );
};

export default InfoRow;

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 10,

    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },

  label: {
    fontSize: 14,
    color: '#222',
    flex: 1,
  },

  value: {
    fontSize: 14,
    flex: 1,
    textAlign: 'right',
  },

});