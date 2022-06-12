import * as React from 'react';
import { View, Text, StyleSheet,Pressable,TextInput,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function SignUpScreen({navigation}) {

    const onPressHandler = () => {
      navigation.navigate('Screen-Login');
    }
  
    return (
        <View style={styles.body}>
            
            <View style={styles.view}>
                <Text style={styles.text}>Persistent System Lanka (PVT) LTD</Text>
            </View>

            <View style={styles.view}>
                <Text style={styles.text}>Sign Up</Text>
            </View>

            <View style={styles.view}>
                {/* <View >
                    <Text> User Name</Text>
                </View> */}
                <View >
                    <TextInput 
                        style={styles.input} 
                        placeholder="User Name" 
                    />
                </View>
            </View>

            <View style={styles.view}>
                {/* <View >
                <Text> Employee ID</Text>
                </View> */}
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder="Employee ID"          
                    />
                </View>
            </View>

            <View style={styles.view}>
                {/* <View >
                <Text> E-mail</Text>
                </View> */}
                <View >
                    <TextInput 
                        style={styles.input} 
                        placeholder="E-mail" 
                    />
                </View>
            </View>


            <View style={styles.view}>
                {/* <View >
                <Text> User Name</Text>
                </View> */}
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder="Phone Number"
                        keyboardType='phone-pad'
                    />
                </View>
            </View>

            <View style={styles.view}>
                {/* <View >
                <Text> User Name</Text>
                </View> */}
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                    />
                </View>
            </View>

            <View style={styles.view}>
                {/* <View >
                <Text> User Name</Text>
                </View> */}
                <View >
                    <TextInput
                        style={styles.input}
                        placeholder="Confirm Password"
                        secureTextEntry
                    />
                </View>
            </View>


            <View style={styles.view}>
                <Pressable
                    onPress={onPressHandler}
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


