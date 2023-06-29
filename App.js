import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as images from './src/assets/images';
import { DeactivatedAuthScreen, FailureScreen, ForgotPassword, SignIn, SignUp, SplashScreen, SuccessfulScreen, VerificationScreen } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Account, Cart, Explore, Home, NotificationScreen, Profile,  } from './src/screens/Main';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorite from './src/screens/Main/Favorite';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const HomeStack = () =>{
    return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' options={{headerShown:false}} component={Home}/>
      <Stack.Screen name='Favorite' component={Favorite}/>
      <Stack.Screen name='Notification' component={NotificationScreen}/>
    </Stack.Navigator>
    )
  }

  const AccountStack = () => {
    return(
      <Stack.Navigator initialRouteName='Account'>
        <Stack.Screen name="Account" component={Account}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
    {
      isLoggedIn == false ?
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="Sign In" options={{ headerShown: false }} component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Forgot password" component={ForgotPassword} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Success" component={SuccessfulScreen} />
        <Stack.Screen name="Fail" component={FailureScreen} />
        <Stack.Screen name="Deactivated" component={DeactivatedAuthScreen} />
      </Stack.Navigator>
      :
      <Tab.Navigator initialRouteName='HomeStack'>
        <Tab.Screen name='HomeStack' options={{title:"Home",headerShown:false, tabBarIcon:()=>{return <Image source={images.ic_home}></Image>}}} component={HomeStack} />
        <Tab.Screen name='Explore' options={{tabBarIcon:() => {return <Image source={images.ic_explore}></Image>}}} component={Explore} />
        <Tab.Screen name="Cart" options={{tabBarIcon:()=>{return <Image source={images.ic_cart}></Image>}} } component={Cart}/>
        <Tab.Screen name="AccountStack" options={{title:"Account", headerShown:false,tabBarIcon:()=>{return <Image source={images.ic_person}></Image>}} }  component={AccountStack}/>
      </Tab.Navigator>
    }
    </NavigationContainer > 

    
  );

  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
