import { Text, View, Image } from 'react-native';
import * as images from '../../assets/images';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cart, Explore, Home, NotificationScreen, Favorite, Profile, Account, ShippingAddress, Order, OrderDetail, CardScreen, ProductDetailScreen, CartRecipientScreen } from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UpdateInfo from './screens/UpdateInfo';
import PromoCodeScreen from './screens/PromoCodeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigation = () => {
    const HomeStack = () => {
        return (
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
                <Stack.Screen name='Favorite' component={Favorite} />
                <Stack.Screen name='Notification' component={NotificationScreen} />
                <Stack.Screen name='Product Details' component={ProductDetailScreen} />
            </Stack.Navigator>
        )
    }

    const AccountStack = () => {
        return (
            <Stack.Navigator initialRouteName='Account'>
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Update User Information" component={UpdateInfo} />
                <Stack.Screen name="Shipping Address" component={ShippingAddress} />
                <Stack.Screen name="Order" component={Order} />
                <Stack.Screen name="Order Detail" component={OrderDetail} />
                <Stack.Screen name="Promocodes" component={PromoCodeScreen} />
                <Stack.Screen name="User Cards" component={CardScreen} />
            </Stack.Navigator>
        )
    }

    const CartStack = () => {
        return(
        <Stack.Navigator initialRouteName='Cart'>
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Recipient Info" component={CartRecipientScreen} />
        </Stack.Navigator>
        );
    }

    return (
        <Tab.Navigator initialRouteName='HomeStack'>
            <Tab.Screen name='HomeStack' options={{ title: "Home", headerShown: false, tabBarActiveTintColor: "#02A9F7", tabBarIcon: () => { return <Image source={images.ic_home}/> } }} component={HomeStack} />
            <Tab.Screen name='Explore' options={{ tabBarActiveTintColor: "#02A9F7", tabBarIcon: () => { return <Image source={images.ic_explore}/> } }} component={Explore} />
            <Tab.Screen name="CartStack" options={{ tabBarActiveTintColor: "#02A9F7", title:'Account', headerShown:false, tabBarIcon: () => { return <Image source={images.ic_cart}/> } }} component={CartStack} />
            <Tab.Screen name="AccountStack" options={{ tabBarActiveTintColor: "#02A9F7", title: "Account", headerShown: false, tabBarIcon: () => { return <Image source={images.ic_person}/> } }} component={AccountStack} />
        </Tab.Navigator>
    )
}

export default MainNavigation