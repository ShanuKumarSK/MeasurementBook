// import React from 'react';
// import {
//   TouchableOpacity,
//   View,
//   StyleSheet,
// } from 'react-native';

// import Ionicons from '@react-native-vector-icons/ionicons';

// import AppText from '../AppText';
// import theme from '../../../theme';
// import { IconName } from '../../../types/common';

// interface Props {
//   title: string;
//   subtitle?: string;
//   icon: IconName;
//   onPress: () => void;
// }

// const SelectionCard = ({
//   title,
//   subtitle,
//   icon,
//   onPress,
// }: Props) => {
//   return (
//     <TouchableOpacity
//       activeOpacity={0.8}
//       style={styles.container}
//       onPress={onPress}>

//       <View style={styles.leftSection}>

//         <View style={styles.iconContainer}>
//           <Ionicons
//             name={icon}
//             size={28}
//             color={theme.colors.primary}
//           />
//         </View>

//         <View style={styles.textSection}>

//           <AppText
//             variant="bodyLarge"
//             weight="700">
//             {title}
//           </AppText>

//           {!!subtitle && (
//             <AppText
//               variant="caption"
//               color="textSecondary"
//               style={styles.subtitle}>
//               {subtitle}
//             </AppText>
//           )}

//         </View>

//       </View>

//       <Ionicons
//         name="chevron-forward"
//         size={24}
//         color="#BDBDBD"
//       />

//     </TouchableOpacity>
//   );
// };

// export default SelectionCard;

// const styles = StyleSheet.create({

//   container:{

//     backgroundColor:theme.colors.white,

//     borderRadius:18,

//     padding:18,

//     marginBottom:16,

//     flexDirection:'row',

//     alignItems:'center',

//     justifyContent:'space-between',

//     ...theme.shadows.card

//   },

//   leftSection:{

//     flexDirection:'row',

//     alignItems:'center',

//     flex:1

//   },

//   iconContainer:{

//     width:58,

//     height:58,

//     borderRadius:29,

//     justifyContent:'center',

//     alignItems:'center',

//     backgroundColor:theme.colors.lightGreen,

//     marginRight:16

//   },

//   textSection:{

//     flex:1

//   },

//   subtitle:{

//     marginTop:4

//   }

// });






import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import Ionicons from '@react-native-vector-icons/ionicons';

import AppText from '../AppText';
import theme from '../../../theme';
import { IconName } from '../../../types/common';

interface Props {
  title: string;
  subtitle?: string;
  icon: IconName;
  onPress: () => void;
}

const SelectionCard = ({
  title,
  subtitle,
  icon,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={styles.container}>

      <View style={styles.leftContainer}>

        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={30}
            color={theme.colors.primary}
          />
        </View>

        <View style={styles.textContainer}>
          <AppText
            variant="bodyLarge"
            weight="700">
            {title}
          </AppText>

          {!!subtitle && (
            <AppText
              variant="caption"
              color="textSecondary"
              style={styles.subtitle}>
              {subtitle}
            </AppText>
          )}
        </View>

      </View>

      <Ionicons
        name="chevron-forward"
        size={24}
        color="#BDBDBD"
      />

    </TouchableOpacity>
  );
};

export default SelectionCard;

const styles = StyleSheet.create({

  container:{

    flexDirection:'row',

    alignItems:'center',

    justifyContent:'space-between',

    backgroundColor: theme.colors.background,

    borderRadius:16,

    paddingHorizontal:14,

    paddingVertical:14,

    marginBottom:14,

    borderWidth:1,

    borderColor: '#E5E7EB',

  },

  leftContainer:{

    flexDirection:'row',

    alignItems:'center',

    flex:1

  },

  iconContainer:{

    width:58,

    height:58,

    borderRadius:13,

    backgroundColor:'#EAF8F2',

    justifyContent:'center',

    alignItems:'center',

    marginRight:16

  },

  textContainer:{

    flex:1

  },

  subtitle:{

    marginTop:4

  }

});