import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function LoginScreen({navigation}) {
  
    const onPressHandlerSignUp = () => {
      navigation.navigate('Screen-SignUp');
    }

    const onPressHandlerSignIn = () => {
        navigation.navigate('Screen-Welcome');
    }

    const onPressHandlerForgetPass = () => {
        navigation.navigate('Screen-ForgetPass1');
    }
  
    return (
      <View style={styles.body}>
        
        <View style={styles.view}>
            <Text style={styles.text}>Persistent System Lanka (PVT) LTD</Text>
        </View>

        <View style={styles.view}>
            <Text style={styles.text}>Expense Claim Management System</Text>
        </View>

        <View style={styles.view}>
            <TextInput
                style={styles.input}
                placeholder='User Name'   
            />
        </View>

        <View style={styles.view}>
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry
            />
        </View>
{/* 
    <View style={styles.view}>
      <Text>Remember me</Text>
    </View> */}
    
        <View style={styles.view}>      
            <Pressable
                onPress={onPressHandlerSignIn}
                style={({ pressed }) => ({ 
                    backgroundColor: pressed ? '#ddd' : '#fff' 
                })}
            >
                <Text style={styles.text}>Sign In</Text>
            </Pressable>
        </View>

        <View style={styles.view}>
        <Pressable
                onPress={onPressHandlerForgetPass}
                style={({ pressed }) => ({ 
                    backgroundColor: pressed ? '#ddd' : '#fff0' 
                })}
            >
                <Text style={styles.text}>Forgot Password?</Text>
            </Pressable>
        </View>

        <View style={styles.view}>
            <View>
            <Text style={styles.text}>Haven’t signed up yet?</Text>
            </View>

            <View style={styles.view}>      
                <Pressable
                    onPress={onPressHandlerSignUp}
                    style={({ pressed }) => ({ 
                        backgroundColor: pressed ? '#ddd' : '#fff' 
                    })}
                >
                    <Text style={styles.text}>Sign Up</Text>
                </Pressable>
            </View>
            
        </View>

        {/* <View style={styles.view}>      
            <Pressable
                onPress={onPressHandlerSignUp}
                style={({ pressed }) => ({ 
                    backgroundColor: pressed ? '#ddd' : '#fff' 
                })}
            >
                <Text style={styles.text}>Sign Up</Text>
            </Pressable>
        </View> */}

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
