import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import theme from '../../../theme';

interface Props{

    children:React.ReactNode;

}

const AppContainer=({children}:Props)=>{

    return(

        <View style={styles.container}>

            {children}

        </View>

    );

};

export default AppContainer;

const styles=StyleSheet.create({

    container:{

        flex:1,

        paddingHorizontal:20,

        marginTop:20

    }

});