import React, {useState} from 'react';
import {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import CustomButton from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import axios from 'axios';

export default function LoginScreen({navigation}) {
  
  const {colors} = useTheme();

  //constructor(){
//     super();
//     this.state={
//       check:false,
//       email: '',
//     };
//     this.validates = this.validates.bind(this);
//   }

//   CheckBoxText(){
//       this.setState({
//         check:!this.state.check,
//       })
//   }


//   validates = () => { 

//     let text = this.state.email; 
//     let emailError = this.state.emails;
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
//     if(reg.test(text) === false) 
//     { 
//     console.warn("Invalid email")
//     this.setState({email:text}) 
//     return false; 
//     } 
//     else { 
//     this.setState({email:text}) 
//     console.log("Email is Correct"); 
//     } 
// } 

  const onPressHandlerSignIn = () => {
    navigation.navigate('Screen-Welcome');

  //   let [name, setName] = useState('');
  //   let [password, setPassword] = useState('');
	
	// const navigation=useNavigation();

  //   useEffect(() => {    
  //       SignIn();
  //   }, []);

  //   fetch('http://10.0.2.2:8080/api/getUsers', {
  //   method: 'POST',
  //   headers: {
  //       Accept: 'applicaion/json',
  //       'Content-Type': 'applicaion/json',
  //       },
  //   body: JSON.stringify({
  //       username: setName, //We send our previously declared username(this.state.username) to JSON format
  //       password: setPassword,
  //   }),
  //   })
    
  //   .then((response) => response.JSON() ) //We are gonna handle the response as JSON
  //   .then((res) => {       
  //       if(res.success === true){ //If the user exist
  //           AsyncStorage.setItem('user',res.user);
  //           navigation.navigate('Screen-Welcome');
  //       }
  //       else {
            
  //           //alert(res.message);
  //       }
  //   })
  };
  
  
  


  const onPressHandlerSignUp = () => {
    navigation.navigate('Screen-SignUp');
  };

  // const onPressHandlerSignIn = () => {
  //   navigation.navigate('Screen-Welcome');
  // };

  const onPressHandlerForgetPass = () => {
    navigation.navigate('Screen-ForgetPass1');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.topic}>Persistent System Lanka (PVT) LTD</Text>
      </View>

      <View style={styles.footer}>
        
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={30} />

          <TextInput
            placeholder="User Name"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            //onChangeText={(username) => (setName) }
            //onChangeText={(username) => this.setState({username}) }
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.action}>
          <FontAwesome name="lock" color={colors.text} size={30} />

          <TextInput
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            placeholder="Password"
            //onChangeText={(password) => this.setState({password}) }
            //onChangeText={password => setPassword}
            underlineColorAndroid="transparent"
            secureTextEntry
          />
        </View>
        <View style={styles.action2}>
            <CustomButton onPressFunction={onPressHandlerSignIn} title="Sign In" />
        </View>

        <View style={styles.action2}>
            <TouchableOpacity onPress={onPressHandlerForgetPass}>
            <Text style={{color: '#009387', marginTop: 15}}>
                Forgot password?
            </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.action2}>
            <CustomButton onPressFunction={onPressHandlerSignUp} title="Sign Up" />
        </View>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    alignItems: 'center',
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  topic: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
    color: '#fff',
    textAlign: 'center',
  },

  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  
  action2: {
    margin:10,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  // errorMsg: {
  //     color: '#FF0000',
  //     fontSize: 14,
  // },
  // button: {
  //     alignItems: 'center',
  //     marginTop: 50
  // },
});