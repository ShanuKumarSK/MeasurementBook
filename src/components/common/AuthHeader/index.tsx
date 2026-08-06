import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../AppText';
import theme from '../../../theme';
import { IconName } from '../../../types/common';

interface Props {
  title: string;
  subtitle: string;
  icon: IconName;
}

const AuthHeader = ({
  title,
  subtitle,
  icon,
}: Props) => {
  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <View style={styles.header}>

        <View style={styles.circleLeft} />

        <View style={styles.circleRight} />

        <View style={styles.logoContainer}>
          <Ionicons
            name={icon}
            size={34}
            color={theme.colors.primary}
          />
        </View>

        <View style={styles.badge}>
          <AppText
            variant="caption"
            weight="600"
            color="white">
            MORD MEASUREMENT BOOK
          </AppText>
        </View>

        <AppText
          variant="h2"
          weight="700"
          color="white"
          align="center"
          style={styles.title}>
          {title}
        </AppText>

        <AppText
          variant="body"
          color="white"
          align="center"
          style={styles.subtitle}>
          {subtitle}
        </AppText>

      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({

  header:{

    paddingTop:50,

    height:340,

    backgroundColor:theme.colors.primary,

    alignItems:'center',

    justifyContent:'center',

    overflow:'hidden'

  },

  logoContainer:{

    width:92,

    height:92,

    borderRadius:46,

    backgroundColor:'rgba(255,255,255,0.15)',

    justifyContent:'center',

    alignItems:'center',

    marginBottom:18

  },

  badge:{

    backgroundColor:'rgba(255,255,255,0.15)',

    paddingHorizontal:18,

    paddingVertical:6,

    borderRadius:20,

    marginBottom:22

  },

  title:{

    fontSize:30,

  },

  subtitle:{

    marginTop:8,

    opacity:0.9

  },

  circleLeft:{

    position:'absolute',

    width:180,

    height:180,

    borderRadius:90,

    backgroundColor:'rgba(255,255,255,0.08)',

    left:-80,

    top:70

  },

  circleRight:{

    position:'absolute',

    width:220,

    height:220,

    borderRadius:110,

    backgroundColor:'rgba(255,255,255,0.08)',

    right:-70,

    top:-20

  }

});