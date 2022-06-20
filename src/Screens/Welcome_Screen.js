import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Home_Screen';
// import ExpenseClaim from './Claims/Expense';
// import OPDClaim from './Claims/OPD';
// import RandRClaim from './Claims/RandR';


import Expense_Claim from './Claims/User/Expense Claim/ExpenseClaim';
import OPD from './Claims/User/OPD/OPD';
import RAndR from './Claims/User/R&R/R&R';
import AddNewE_Claim from './Claims/User/Expense Claim/AddNewEC';
// import Add_OPD2 from './Claims/User/OPD/AddNewOPD2';
//import Add_OPD from './Claims/User/OPD/AddNewOPD';
// import AddNew_RAndR from './Claims/User/R&R/AddNewR&R';
import AddNewE_Claim2 from './Claims/User/Expense Claim/AddNewEC2';


const Stack = createNativeStackNavigator();

export default function WelcomeScreen({navigation}) {
    return (
        <NavigationContainer independent={true}>
  
        <Stack.Navigator
            screenOptions = {{
            header: () => null
            }}
        >
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
            />


            {/* <Stack.Screen 
              name="Screen-Login" 
              component={LoginScreen} 
            /> */}

            <Stack.Screen
                name="Expense Claim"
                component={Expense_Claim}
            />
            <Stack.Screen
                name="OPD"
                component={OPD}
            />
            <Stack.Screen
                name="Reward And Recognition"
                component={RAndR}
            />
             <Stack.Screen
                name="Add a new claim"
                component={AddNewE_Claim}
            />
           <Stack.Screen
                name="View the new claim"
                component={AddNewE_Claim2}
            />
             {/* <Stack.Screen
                name="Claim a new OPD"
                component={Add_OPD}
            /> */}
            {/*<Stack.Screen
                name="Add new R And R"
                component={AddNew_RAndR}
            />
            <Stack.Screen
                name="Edit"
                component={AddNewE_Claim2}
            /> */}


  
        </Stack.Navigator>
  
      </NavigationContainer>
    );
    
}



