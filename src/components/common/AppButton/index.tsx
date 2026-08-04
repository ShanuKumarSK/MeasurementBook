import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from 'react-native';

import AppText from '../AppText';
import theme from '../../../theme';

type Variant = 'primary' | 'secondary' | 'outline';

interface Props {
  title: string;
  onPress: () => void;

  variant?: Variant;

  loading?: boolean;

  disabled?: boolean;

  style?: StyleProp<ViewStyle>;
}

const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  style,
}: Props) => {
  const backgroundColor = () => {
    switch (variant) {
      case 'secondary':
        return theme.colors.secondary;

      case 'outline':
        return theme.colors.white;

      default:
        return theme.colors.primary;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled || loading}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor(),
          borderWidth: variant === 'outline' ? 1.5 : 0,
          borderColor:
            variant === 'outline'
              ? theme.colors.primary
              : 'transparent',
        },
        disabled && styles.disabled,
        style,
      ]}>
      {loading ? (
        <ActivityIndicator color={theme.colors.white} />
      ) : (
        <AppText
          variant="bodyLarge"
          weight="700"
          color={variant === 'outline' ? 'primary' : 'white'}>
          {title}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.lg,
    ...theme.shadows.button,
  },

  disabled: {
    opacity: 0.5,
  },
});