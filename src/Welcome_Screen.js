import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function WelcomeScreen({navigation}) {
    
    const onPressHandlerExpense = () => {
        navigation.navigate('Screen-Login');
      }
  
    const onPressHandlerOPD = () => {
      navigation.navigate('Screen-SignUp');
    }

    const onPressHandlerRandR = () => {
        navigation.navigate('Screen-SignUp');
      }
  
    return (
        <View style={styles.body}>

            <View style={styles.view}>
                <Text style={styles.text}>Persistent System Lanka (PVT) LTD</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.text}>Dashboard</Text>
            </View>    


            <View style={styles.view}>
                <Pressable
                    onPress={onPressHandlerExpense}
                    style={({ pressed }) => ({ 
                        backgroundColor: pressed ? '#ddd' : '#fff' 
                    })}
            >
                    <Text style={styles.text}>Expense Claim</Text>
                </Pressable>
            </View>

            <View style={styles.view}>
                <Pressable
                    onPress={onPressHandlerOPD}
                    style={({ pressed }) => ({ 
                        backgroundColor: pressed ? '#ddd' : '#fff' 
                    })}
            >
                    <Text style={styles.text}>OPD Claim</Text>
                </Pressable>
            </View>

            <View style={styles.view}>
                <Pressable
                    onPress={onPressHandlerRandR}
                    style={({ pressed }) => ({ 
                        backgroundColor: pressed ? '#ddd' : '#fff' 
                    })}
            >
                    <Text style={styles.text}>Reward and Recognition</Text>
                </Pressable>
            </View>
        </View>
    );
  }


const styles = StyleSheet.create({
    body : {
      flex: 1, 
      alignItems: 'center', 
      //justifyContent: 'center',
      backgroundColor: '#352D3A',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      color: '#FA6106'
    },
    view:{
        margin:10,
      },
      input: {
        width: 200,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,   
      },
      
  })
