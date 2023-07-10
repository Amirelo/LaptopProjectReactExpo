import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ColorStyles from '../assets/stylesheets/ColorStyles'
import FontSizeStyles from '../assets/stylesheets/FontSizeStyles'
import FontWeightStyle from '../assets/stylesheets/FontWeightStyle'

const CustomText = ({value, type, customStyles, marginTop,textColor, fontSize, fontWeight, maxLines,textDecor}) => {
  return (
      <Text numberOfLines={maxLines}
        style={[
            type!=null ? styles[`${type}`]:{},
            marginTop!= null ? {marginTop:marginTop}: {},
            customStyles, 
            textColor? ColorStyles[`${textColor}`]:{},
            fontSize? FontSizeStyles[`${fontSize}`]:{},
            fontWeight? FontWeightStyle[`${fontWeight}`]:{},
            textDecor ?{textDecorationLine:`${textDecor}`} :{}
        ]} >{value}</Text>
  )
}


export default CustomText

const styles = StyleSheet.create({
    splash:{
        fontSize:20,
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    },
    header:{
        fontSize:20,
        color:'#000',
        fontWeight:'bold',
    },
    header_fail:{
        fontSize:20,
        color:'#F70202',
        fontWeight:'bold',
        textAlign:'center',
        width:'90%'
    },
    subheader_fail:{
        fontSize:16,
        textAlign:'center',
        width:'90%'
    },
    header_success:{
        fontSize:20,
        color:'#03B700',
        fontWeight:'bold'
    },
    subheader_success:{
        fontSize:16,
        textAlign:'center',
        width:'90%'
    },
    title:{
        fontSize:16,
        color:'black',
    },
    title1:{
        fontSize:14,
        color:'black',
        fontWeight:'bold'
    },
    subtitle:{
        fontSize:12,
        textAlign:'center',
        
    },
    prod_header:{
        fontSize:12,
        color:'#000',
        fontWeight:'bold',
    },
    prod_price:{
        fontSize:12,
        color:'#fff',
        fontWeight:'bold',
        paddingHorizontal:8,
        paddingVertical:4,
        backgroundColor:'#D10B0B',
        borderRadius:4,
    },
    prod_price_nobg:{
        fontSize:12,
        color:'#D10B0B',
        fontWeight:'bold',
    },
    prod_old_price:{
        color: '#9098B1',
        fontSize: 10,
        fontWeight:'bold',
        textDecorationLine: 'line-through',
    },
    prod_discount:{
    color: '#F52D2D',
    fontSize: 10,
    fontWeight: 'bold',
    },
    prod_info:{
        fontSize:10,
        color:'#9098B1'
    },
    banner_title:{
        fontSize:36,
        color:'#fff',
        fontWeight:'bold',
        marginTop:32,
        marginStart:16
    },
    banner_textbox:{
        width:40, 
        height:40,
        backgroundColor:'#fff',
        textAlign:'center',
        textAlignVertical:'center',
        borderRadius:4,
        fontWeight:'bold',
        fontSize:18
    },
    banner_boxSpace:{
        fontSize:18,
        color:'#fff',
        fontWeight:'bold',
        width:16,
        textAlign:'center'
    },
    

})