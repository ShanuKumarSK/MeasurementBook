import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';
import type { ComponentProps } from 'react';
import AppText from '../AppText';
import theme from '../../../theme';

type IconName = ComponentProps<typeof Ionicons>['name'];

interface Props extends TextInputProps {
  label?: string;

  error?: string;

  required?: boolean;

  leftIcon?: IconName;

  rightIcon?: IconName;

  password?: boolean;

  rightText?: string;

  onPress?: () => void;
}

const AppInput = ({
  label,
  error,
  required = false,
  leftIcon,
  rightIcon,
  password = false,
  rightText,
  style,
  onPress,
  ...props
}: Props) => {
  const [hidePassword, setHidePassword] = useState(password);

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={!onPress}
      onPress={onPress}>
      <View style={styles.container}>
        {label && (
          <View style={styles.labelContainer}>
            <AppText variant="bodySmall" weight="600">
              {label}
            </AppText>

            {required && (
              <AppText color="error" weight="700">
                {' '}
                *
              </AppText>
            )}
          </View>
        )}

        <View
          style={[
            styles.inputContainer,
            error && {
              borderColor: theme.colors.error,
            },
          ]}>
          {leftIcon && (
            <Ionicons
              name={leftIcon}
              size={20}
              color={theme.colors.textSecondary}
              style={styles.icon}
            />
          )}

          <TextInput
            placeholderTextColor={theme.colors.placeholder}
            secureTextEntry={hidePassword}
            style={[styles.input, style]}
            {...props}
          />

          {password ? (
            <TouchableOpacity
              onPress={() => setHidePassword(!hidePassword)}>
              <Ionicons
                name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                size={22}
                color={theme.colors.textSecondary}
              />
            </TouchableOpacity>
          ) : (<>
            {rightText ? (
              <AppText
                variant="body"
                weight="600"
                color="primary"
                style={styles.rightText}>
                {rightText}
              </AppText>
            ) : rightIcon ? (
              <Ionicons
                name={rightIcon}
                size={22}
                color={theme.colors.textSecondary}
              />
            ) : null}
          </>
          )}
        </View>

        {!!error && (
          <AppText
            variant="caption"
            color="error"
            style={styles.error}>
            {error}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppInput;

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
    borderRadius: theme.radius.lg,
    backgroundColor: '#F8F9FB',
    borderWidth: 1,
    borderColor: '#ECECEC',
    paddingHorizontal: 15,
    height: 54,
  },

  input: {
    flex: 1,

    color: theme.colors.textPrimary,

    fontSize: theme.typography.body,
  },

  icon: {
    marginRight: 10,
  },

  error: {
    marginTop: 4,
    marginLeft: 2,
  },
  rightText: {
    color: theme.colors.primary,
    fontWeight: '600',
  }
});