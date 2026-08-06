import React, { useMemo, useState } from 'react';
import {
  Modal,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppInput from '../AppInput';
import AppText from '../AppText';
import theme from '../../../theme';

interface Item {
  id: number;
  name: string;
}

interface Props {
  visible: boolean;
  title: string;
  data: Item[];

  onClose: () => void;

  onSelect: (item: Item) => void;
}

const AppSelectModal = ({
  visible,
  title,
  data,
  onClose,
  onSelect,
}: Props) => {

  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {

    return data.filter(item =>
      item.name
        .toLowerCase()
        .includes(search.toLowerCase()),
    );

  }, [search, data]);

  return (

    <Modal
      visible={visible}
      transparent
      animationType="fade">

      <View style={styles.overlay}>

        <View style={styles.container}>

          <View style={styles.header}>

            <AppText
              weight="700"
              variant="h4">

              {title}

            </AppText>

            <TouchableOpacity onPress={onClose}>

              <Ionicons
                name="close"
                size={24}
                color="#444"
              />

            </TouchableOpacity>

          </View>

          <AppInput
            placeholder="Search..."
            leftIcon="search-outline"
            value={search}
            onChangeText={setSearch}
          />

          <FlatList
            data={filtered}
            keyExtractor={item => item.id.toString()}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (

              <TouchableOpacity
                style={styles.item}
                onPress={() => {

                  onSelect(item);

                  onClose();

                }}>

                <AppText>
                  {item.name}
                </AppText>

              </TouchableOpacity>

            )}
          />

        </View>

      </View>

    </Modal>

  );

};

export default AppSelectModal;

const styles = StyleSheet.create({

  overlay:{

    flex:1,

    backgroundColor:'rgba(0,0,0,0.45)',

    justifyContent:'center',

    padding:20,

  },

  container:{

    backgroundColor:'#FFF',

    borderRadius:18,

    maxHeight:'70%',

    padding:18,

  },

  header:{

    flexDirection:'row',

    justifyContent:'space-between',

    alignItems:'center',

    marginBottom:16,

  },

  item:{

    height:52,

    justifyContent:'center',

    borderBottomWidth:1,

    borderColor:'#EEE',

  },

});