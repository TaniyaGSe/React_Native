import * as React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './Screens/Login_Screen';
import SignUpScreen from './Screens/SignUp_Screen';
import WelcomeScreen from './Screens/Welcome_Screen';
import ForgetPass1Screen from './Screens/ForgetPass1_Screen';
import ForgetPass2Screen from './Screens/ForgetPass2_Screen';
import NotificationScreen from './Screens/Notification';
import SettingScreen from './Screens/Settings';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer independent={true}>

      <Stack.Navigator
      screenOptions = {{
        header: () => null
      }}

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
          component={Home} 
          
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

const Tab = createBottomTabNavigator();

function Home({navigation}){
    return (
        <NavigationContainer independent={true}>
          <Tab.Navigator
            screenOptions={ ({route}) => ({
            tabBarIcon: ({focused,size,color})=> {
              let iconName 
              
              if(route.name === 'Screen-Notifications'){ 
                iconName = 'bell';
                size= focused ? 25 : 20;   
              }else if (route.name === 'Screen-Welcome'){
                iconName = 'house';
                size= focused ? 25 : 20;
              }else if (route.name === 'Screen-Settings'){
                iconName = 'fa-solid fa-gear';
                size= focused ? 25 : 20;
              }
    
              return( 
                <FontAwesome5
                name={iconName} 
                size={size}
                color={color}
                />
              )
            }
          })} 
    
          tabBarOptions ={{
            activeTintColor: '#f0f',
            inactiveTintColor: '#555',
            activeBackgroundColor:'#999',
            inactiveBackgroundColor:'#fff',
            showLabel:false, 
            labelStyle: {fontSize: 14}    
          }}
    
          >
            <Tab.Screen 
              name="Screen-Welcome" 
              component={WelcomeScreen} 
            />
            <Tab.Screen 
              name="Screen-Notifications" 
              component={NotificationScreen} 
            />
            
            <Tab.Screen 
              name="Screen-Settings" 
              component={SettingScreen} 
            />
          </Tab.Navigator>
        </NavigationContainer>
      );
  }
export default App;

