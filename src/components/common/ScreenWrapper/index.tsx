import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  StatusBar,
  ViewStyle,
  StyleProp,
  View,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import theme from '../../../theme';

interface Props {
  children: React.ReactNode;
  scroll?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ScreenWrapper = ({
  children,
  scroll = true,
  style,
}: Props) => {

  return (

    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={styles.safeArea}>

      <StatusBar
        backgroundColor={theme.colors.primary}
        barStyle="light-content"
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }>

        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}>

          {scroll ? (

            <ScrollView
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[
                styles.container,
                style,
              ]}>

              {children}

            </ScrollView>

          ) : (

            <View
              style={[
                styles.flex,
                style,
              ]}>

              {children}

            </View>

          )}

        </TouchableWithoutFeedback>

      </KeyboardAvoidingView>

    </SafeAreaView>

  );

};

export default ScreenWrapper;

const styles = StyleSheet.create({

  safeArea: {

    flex:1,

    backgroundColor:theme.colors.background,

  },

  flex:{

    flex:1,

  },

  container:{

    flexGrow:1,

    paddingBottom:30,

  },

});