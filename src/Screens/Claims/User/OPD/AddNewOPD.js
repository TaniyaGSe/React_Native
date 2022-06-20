import React , {useState} from 'react'; //usestate for hooks
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'; 

export default function Add_OPD(){

  // const DissmissKeyboard = ({children}) =>(
  //   <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
  //     {children}
  //   </TouchableWithoutFeedback>
  // );

  const [description,setDescription] = useState("");
  const [receiptno,setReceiptno]=useState("");
  const [opdamount,setOpdamount]=useState("");

  const navigation=useNavigation();

  async function claimOPD() {
    if (!description.trim()) {
      alert('Please Enter Extension no');
      return;
    }
    if (!receiptno.trim()) {
      alert('Please Enter customer name');
      return;
    }
    if (!opdamount.trim()) {
      alert('Please Enter location');
      return;
    }
    // if(isNaN(opd_amount)){
    //   alert(" Not a number");
    //   //this.setState({ email: text })
    //   return false;
    //   // Its not a number
    // }

  try {
    fetch('http://10.0.2.2:8080/api/v2/opd/saveOPD', {
   method: 'POST',
   headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
            },
   body: JSON.stringify({
      description,
      receiptno,
      opdamount,
  })

})

     alert('OPD claimed successfully')
        navigation.navigate('OPD' )
      } catch (error) {
           console.error(error);
      }

}

    return(
      <View style={styles.body}>
        <View style={styles.header}>
        <Text style={styles.text}>
        Add a new OPD
        </Text>
        </View>
        <View style={styles.container}>

        <TextInput  onChangeText={newText => setDescription(newText)} style={styles.input}
        placeholder='Description'
        value={description}
        />  
        <TextInput  onChangeText={newText => setReceiptno(newText)} style={styles.input}
        placeholder='Receipt No'
        // keyboardType='numeric'
        value={receiptno}
        />
        <TextInput  onChangeText={newText => setOpdamount(newText)} style={styles.input}
        placeholder='Amount'
        value={opdamount}
        // keyboardType='numeric'
        />
        <TouchableOpacity style={styles.background}
          onPress={claimOPD} >
        <Text style={styles.textB}>
          Submit
        </Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
  
    input:{
      height: 40,
      width:200,
      margin: 5,
      padding: 10,
      borderRadius:10,
      marginLeft: '25%',
      marginBottom: 10,
      backgroundColor:'#F89880',
    },
    background:{
      backgroundColor: '#F89880',
      marginBottom:20,
      marginTop:40,
      // margin:0,
      marginLeft: '25%',
      width:'50%',
      height: '10%',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:60,
    },
    textB:{
      fontSize:16,
      marginBottom: 10,
      marginTop: 1,
      marginStart:1,
      // textAlign:'left',
      marginLeft:10,
      color:'#000000',
      fontWeight:'bold',
    },
    body:{
      flex:1,
      // justifyContent:'center',
      // alignItems:'center',
      backgroundColor:'#F89880',
    },
    header:{
      flex:1,
      backgroundColor:'#F89880',
    },
    text:{
      fontSize:30,
      fontWeight:'bold',
      margin:30,
      color:'#000000',
    },
    container:{
      flex:3,
      backgroundColor:'#000000',
      // borderTopLeftRadius: 60,
      // borderTopRightRadius: 60,
    },
  })
  