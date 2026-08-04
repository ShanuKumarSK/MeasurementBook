import React, { ComponentProps } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import AppText from '../AppText';
import theme from '../../../theme';
import { IconName } from '../../../types/common';


interface Props {
  title: string;

  subtitle?: string;

  showBack?: boolean;

  showMenu?: boolean;

  headerIcon?: IconName;

  onBackPress?: () => void;

  onMenuPress?: () => void;
}

const AppHeader = ({
  title,
  subtitle,
  showBack = false,
  showMenu = false,
  headerIcon,
  onBackPress,
  onMenuPress,
}: Props) => {
  return (
    <View style={styles.container}>
      {/* Background Circle */}

      <View style={styles.circle1} />

      <View style={styles.circle2} />

      <View style={styles.row}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onBackPress}>
          {showBack && (
            <Ionicons
              name="arrow-back"
              size={22}
              color={theme.colors.white}
            />
          )}
        </TouchableOpacity>

        <View style={styles.center}>
          <View style={styles.logoCircle}>
            <Ionicons
              name={headerIcon ?? 'document-text-outline'}
              size={34}
              color={theme.colors.primary}
            />
          </View>

          <AppText
            variant="h4"
            weight="700"
            color="white"
            align="center">
            {title}
          </AppText>

          {!!subtitle && (
            <AppText
              variant="caption"
              color="white"
              align="center">
              {subtitle}
            </AppText>
          )}
        </View>

        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onMenuPress}>
          {showMenu && (
            <Ionicons
              name="menu"
              size={24}
              color={theme.colors.white}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,

    paddingTop: 18,

    paddingBottom: 40,

    borderBottomLeftRadius: 30,

    borderBottomRightRadius: 30,

    overflow: 'hidden',
  },

  row: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    paddingHorizontal: 20,
  },

  center: {
    flex: 1,

    alignItems: 'center',
  },

  logoCircle: {
    width: 72,

    height: 72,

    borderRadius: 36,

    backgroundColor: '#ffffff',

    justifyContent: 'center',

    alignItems: 'center',

    marginBottom: 12,
  },

  iconContainer: {
    width: 40,

    alignItems: 'center',
  },

  circle1: {
    position: 'absolute',

    width: 180,

    height: 180,

    borderRadius: 90,

    backgroundColor: 'rgba(255,255,255,0.08)',

    top: -70,

    right: -40,
  },

  circle2: {
    position: 'absolute',

    width: 130,

    height: 130,

    borderRadius: 65,

    backgroundColor: 'rgba(255,255,255,0.06)',

    bottom: -40,

    left: -30,
  },
});