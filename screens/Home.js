import React from 'react'
import { Text, View, StyleSheet, TextInput } from "react-native"
import Btn from "../components/Btn"
import firebase from 'firebase/app';
import "firebase/auth";

import { FaBars } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa';

export default function Loginscreen({navigation}) {
    return <View >
                
                <View style={styles.homeContainer}>
        <View style={styles.navBar}>
          
                <FaBars  style={styles.Bar}/>

                <View style={styles.locationContent}>
                    <Text  style={styles.locationText}>Agrabad 435, Chittagong</Text>
                    <FaLocationArrow style={styles.BarLocation} />
                </View>
            <FaUser  style={styles.User} />
        </View>
        <View style={styles.Search}>
        <FaSearch  style={styles.SearchIcon}/>
        <TextInput style={styles.SearchInput} placeholder="Search"></TextInput>
        </View>
    </View>
    <Btn title="Log Out" onClick={() => firebase.auth().signOut()} />
           </View>
}
const styles = StyleSheet.create({
    homeContainer: {
      backgroundColor: '#F6F6F6',
      flex:1,
    
    },
    navBar: {
       
        height:80
      },
      Bar: {
        height:80,
        color:"#374151",
        marginLeft:10
      },
      User: {
        height:80,
        color:"#374151",
        position:"absolute",
        right:10
      },
      BarLocation: {
        height:80,
        color:"green",
        position:"absolute",
        alignContent:'center',
        marginLeft:-190
      },
      locationContent:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:-50
      },
      locationText:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:-10
    
      },
      Search:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
       
    
      },
      SearchInput:{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#E6E7E9",
        marginTop:-15,
        paddingLeft: 8,
       
        
    
      },
      SearchIcon:{
       zIndex:1,
       marginLeft:-140,
    
      },
      SearchIcon:{
        zIndex:1,
        marginLeft:-140,
     
       },
  });