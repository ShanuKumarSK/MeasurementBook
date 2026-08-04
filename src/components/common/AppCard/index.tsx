import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

import theme from '../../../theme';

interface Props {
  children: React.ReactNode;

  style?: StyleProp<ViewStyle>;
}

const AppCard = ({
  children,
  style,
}: Props) => {
  return (
    <View
      style={[
        styles.card,
        style,
      ]}>
      {children}
    </View>
  );
};

export default AppCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,

    borderRadius: theme.radius.xl,

    padding: theme.spacing.lg,

    ...theme.shadows.card,
  },
});