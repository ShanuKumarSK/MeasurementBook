import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import type { ComponentProps } from 'react';

import AppText from '../AppText';
import theme from '../../../theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  leftIcon?: IconName;
  onPress: () => void;
}

const AppSelect = ({
  label,
  value,
  placeholder,
  error,
  required = false,
  leftIcon,
  onPress,
}: Props) => {
  return (
    <View style={styles.container}>

      {label && (
        <View style={styles.labelContainer}>

          <AppText
            variant="bodySmall"
            weight="600">

            {label}

          </AppText>

          {required && (
            <AppText
              color="error"
              weight="700">

              {' '}*

            </AppText>
          )}

        </View>
      )}

      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.inputContainer,
          error && {
            borderColor: theme.colors.error,
          },
        ]}
        onPress={onPress}>

        {leftIcon && (
          <Ionicons
            name={leftIcon}
            size={20}
            color={theme.colors.textSecondary}
            style={styles.icon}
          />
        )}

        <AppText
          style={[
            styles.value,
            !value && styles.placeholder,
          ]}>

          {value || placeholder}

        </AppText>

        <Ionicons
          name="chevron-down-outline"
          size={20}
          color={theme.colors.textSecondary}
        />

      </TouchableOpacity>

      {!!error && (
        <AppText
          variant="caption"
          color="error"
          style={styles.error}>

          {error}

        </AppText>
      )}

    </View>
  );
};

export default AppSelect;

const styles = StyleSheet.create({

  container: {
    marginBottom: theme.spacing.xs,
  },

  labelContainer: {
    flexDirection: 'row',
    marginBottom: 6,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    height: 54,

    borderRadius: theme.radius.lg,

    backgroundColor: '#F8F9FB',

    borderWidth: 1,

    borderColor: '#ECECEC',

    paddingHorizontal: 15,
  },

  icon: {
    marginRight: 10,
  },

  value: {
    flex: 1,
    fontSize: theme.typography.body,
    color: theme.colors.textPrimary,
  },

  placeholder: {
    color: theme.colors.placeholder,
  },

  error: {
    marginTop: 4,
    marginLeft: 2,
  },

});