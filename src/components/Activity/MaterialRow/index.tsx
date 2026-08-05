import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../../common/AppText';
import AppButton from '../../common/AppButton';

import InfoRow from '../InfoRow';

const MaterialRow = ({
  title,
}: {
  title: string;
}) => {

  const [expanded, setExpanded] = useState(false);

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.8}
        onPress={() => setExpanded(!expanded)}>

        <AppText
          color="white"
          weight="600">

          {title}

        </AppText>

        <Ionicons
          name={
            expanded
              ? 'chevron-up'
              : 'chevron-down'
          }
          size={18}
          color="#FFF"
        />

      </TouchableOpacity>

      {expanded && (

        <View style={styles.body}>

          <InfoRow
            label="S.No"
            value="1"
          />

          <InfoRow
            label="Material Code"
            value="MAT001"
          />

          <InfoRow
            label="Material Name"
            value="Cement"
          />

          <InfoRow
            label="Unit"
            value="Bag"
          />

          <InfoRow
            label="Total Qty"
            value="500"
          />

          <InfoRow
            label="Consumed Qty"
            value="120"
          />

          <InfoRow
            label="Remaining Qty"
            value="380"
          />

          <InfoRow
            label="Executing Qty"
            value="0"
          />

          <InfoRow
            label="Total Cost"
            value="0"
          />

          <AppButton
            title="Calculate"
            style={styles.button}
            onPress={() => {}}
          />

        </View>

      )}

    </View>

  );

};

export default MaterialRow;

const styles = StyleSheet.create({

  container: {

    marginBottom: 14,

  },

  header: {

    height: 44,

    backgroundColor: '#1976D2',

    borderRadius: 8,

    paddingHorizontal: 14,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

  },

  body: {

    backgroundColor: '#FFF',

    borderWidth: 1,

    borderColor: '#E6E6E6',

    borderTopWidth: 0,

    paddingHorizontal: 14,

    paddingVertical: 8,

  },

  button: {

    marginTop: 20,

  },

});