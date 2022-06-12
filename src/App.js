// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login_Screen';
import SignUpScreen from './SignUp_Screen';
import WelcomeScreen from './Welcome_Screen';
import ForgetPass1Screen from './ForgetPass1_Screen';
import ForgetPass2Screen from './ForgetPass2_Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
      // screenOptions = {{
      //   header: () => null
      // }}
      >

        <Stack.Screen 
          name="Screen-Login" 
          component={LoginScreen} 
          // options = {{
          //   header: () => null
          // }}
        />

        <Stack.Screen 
          name="Screen-SignUp" 
          component={SignUpScreen} 
        />

        <Stack.Screen 
          name="Screen-Welcome" 
          component={WelcomeScreen} 
        />

        <Stack.Screen 
          name="Screen-ForgetPass1" 
          component={ForgetPass1Screen} 
        />

        
        <Stack.Screen 
          name="Screen-ForgetPass2" 
          component={ForgetPass2Screen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;