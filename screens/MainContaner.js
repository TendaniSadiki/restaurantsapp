import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import Loginscreen from './Home'
import Bookings from './Bookings'
import Moreinfo from './Moreinfo'

const homeName ='Home'
const bookingsName ="Bookings"
const moreInfo = "Settings"

const Tab = createBottomTabNavigator();

const MainContaner = () => {
  return (
    
      <NavigationContainer>

      </NavigationContainer>
    
  )
}

export default MainContaner

const styles = StyleSheet.create({})