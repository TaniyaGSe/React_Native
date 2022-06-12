import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function ForgetPass2Screen({navigation}) {

    const onPressHandler = () => {
      navigation.navigate('Screen-Login');
    }
  
    return (
        <View style={styles.body}>

            <View style={styles.view}>
                <Text style={styles.text}>Persistent System Lanka (PVT) LTD</Text>
            </View>

            <View style={styles.view}>
                <TextInput 
                    style={styles.input} 
                    placeholder="New Password" 
                /> 
            </View>

            <View style={styles.view}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Re-enter Password" 
                /> 
            </View>

      
            <View style={styles.view}>
                <Text style={styles.text}>Use your new password next time you login</Text>
            </View>    


            <View style={styles.view}>
                <Pressable
                    onPress={onPressHandler}
                    style={({ pressed }) => ({ 
                        backgroundColor: pressed ? '#ddd' : '#fff'
                    })}
                >
                    <Text style={styles.text}>Next</Text>
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


