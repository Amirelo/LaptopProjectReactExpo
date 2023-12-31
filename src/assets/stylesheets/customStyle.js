import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default CustomStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
    },
    scrollviewContainer:{
        width:'100%',
    },
    splashContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#02A9F7'
    },
    backgroundstyles: {
        flex:1,
        alignItems: 'center',
        resizeMode: 'stretch',
        position:'absolute'
    },
    button_submit:{
        backgroundColor: '#02A9F7'
    },
    button_cancel:{
        backgroundColor: '#F52D2D'
    },
    button_review:{
        backgroundColor: '#C4C805'
    },
    rowContainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    itemRow:{
        flexDirection:'row',
        alignItems:'center',
    },
    itemTextMargin: {
        marginTop: 8,
        marginHorizontal: 8
    },
    unselectable: {
        backgroundColor: '#00000020',
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: deviceHeight,
        alignItems: 'center',
        paddingTop: '40%'
      }
})