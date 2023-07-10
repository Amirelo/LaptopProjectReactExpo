import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import CustomImage from './CustomImage'
import FontWeightStyle from '../assets/stylesheets/FontWeightStyle'
import FontSizeStyles from '../assets/stylesheets/FontSizeStyles'
import ColorStyles from '../assets/stylesheets/ColorStyles'
import { ic_arrow_right, prod1, userImage } from '../assets/images'
import customStyle from '../assets/stylesheets/customStyle'

const AccountTab = ({title, subtitle, onPress, isHighlight, spacingTop, type,imageLink}) => {
  return (
    <Pressable style={[styles.container, spacingTop? {marginTop:spacingTop}: {marginTop:12}]} onPress={onPress}>
        {type=='usertab' ?
        <CustomImage imageLink={imageLink} linkType={'uri'} type={'header'} customStyle={styles.userImage}/>
        :<></>}
        
        <View style={[styles.textContainer,type=="profile"?styles.profileContainer:{}]}>
        <CustomText value={title} customStyles={[FontWeightStyle.heavy, FontSizeStyles.title, isHighlight ? ColorStyles.cancel:ColorStyles.text_default, ]} />
        {type=="profile" ?
        <CustomText value={subtitle} customStyles={[ColorStyles.text_sub, FontSizeStyles.normal]}/>
        :
        <CustomText value={subtitle} customStyles={[ColorStyles.text_sub, FontSizeStyles.normal]} marginTop={8}/>
    }
        </View>
        <CustomImage imageLink={ic_arrow_right} />
    </Pressable>
  )
}

export default AccountTab

const styles = StyleSheet.create({
    container:{
        width:'90%',
        maxWidth:343,
        borderRadius:10,
        backgroundColor:'#FBFBFB',
        borderColor:'#EBF0FF',
        borderWidth:1,
        padding:16,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    profileContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    image:{
        position:'absolute',
        alignSelf:'flex-end',
        top:'50%'
    },
    userImage:{
        marginEnd: 8
    },
    textContainer:{
        flex:1
    },
    textContainerRow:{
        flexDirection:'row'
    }
})
