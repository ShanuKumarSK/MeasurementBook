import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../../common/AppText';
import ActivityRow from '../ActivityRow';

import theme from '../../../theme';

const ActivityContainer = () => {

  const [expanded, setExpanded] = useState(true);

  return (

    <View style={styles.container}>

      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.8}
        onPress={() => setExpanded(!expanded)}>

        <View style={styles.left}>

          <Ionicons
            name="walk-outline"
            size={18}
            color="#FFF"
          />

          <AppText
            weight="700"
            color="white">

            Activity Component

          </AppText>

        </View>

      </TouchableOpacity>

      {expanded && (

        <View style={styles.body}>

          <ActivityRow
            title="1. Activity Component"
          />

          <ActivityRow
            title="2. Activity Component"
          />

        </View>

      )}

    </View>

  );

};

export default ActivityContainer;

const styles = StyleSheet.create({

  container: {

    backgroundColor: '#FFF',

    borderRadius: 18,

    overflow: 'hidden',

    elevation: 5,

    marginBottom: 18,

  },

  header: {

    height: 48,

    backgroundColor: '#22A06B',

    justifyContent: 'center',

    paddingHorizontal: 16,

  },

  left: {

    flexDirection: 'row',

    alignItems: 'center',

    gap: 10,

  },

  body: {

    padding: 12,

  },

});