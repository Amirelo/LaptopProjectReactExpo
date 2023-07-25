import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CustomButton, CustomImage, CustomImageButton, CustomText, RowItem } from '../../../components'
import * as images from '../../../assets/images'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import customStyle from '../../../assets/stylesheets/customStyle'
import { UserContext } from '../../Login/UserContext'
import { MainContext } from '../MainContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { dataCheck, dataParentCheck, priceFormat } from '../../../utils/helper'

const ProductDetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { item } = route.params;
    const { onGetUserByEmail } = useContext(UserContext);
    const { onInsertCart, onGetProductImagesByProductID,
        onGetProductProcessor, onGetProductMemory,
        onGetProductScreen, onGetProductStorage,
        onGetProductOS, onCheckUserFavorite, onCheckFavoriteStatus,
        onGetUserFavorite } = useContext(MainContext);

    const [prodImages, setProdImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [itemProcessor, setItemProcessor] = useState();
    const [itemMemory, setItemMemory] = useState();
    const [itemScreen, setitemScreen] = useState();
    const [itemStorage, setitemStorage] = useState();
    const [itemOS, setitemOS] = useState();
    const [itemFavorite, setItemFavorite] = useState();
    const [user, setUser] = useState();

    const getInitData = async () => {
        setIsLoading(true);

        const prodImagesResult = await onGetProductImagesByProductID(item.productID);
        setProdImages(prodImagesResult.data);

        const processor = await onGetProductProcessor(item.processorID);
        setItemProcessor(processor);

        const memory = await onGetProductMemory(item.memoryID);
        setItemMemory(memory);

        const screen = await onGetProductScreen(item.screenID);
        setitemScreen(screen);

        const storage = await onGetProductStorage(item.storageID);
        setitemStorage(storage);

        const oss = await onGetProductOS(item.operatingSystemID);
        setitemOS(oss);

        email = await AsyncStorage.getItem('email');
        const userInfo = await onGetUserByEmail(email);
        if (userInfo.response_code == 1) {
            setUser(userInfo.data);
        }
        const favoriteRes = await onGetUserFavorite(userInfo.data.userId);
        if (favoriteRes.response_code == 1) {
            const productID = item.productID;
            favoriteRes.data.map(item => {
                if (item.productID == productID) {
                    setItemFavorite(item.isFavorite)
                }
            })
    }
    setIsLoading(false)
}

const onAddToCartPressed = async () => {
    email = await AsyncStorage.getItem('email');
    const userInfo = await onGetUserByEmail(email);
    if (userInfo.response_code == 1) {
        const insertCartResult = await onInsertCart(1, userInfo.data.userId, item.productID);
        if (insertCartResult.response_code == 1) {
            navigation.goBack();
        } else {
            console.log("Something wrong happen:", insertCartResult)
        }
    }
}

const onFavoritePressed = async () => {
    try {
        console.log('userId:', user.userId, "productID:", item.productID)
        const favoriteResult = await onCheckUserFavorite(dataCheck(user, 'userId'), item.productID);
        console.log(favoriteResult)
        if (favoriteResult.response_code == 1) {
            setItemFavorite(!itemFavorite);
            console.log(itemFavorite)
        }
    }
    catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    getInitData();
}, [])

