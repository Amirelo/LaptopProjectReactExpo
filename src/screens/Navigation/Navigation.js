import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from '../Login/UserNavigation';
import MainNavigation from '../Main/MainNavigation';
import { UserContext } from '../Login/UserContext';

const Navigation = () => {
    const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
        {
            isLoggedIn ? 
                <MainNavigation/>
            :
                <UserNavigation/>
        }
    </NavigationContainer>
  )
}

export default Navigation
