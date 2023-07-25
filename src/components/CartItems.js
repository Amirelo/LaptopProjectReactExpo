import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { memo, useContext, useEffect, useState } from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'
import CustomButton from './CustomButton';
import * as images from '../assets/images'
import CustomImageButton from './CustomImageButton';
import { priceFormat } from '../utils/helper';
import { MainContext } from '../screens/Main/MainContext';
import { useNavigation } from '@react-navigation/native';

const deviceWidth = Dimensions.get("window").width;
const CartItems = ({ marginTop, item, setTotalPrice,onActionOptionPressed }) => {
    const { onUpdateCartQuantity,onGetProductByID } = useContext(MainContext);
    const [curProduct,setCurProduct] = useState();

    const [quantity, setQuantity] = useState(item.itemQuantity);

    const getData = async() => {
        const result = await onGetProductByID(item.productID);
        if(result.response_code == 1){
            setCurProduct(result.data[0]);
        }
    }

    const onAddQuantityPressed = async() => {
        if(quantity<curProduct.productQuantity){
            const result = await onUpdateCartQuantity(item.cartID, 1);
            if(result.response_code == 1){
            setQuantity(quantity+1)
            setTotalPrice((price) => price + item.productPrice)
            
            }
        } else{
            console.log("Not enough quantity")
        }
    }

    const onSubtractQuantityPressed = async() => {
        if(quantity>1){
            const result = await onUpdateCartQuantity(item.cartID, -1);
            if(result.response_code == 1){
            setQuantity(quantity-1)
            setTotalPrice((price) => price - item.productPrice)
            }
        } else{
            console.log("Fail")
        }
    }
    
    useEffect(()=>{
        getData();
    },[])

    return (
        <Pressable style={[styles.container, marginTop ? { marginTop: marginTop } : {}]}>
            <CustomImage customStyle={styles.image} imageLink={{ uri: item.productImageLink }} type={'cartItem'} />
            <View style={styles.infoContainer}>
                <View style={[styles.rowInfo]}>
                    <CustomText value={item.productName} type={'prod_header'} maxLines={2} marginTop={8} customStyles={[{width:'76%'}]} />
                    <CustomImageButton imageLink={images.ic_more_vert} onPress={()=>onActionOptionPressed(item)} type={'inputIcon'} marginTop={8} customStyles={[]}/>
                </View>
                <View style={[styles.rowInfo,{marginTop:16}]}>
                    <CustomText value={priceFormat(item.productPrice * quantity)} type={'prod_price_nobg'} maxLines={2} customStyles={styles.textMargin} />
                    <View style={styles.rowInfo}>
                    <CustomImageButton onPress={onSubtractQuantityPressed} imageLink={images.ic_minus} type={'cartQuantityIcon'} />
                    <CustomText value={quantity}/>
                    <CustomImageButton onPress={onAddQuantityPressed} imageLink={images.ic_add} type={'cartQuantityIcon'} />
                    </View>
                </View>


            </View>
        </Pressable>
    )
}

export default CartItems

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.9,
        height: 104,
        backgroundColor: '#FBFBFB',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        maxWidth: 600,
        flexDirection: 'row',
        alignItems:'center',
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    textMargin: {
        marginTop: 8,
        marginHorizontal: 8
    },
    image: {
        alignSelf: 'flex-start',
        marginStart: 8
    },
    infoContainer: {
        flex: 1
    },
    rowInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex:1,
    }
})