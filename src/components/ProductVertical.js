import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { memo } from 'react'
import CustomImage from './CustomImage'
import CustomText from './CustomText'

const deviceWidth = Dimensions.get("window").width;
const ProductVertical = ({ imageLink, marginTop, name, curPrice, oldPrice, processor,memory,screen,storage }) => {

    const dataCheck = (data,type) => {
        if(data==null){
            setTimeout(() => {dataCheck},1000)
        } else{
            return data[type];
        }
    }

    return (
        <Pressable style={[styles.container, marginTop ? { marginTop: marginTop } : {}]}>
            <CustomImage customStyle={styles.image} imageLink={imageLink} type={'productItem'} />
            <View style={styles.infoContainer}>
                <CustomText value={name} type={'prod_header'} maxLines={2} customStyles={styles.textMargin} />
                <View style={styles.rowInfo}>
                    <CustomText value={["",dataCheck(processor,'name')]} type={'prod_info'} customStyles={styles.textMargin} />
                    <CustomText value={["RAM ",dataCheck(memory,'currentRAM')]} type={'prod_info'} customStyles={styles.textMargin} />
                </View>
                <View style={styles.rowInfo}>
                        <CustomText value={[dataCheck(storage,'type')," ",dataCheck(storage,'currentStorage')]} type={'prod_info'} customStyles={styles.textMargin} />
                    <CustomText value={["",dataCheck(screen,'screenSize')]} type={'prod_info'} customStyles={styles.textMargin} />
                </View>


                <View style={[styles.rowContainer, styles.textMargin]}>
                <CustomText value={oldPrice} type={'prod_price'} />
                    {curPrice!=oldPrice?
                    <CustomText value={curPrice} type={'prod_old_price'} />
                    :<></>}
                    
                </View>
            </View>
        </Pressable>
    )
}

export default ProductVertical

const styles = StyleSheet.create({
    container: {
        width: deviceWidth * 0.9,
        height: 144,
        backgroundColor: '#FBFBFB',
        borderColor: '#EBF0FF',
        borderWidth: 1,
        maxWidth: 600,
        flexDirection: 'row'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
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
        justifyContent: 'space-between',
        alignItems: 'center',
    }
})