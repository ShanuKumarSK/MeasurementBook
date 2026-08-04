import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../../components/common/AppText';
import theme from '../../theme';

const Splash = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('ChooseRole');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
  <>
    <StatusBar
      backgroundColor={theme.colors.primary}
      barStyle="light-content"
    />

    <View style={styles.container}>

      <View style={styles.circleTop} />

      <View style={styles.circleBottom} />

      <View style={styles.logoContainer}>

        <Ionicons
          name="document-text"
          size={72}
          color={theme.colors.primary}
        />

      </View>

      <AppText
        variant="h2"
        weight="700"
        color="white"
        align="center">
        MORD
      </AppText>

      <AppText
        variant="bodyLarge"
        color="white"
        align="center"
        style={styles.title}>
        Measurement Book
      </AppText>

      <AppText
        variant="caption"
        color="white"
        align="center"
        style={styles.subTitle}>
        Ministry of Rural Development
      </AppText>

      <View style={styles.footer}>

        <AppText
          variant="caption"
          color="white">
          Version 1.0.0
        </AppText>

      </View>

    </View>
  </>
);
};

export default Splash;

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:theme.colors.primary,
  },

  logoContainer:{
    width:130,
    height:130,
    borderRadius:65,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:28,
    elevation:8,
  },

  title:{
    marginTop:8,
  },

  subTitle:{
    marginTop:10,
    opacity:0.85,
  },

  footer:{
    position:'absolute',
    bottom:35,
  },

  circleTop:{
    position:'absolute',
    top:-90,
    right:-60,
    width:240,
    height:240,
    borderRadius:120,
    backgroundColor:'rgba(255,255,255,0.08)',
  },

  circleBottom:{
    position:'absolute',
    bottom:-70,
    left:-50,
    width:190,
    height:190,
    borderRadius:95,
    backgroundColor:'rgba(255,255,255,0.06)',
  },

});