import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../AppText';
import theme from '../../../theme';

interface Props {
  title: string;
  subtitle: string;
  icon?: string;
  onBackPress: () => void;
  onMenuPress?: () => void;
}

const SelectionHeader = ({
  title,
  subtitle,
  icon = 'stats-chart',
  onBackPress,
  onMenuPress,
}: Props) => {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.header}>

        <View style={styles.circleLeft} />
        <View style={styles.circleRight} />

        {/* Top Row */}

        <View style={styles.topRow}>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onBackPress}>

            <Ionicons
              name="chevron-back"
              size={28}
              color="#FFF"
            />

          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onMenuPress}>

            <Ionicons
              name="menu"
              size={24}
              color="#FFF"
            />

          </TouchableOpacity>

        </View>

        {/* Icon */}

        <View style={styles.logoContainer}>

          <Ionicons
            name={icon as any}
            size={34}
            color={theme.colors.primary}
          />

        </View>

        <AppText
          variant="h3"
          weight="700"
          color="white"
          align="center">

          {title}

        </AppText>

        <AppText
          variant="caption"
          color="white"
          align="center"
          style={styles.subtitle}>

          {subtitle}

        </AppText>

      </View>
    </View>
  );
};

export default SelectionHeader;

const styles = StyleSheet.create({

  header: {

    height: 200,

    backgroundColor: theme.colors.primary,

    paddingTop: 50,

    alignItems: 'center',

    overflow: 'hidden',

  },

  topRow: {

    position: 'absolute',

    top: 50,

    left: 16,

    right: 16,

    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    zIndex: 100,

  },

  logoContainer: {

    width: 72,

    height: 72,

    borderRadius: 36,

    backgroundColor: 'rgba(255,255,255,0.15)',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 12,

  },

  subtitle: {

    opacity: 0.85,

    marginTop: 4,

  },

  circleLeft: {

    position: 'absolute',

    width: 150,

    height: 150,

    borderRadius: 75,

    backgroundColor: 'rgba(255,255,255,0.08)',

    left: -60,

    top: 60,

  },

  circleRight: {

    position: 'absolute',

    width: 220,

    height: 220,

    borderRadius: 110,

    backgroundColor: 'rgba(255,255,255,0.08)',

    right: -70,

    top: -20,

  },

});