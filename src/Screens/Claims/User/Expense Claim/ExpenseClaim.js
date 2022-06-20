import React , { useEffect, useState } from 'react'; //usestate for hooks
import {
  StyleSheet,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ActivityIndicator, FlatList, Text,} from 'react-native';
import axios from "axios";

//refresh
// const wait = (timeout) => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// }

export default function Expense_Claim({navigation}){
  //refresh
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, []);

  // backend
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getExpenseClaims = async  () => {
     try {
      const response = await fetch('http://10.0.2.2:8080/api/v1/expenseclaim/getExpenseClaims');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    }
  useEffect(() => {
    getExpenseClaims();
  }, []);

//     var axios = require('axios');

//     var config = {
//     method: 'get',
//     url: 'http://10.0.2.2:8080/api/v1/expenseclaim/getExpenseClaims',
//     headers: { 
//     'Content-Type': 'application/json'
//    },
//    data : data
//   };

//     axios(config)
//   .then(function (response) {
//    console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//   console.log(error);
// });

    return(
      
      <View style={styles.body}>
      <View style={styles.header}>
      <Text style={styles.text}>
        Claimed Expenses
      </Text>
      </View>
      <View style={styles.container}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList 
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //   />
        // }
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.row}
            onPress={()=>{
              navigation.navigate('Edit');
            }}>
              <FontAwesome5
              name={'money-check-alt'}
              size={30}
              color={'#ffffff'}
            />
            {/* <Text style={styles.rowText}>
            Claim ID:{item.EmpId}
            </Text> */}
            <Text style={styles.rowText}>
            BU/Dept:{item.bu_dept}
            </Text>
            <Text style={styles.rowText}>
            Project:{item.project}
            </Text>
            <Text style={styles.rowText}>
            Extension No:{item.extension_No},
            </Text>
            <Text style={styles.rowText}>
            Customer:{item.customer}
            </Text>
            <Text style={styles.rowText}>
            Location:{item.location}
            </Text>
            <Text style={styles.rowText}>
            Particulars:{item.particulars}
            </Text>
            <Text style={styles.rowText}>
            Amount:{item.amount}
            </Text>
            </TouchableOpacity>
          )}
        />
      )}

         <TouchableOpacity style={styles.button} 
          onPress={()=>{
          navigation.navigate('Add a new claim');
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
    // input1:{
    //   fontSize:20,
    // },
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


  
