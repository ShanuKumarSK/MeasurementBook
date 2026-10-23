import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChooseRole');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <Image
        source={require('../../assets/images/emb-logo.jpeg')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: '100%',
    height: 320,
  },
});