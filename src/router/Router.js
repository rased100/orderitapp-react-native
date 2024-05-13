import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../components/Auth/LoginScreen';
import SignupScreen from '../components/Auth/SignupScreen';
import {ScrollView, Text, View} from 'react-native';

const Router = () => {
  const Stack = createNativeStackNavigator();
  // const PublicRoutes = () => (
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="SignupScreen"
  //       component={SignupScreen}
  //       options={{headerShown: false}}
  //     />
  //     <Stack.Screen
  //       name="LoginScreen"
  //       component={LoginScreen}
  //       options={{headerShown: false}}
  //     />
  //   </Stack.Navigator>
  // );
  return (
    <NavigationContainer>
      {/* <PublicRoutes /> */}
      <LoginScreen />
    </NavigationContainer>
  );
};

export default Router;
