import React , { useEffect, useState } from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { ActivityIndicator, FlatList, Text,} from 'react-native';


export default function OPD({navigation}){

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getOPDs = async () => {
     try {
      const response = await fetch('http://10.0.2.2:8080/api/v2/opd/getOPDs');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getOPDs();
  }, []);

    return(
      <View style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.text}>
        Claimed OPDs
      </Text>
      </View>
      <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row}>
            {/* // onPress={()=>{
            //   navigation.navigate('Edit OPD');
            // }} */}
          <FontAwesome5 
            name={'hospital-alt'}
            size={30}
            color={'#ffffff'}
          />
            <Text style={styles.rowText}>
            Description:{item.description}
            </Text>
            <Text style={styles.rowText}>
            Receipt No:{item.receiptno}
            </Text>
            <Text style={styles.rowText}>
            amount:{item.opdamount}
            </Text>
            </TouchableOpacity>
          )}
        />
      )}
         <TouchableOpacity style={styles.button} 
        onPress={()=>{
          navigation.navigate('Claim a new OPD');
        }}
        >
          <FontAwesome5 style={styles.plus}
          name={'plus'}
          size={30}
          color={'#000000'}
          />
        </TouchableOpacity>
      </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
   
    button:{
      width:60,
      height:60,
      borderRadius:30,
      backgroundColor:'#F89880',
      justifyContent:'center',
      position:'absolute',
      bottom:25,
      right:5,
      elevation:5,
    },
    plus:{
      left:15,
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
      margin:35,
      color:'#000000',
    },
    container:{
      flex:5,
      backgroundColor:'#F89880',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    row:{
      marginHorizontal:20,
      marginVertical:10,
      paddingHorizontal:10,
      backgroundColor:'#000000',
      justifyContent:'center',
      borderRadius:10,
      elevation:8,
    },
    rowText:{
      color:'#ffffff',
      fontSize:14,
      margin:1,
    }
  })


  
