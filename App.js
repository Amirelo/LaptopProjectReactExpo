import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from './src/assets/images';
import { CustomText, CustomImage, CustomInput, CustomButton } from './src/components';
import { DeactivatedAuthScreen, FailureScreen, ForgotPassword, SignIn, SignUp, SplashScreen, SuccessfulScreen, VerificationScreen } from './src/screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Explore, Home } from './src/screens/Main';
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{headerShown:false}} component={Home} />
        <Stack.Screen name='Explore' component={Explore} />
      </Stack.Navigator>
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
