import React from 'react';
import {
  Text,
  TextProps,
  StyleSheet,
  TextStyle,
  StyleProp,
} from 'react-native';

import theme from '../../../theme';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'bodyLarge'
  | 'body'
  | 'bodySmall'
  | 'caption'
  | 'tiny';

interface Props extends TextProps {
  children: React.ReactNode;

  variant?: Variant;

  color?: keyof typeof theme.colors;

  weight?:
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | 'bold'
    | 'normal';

  align?: TextStyle['textAlign'];

  style?: StyleProp<TextStyle>;

  numberOfLines?: number;
}

const AppText = ({
  children,
  variant = 'body',
  color = 'textPrimary',
  weight = '400',
  align = 'left',
  style,
  ...rest
}: Props) => {
  return (
    <Text
      {...rest}
      style={[
        styles.text,
        {
          fontSize: theme.typography[variant],
          color: theme.colors[color],
          fontWeight: weight,
          textAlign: align,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
});