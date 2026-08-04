import React from 'react';
import { StyleSheet, View } from 'react-native';

import {
  ScreenWrapper,
  AppHeader,
} from '../../../components/common';

import RoleCard from '../../common/SelectionCard';

const ChooseRole = ({ navigation }: any) => {
  return (
    <ScreenWrapper>

      <AppHeader
        title="MORD Measurement Book"
        subtitle="Select Login Type"
      />

      <View style={styles.container}>

        <RoleCard
          title="Block Login"
          icon="business-outline"
          onPress={() =>
            navigation.navigate('State', {
              role: 'BLOCK',
            })
          }
        />

        <RoleCard
          title="Panchayat Login"
          icon="home-outline"
          onPress={() =>
            navigation.navigate('State', {
              role: 'PANCHAYAT',
            })
          }
        />

        <RoleCard
          title="Agency Login"
          icon="construct-outline"
          onPress={() =>
            navigation.navigate('State', {
              role: 'AGENCY',
            })
          }
        />

      </View>

    </ScreenWrapper>
  );
};

export default ChooseRole;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
});