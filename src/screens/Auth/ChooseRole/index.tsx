import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import {
  ScreenWrapper,
  SelectionCard,
  AppText,
} from '../../../components/common';

import AuthHeader from '../../../components/common/AuthHeader';
import { RoleItem } from '../../../types/auth';
import theme from '../../../theme';
import Ionicons from '@react-native-vector-icons/ionicons';

const ROLES: RoleItem[] = [
  {
    id: '1',
    title: 'Block Login',
    subtitle: 'For Block level officers',
    icon: 'business-outline',
    role: 'BLOCK',
  },
  {
    id: '2',
    title: 'Panchayat Login',
    subtitle: 'For Panchayat representatives',
    icon: 'home-outline',
    role: 'PANCHAYAT',
  },
  {
    id: '3',
    title: 'Agency Login',
    subtitle: 'For registered agencies',
    icon: 'briefcase-outline',
    role: 'AGENCY',
  },
];

const ChooseRole = ({ navigation }: any) => {
  return (
    <ScreenWrapper scroll={false}>

      <AuthHeader
        title="Choose Role"
        subtitle="Select your login type to continue"
        icon="leaf-outline"
      />

      <View style={styles.bottomCard}>

        <AppText
          variant="caption"
          weight="600"
          color="textSecondary"
          style={styles.heading}>
          SELECT LOGIN TYPE
        </AppText>

        <FlatList
          data={ROLES}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <SelectionCard
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
              onPress={() =>
                navigation.navigate('Login', {
                  role: item.role,
                })
              }
            />
          )}
        />

        <View style={styles.footer}>

          <View style={styles.footerTop}>

            <AppText
              variant="caption"
              color="textSecondary">
              secured by Password
            </AppText>

            <View style={styles.line} />

          </View>

          <View style={styles.footerBottom}>

            <Ionicons
              name="shield-checkmark"
              size={16}
              color={theme.colors.primary}
            />

            <AppText
              variant="body"
              style={styles.footerText}>
              Secure government portal access
            </AppText>

          </View>

        </View>

      </View>

    </ScreenWrapper>
  );
};

export default ChooseRole;

const styles = StyleSheet.create({
  bottomCard: {

    marginTop: -25,

    marginHorizontal: 14,   // 👈 Add this

    backgroundColor: theme.colors.white,

    borderTopLeftRadius: 34,

    borderTopRightRadius: 34,

    borderBottomLeftRadius: 34,   // 👈 Add this

    borderBottomRightRadius: 34,  // 👈 Add this

    paddingHorizontal: 18,

    paddingTop: 22,

    paddingBottom: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 18,

    elevation: 8,

  },

  heading: {
    letterSpacing: 2,
    marginBottom: 20,
  },

  footer: {
    marginTop: 8,
  },

  footerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E6E6E6',
    marginLeft: 10,
  },

  footerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },

  footerText: {
    marginLeft: 8,
  },
});