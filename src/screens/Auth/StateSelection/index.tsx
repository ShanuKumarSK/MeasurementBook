import React, { useMemo, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  ScreenWrapper,
  SearchBar,
  AppText,
  SelectionHeader,
} from '../../../components/common';
import theme from '../../../theme';

const STATES = [
  { id: 1, name: 'ANDAMAN\nAND NICOBAR' },
  { id: 2, name: 'ANDHRA PRADESH' },
  { id: 3, name: 'ARUNACHAL\nPRADESH' },
  { id: 4, name: 'ASSAM' },
  { id: 5, name: 'BIHAR' },
  { id: 6, name: 'GUJARAT' },
  { id: 7, name: 'GOA' },
  { id: 8, name: 'JHARKHAND' },
];

const StateSelection = ({ navigation, route }: any) => {

  const { role } = route.params;

  const [search, setSearch] = useState('');

  const filteredStates = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return STATES;
    }

    return STATES.filter(item =>
      item.name.replace(/\n/g, ' ').toLowerCase().includes(keyword),
    );
  }, [search]);

  return (

    <ScreenWrapper scroll={false}>

      <SelectionHeader
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.card}>

        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Search State / UT"
        />

        <FlatList
          data={filteredStates}
          extraData={search}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.stateCard}
              onPress={() =>
                navigation.replace('Login', {
                  role,
                  state: item,
                })
              }>

              <AppText
                weight="700"
                color="primary"
                style={styles.stateName}>
                {item.name}
              </AppText>

            </TouchableOpacity>

          )}
        />

      </View>

    </ScreenWrapper>

  );
};

export default StateSelection;

const styles = StyleSheet.create({

  card: {

    marginTop: -35,

    marginHorizontal: 14,

    backgroundColor: theme.colors.white,

    borderRadius: 32,

    padding: 18,

    paddingBottom: 10,

    flex: 1,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 8,
    },

    shadowOpacity: 0.08,

    shadowRadius: 18,

    elevation: 8,

  },

  list: {

    paddingTop: 16,

    paddingBottom: 20,

  },

  row: {

    justifyContent: 'space-between',

    marginBottom: 14,

  },

  stateCard: {

    width: '48%',

    height: 74,

    borderWidth: 1,

    borderColor: '#E5E5E5',

    borderRadius: 18,

    justifyContent: 'center',

    alignItems: 'center',

    backgroundColor: '#FFF',

  },

  stateName: {

    textAlign: 'center',

    fontSize: 16,

    lineHeight: 22,

    paddingHorizontal: 8,

  },

});