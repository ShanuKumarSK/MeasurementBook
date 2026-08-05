import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import Splash from '../screens/Splash';
import ChooseRole from '../screens/Auth/ChooseRole';
import Login from '../screens/Auth/Login';
import StateSelection from '../screens/Auth/StateSelection';
import MeasurementBook from '../screens/MeasurementBook';
import Activity from '../screens/Activity';

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

      <Stack.Screen
        name="MeasurementBook"
        component={MeasurementBook}
      />

      <Stack.Screen
        name="Activity"
        component={Activity}
      />

    </Stack.Navigator>
  );
};

export default AuthNavigator;