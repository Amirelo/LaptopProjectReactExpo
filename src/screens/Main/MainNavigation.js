import { Text, View, Image } from 'react-native';
import * as images from '../../assets/images';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, Explore, Home, NotificationScreen, Favorite,Profile, Account } from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    const HomeStack = () => {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
                <Stack.Screen name='Favorite' component={Favorite} />
                <Stack.Screen name='Notification' component={NotificationScreen} />
            </Stack.Navigator>
        )
    }

    const AccountStack = () => {
        return (
            <Stack.Navigator initialRouteName='Account'>
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        )
    }

    return (
        <Tab.Navigator initialRouteName='HomeStack'>
            <Tab.Screen name='HomeStack' options={{ title: "Home", headerShown: false, tabBarIcon: () => { return <Image source={images.ic_home}></Image> } }} component={HomeStack} />
            <Tab.Screen name='Explore' options={{ tabBarIcon: () => { return <Image source={images.ic_explore}></Image> } }} component={Explore} />
            <Tab.Screen name="Cart" options={{ tabBarIcon: () => { return <Image source={images.ic_cart}></Image> } }} component={Cart} />
            <Tab.Screen name="AccountStack" options={{ title: "Account", headerShown: false, tabBarIcon: () => { return <Image source={images.ic_person}></Image> } }} component={AccountStack} />
        </Tab.Navigator>
    )
}

export default MainNavigation