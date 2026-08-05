import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';

import AppText from '../AppText';
import theme from '../../../theme';

interface Props {
  label: string;
  selected?: boolean;
  onPress?: () => void;
}

const RadioButton = ({
  label,
  selected,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={onPress}>

      <View
        style={[
          styles.outer,
          selected && styles.outerSelected,
        ]}>
        {selected && <View style={styles.inner} />}
      </View>

      <AppText>{label}</AppText>

    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({

  row:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:20,
    marginBottom:10,
  },

  outer:{
    width:22,
    height:22,
    borderRadius:11,
    borderWidth:2,
    borderColor:theme.colors.primary,
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
  },

  outerSelected:{
    borderColor:theme.colors.primary,
  },

  inner:{
    width:10,
    height:10,
    borderRadius:5,
    backgroundColor:theme.colors.primary,
  },

});