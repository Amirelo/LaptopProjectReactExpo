import { StyleSheet } from 'react-native';
import { DeactivatedAuthScreen, FailureScreen, ForgotPassword, SignIn, SignUp, SplashScreen, SuccessfulScreen, VerificationScreen } from './screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
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
  )
}

export default UserNavigation
