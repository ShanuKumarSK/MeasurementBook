import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Splash from '../screens/Splash';
import ChooseRole from '../screens/Auth/ChooseRole';
import Login from '../screens/Auth/Login';
import StateSelection from '../screens/Auth/StateSelection';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen
        name="Splash"
        component={Splash}
      />

      <Stack.Screen
        name="ChooseRole"
        component={ChooseRole}
      />

      <Stack.Screen
        name="StateSelection"
        component={StateSelection}
      />

      <Stack.Screen
        name="Login"
        component={Login}
      />

    </Stack.Navigator>
  );
};

export default AuthNavigator;