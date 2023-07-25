import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomBanner, CustomHeader, ProductListVertical, ProductVertical, ProductsListHorizontal } from '../../../components'
import { UserContext } from '../../Login/UserContext'
import { MainContext } from '../MainContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList } from 'react-native-gesture-handler'

const Favorite = ({navigation}) => {

    const [user, setUser] = useState();

    const { onGetUserByEmail } = useContext(UserContext);
    const { onGetUserFavorite, onGetProductByID } = useContext(MainContext);

    const [listFavorites, setListFavorites] = useState();
    const [favProd, setFavProd] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onItemPressed = (item) => {
        navigation.navigate("Product Details", { item: item })
    }


    const getInitData = async () => {
        setIsLoading(true);
        email = await AsyncStorage.getItem('email');
        const userInfo = await onGetUserByEmail(email);
        if (userInfo.response_code == 1) {
            setUser(userInfo.data);
        }
        const favoriteRes = await onGetUserFavorite(userInfo.data.userId);
        if (favoriteRes.response_code == 1) {
            favoriteRes.data.map(async (item) => {
                if (item.isFavorite != false) {
                    const addRes = await onGetProductByID(item.productID);
                    if (addRes.response_code == 1) {
                        prodItem = addRes.data[0]
                        console.log(prodItem)
                        setFavProd(prevState =>
                            [...prevState, prodItem]);
                    }
                }
            })

        }
        setIsLoading(false)
    }

    useEffect(() => {
        getInitData()
    }, [])

    return (
        <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
                {isLoading == false ?
                    <FlatList
                        width={'100%'}
                        height={"100%"}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 8, marginBottom: 16, alignItems:'center' }}
                        data={favProd}
                        keyExtractor={item => item.productID}
                        renderItem={({ item }) => {
                            return <ProductVertical
                                item={item}
                                onPress={() => onItemPressed(item)}
                            />
                        }} />
                    : <></>}
            </SafeAreaView>
        </ScrollView>
    )
}

export default Favorite

const styles = StyleSheet.create({})