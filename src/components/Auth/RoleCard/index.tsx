import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import type { ComponentProps } from 'react';

import AppText from '../../common/AppText';
import theme from '../../../theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface Props {
  title: string;

  icon: IconName;

  onPress: () => void;
}

const RoleCard = ({
  title,
  icon,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={onPress}>
      <View style={styles.iconBox}>
        <Ionicons
          name={icon}
          size={36}
          color={theme.colors.primary}
        />
      </View>

      <AppText
        variant="bodyLarge"
        weight="700"
        align="center">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default RoleCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,

    borderRadius: 18,

    paddingVertical: 22,

    alignItems: 'center',

    marginBottom: 18,

    ...theme.shadows.card,
  },

  iconBox: {
    width: 70,

    height: 70,

    borderRadius: 35,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: theme.colors.lightGreen,

    marginBottom: 12,
  },
});