import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function ForgetPass1Screen({navigation}) {

    const onPressHandler = () => {
      navigation.navigate('Screen-Login');
    }

    const onPressHandlerSubmit = () => {
        navigation.navigate('Screen-ForgetPass2');
    }
  
    return (
        <View style={styles.body}>
            <View style={styles.view}>
                <Text style={styles.text}>Persistent System Lanka (PVT) LTD</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.text}>Send Verification Code to your</Text>
            </View>
      
            <View >
                <View >
                    <Text style={styles.text}> E-mail</Text>
                    <Text style={styles.text}>Mobile</Text>
                </View>

                <View style={styles.view}>

                    <Pressable
                        onPress={onPressHandler}
                        style={({ pressed }) => ({ 
                            backgroundColor: pressed ? '#ddd' : '#fff'
                        })}
                    >
                        <Text style={styles.text}>Send</Text>
                    </Pressable>

                    <Pressable
                        onPress={onPressHandler}
                        style={({ pressed }) => ({ 
                            backgroundColor: pressed ? '#ddd' : '#fff'
                        })}
                    >
                        <Text style={styles.text}>Resend</Text>
                    </Pressable>
                
                </View>
            </View>
           
            <View style={styles.view}>     
                <TextInput 
                    style={styles.input} 
                    placeholder="Enter Verification Code.." 
                />
            </View>

            <View style={styles.view}>
                <Pressable
                        onPress={onPressHandlerSubmit}
                        style={({ pressed }) => ({ 
                            backgroundColor: pressed ? '#ddd' : '#fff'
                        })}
                >
                        <Text style={styles.text}>Submit</Text>
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


