import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, CustomText, ProductVertical } from '../../../components'
import { UserContext } from '../../Login/UserContext'
import { MainContext } from '../MainContext'
import { dataCheck, discountFormat, priceFormat } from '../../../utils/helper'

const deviceWidth = Dimensions.get('window').width;
const OrderDetail = ({ route }) => {
    const { item } = route.params;
    const [orderDetail, setOrderDetail] = useState([]);
    const [productList, setProductList] = useState([]);
    const { onGetUserOrderDetail } = useContext(UserContext);
    const { onGetProductByID } = useContext(MainContext);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true)
        const orderDetailResult = await (onGetUserOrderDetail(item.userOrderID));
        setOrderDetail(orderDetailResult.data);
        try {
            setProductList([]);
            for (let index = 0; index < orderDetailResult.data.length; index++) {
                const productResult = await onGetProductByID(orderDetailResult.data[index].productID);
                setProductList(oldArr => [...oldArr, productResult.data[0]]);
            }
        } catch (error) {
            console.warn(error)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        isLoading == false ?
            <SafeAreaView style={[styles.container]}>
                <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, paddingBottom:60 }}>
                    <View style={styles.container2}>
                        <CustomText value={"Order"} fontWeight={'heavy'} fontSize={'title'} />
                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"No."} customStyles={styles.rowItem} />
                            <CustomText value={"DR352GK"} customStyles={styles.rowItem} />
                        </View>

                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"Date created"} customStyles={styles.rowItem} />
                            <CustomText value={"12-12-2023"} customStyles={styles.rowItem} />
                        </View>

                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"Status"} customStyles={styles.rowItem} />
                            <CustomText value={"Delivered"} customStyles={styles.rowItem} />
                        </View>
                        <CustomText value={"Product(s)"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />

                        <FlatList
                            width={'100%'}
                            style={{marginTop:12}}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ gap: 8, marginBottom: 16 }}
                            data={productList}
                            keyExtractor={item => item.productID}
                            renderItem={({ item }) => {
                                return <ProductVertical
                                    item={item}
                                />
                            }} />

                        <CustomText value={"Order Information"} fontWeight={'heavy'} fontSize={'title'} marginTop={20} />
                        <View style={[styles.rowContainer, { marginTop: 12 }]}>
                            <CustomText value={"Shipping Address"} customStyles={styles.rowItem} />
                            <CustomText value={"23 NVXOK"} customStyles={styles.rowItem} />
                        </View>
                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"Payment Method"} customStyles={styles.rowItem} />
                            <CustomText value={"**** **** **** ****"} customStyles={styles.rowItem} />
                        </View>
                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"Discount"} customStyles={styles.rowItem} />
                            <CustomText value={"None"} customStyles={styles.rowItem} />
                        </View>
                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"Discount Code"} customStyles={styles.rowItem} />
                            <CustomText value={"None"} customStyles={styles.rowItem} />
                        </View>
                        <View style={[styles.rowContainer, { marginTop: 8 }]}>
                            <CustomText value={"Total"} customStyles={styles.rowItem} />
                            <CustomText value={item.totalPrice} customStyles={styles.rowItem} />
                        </View>
                    </View>


                </ScrollView>
            </SafeAreaView>
            : <></>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#fff'
    },
    container2: {
        marginStart: deviceWidth * 0.05
    },
    rowContainer: {
        flexDirection: 'row'
    },
    rowItem: {
        flex: 1
    }
})