return (
    <View style={customStyle.container}>
        {isLoading == false ?
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ width: '90%', paddingBottom: 32 }}>
                <FlatList
                    height={"100%"}
                    width={240}
                    marginTop={8}
                    horizontal={true}
                    pagingEnabled={true}
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ justifyContent: 'space-between', gap: 16 }}
                    style={{ alignSelf: 'center' }}
                    snapToAlignment='start'
                    decelerationRate={'fast'}
                    data={dataParentCheck(prodImages)}
                    initialNumToRender={3}
                    keyExtractor={item => item.productImageID}
                    renderItem={({ item }) => {
                        return <CustomImage type={'productDetail'} imageLink={dataCheck(item, 'productImageLink')} linkType={'uri'} />
                    }} />
                <View style={styles.rowContainer}>
                    <CustomText value={item.productName} customStyles={{ width: '90%' }} fontWeight={'heavy'} fontSize={'header'} marginTop={16} />
                    {itemFavorite ?
                        <CustomImageButton onPress={onFavoritePressed} imageLink={images.ic_favorite_selected} />
                        :
                        <CustomImageButton onPress={onFavoritePressed} imageLink={images.ic_favorite} />}
                </View>
                <CustomText value={priceFormat(item.currentPrice)} marginTop={8} fontWeight={'heavy'} fontSize={'title'} textColor={'cancel'} customStyles={styles.priceRight} />
                <CustomText value={priceFormat(item.productPrice)} fontWeight={'heavy'} fontSize={'normal'} type={'prod_old_price'} customStyles={styles.priceRight} />
                {/* General info */}
                <CustomText value={"General Info"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"Brand"} valueSecond={"Lenovo"} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"P/N"} valueSecond={item.modelCode} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Manufacturer"} valueSecond={item.manufacturer} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Warranty"} valueSecond={item.warranty + " months"} type={'both'} secondTextColor={'text_sub'} />

                {/* Dimensions and weight */}
                <CustomText value={"Dimensions and weight"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"Size"} valueSecond={item.length + " x " + item.width + " x " + item.height + " mm"} marginTop={8} textColor={'text_sub'} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Weight"} valueSecond={item.weight} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Color"} valueSecond={"Silver"} type={'both'} secondTextColor={'text_sub'} />


                {/* Processor */}
                <CustomText value={"Processor"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"Name"} valueSecond={itemProcessor ? itemProcessor.name : ""} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"CPU speed"} valueSecond={itemProcessor ? itemProcessor.CPU_Speed : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Cores"} valueSecond={itemProcessor ? itemProcessor.cores : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Logical processors"} valueSecond={itemProcessor ? itemProcessor.logicalProcessor : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Cache memory"} valueSecond={itemProcessor ? itemProcessor.cacheMemory : ""} type={'both'} secondTextColor={'text_sub'} />

                {/* Memory */}
                <CustomText value={"Memory"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"RAM"} valueSecond={itemMemory ? itemMemory.currentRAM : ""} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"Type"} valueSecond={itemMemory ? itemMemory.type : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Speed"} valueSecond={itemMemory ? itemMemory.speed : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Available slots"} valueSecond={itemMemory ? itemMemory.availableSlots : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Max Memory"} valueSecond={itemMemory ? itemMemory.maxRam : ""} type={'both'} secondTextColor={'text_sub'} />

                {/* Screen */}
                <CustomText value={"Screen"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"size"} valueSecond={itemScreen ? itemScreen.screenSize : ""} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"Resolution"} valueSecond={itemScreen ? itemScreen.resolution : ""} type={'both'} secondTextColor={'text_sub'} />

                {/* Graphical card */}
                <CustomText value={"Graphical card"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"Type"} valueSecond={"Card onboard"} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"Brand"} valueSecond={"Intel"} type={'both'} secondTextColor={'text_sub'} />

                {/* Storage */}
                <CustomText value={"Storage"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"Type"} valueSecond={itemStorage ? itemStorage.type : ""} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"Available slots"} valueSecond={itemStorage ? itemStorage.type : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Current storage"} valueSecond={itemStorage ? itemStorage.currentStorage : ""} type={'both'} secondTextColor={'text_sub'} />

                {/* Operating System */}
                <CustomText value={"Operating System"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                <RowItem valueFirst={"OS"} valueSecond={itemOS ? itemOS.OS : ""} type={'both'} secondTextColor={'text_sub'} marginTop={8} />
                <RowItem valueFirst={"Version"} valueSecond={itemOS ? itemOS.version : ""} type={'both'} secondTextColor={'text_sub'} />
                <RowItem valueFirst={"Type"} valueSecond={itemOS ? itemOS.type : ""} type={'both'} secondTextColor={'text_sub'} />

                <CustomButton value={"Add to cart"} onPress={onAddToCartPressed} type={'primary'} marginTop={32} />
            </ScrollView>
            : <></>}
    </View>
)
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        alignItems: 'center',
    },
    priceRight: {
        alignSelf: 'flex-end'
    }
})