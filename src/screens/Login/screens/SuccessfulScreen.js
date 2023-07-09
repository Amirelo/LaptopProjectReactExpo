import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomImage, CustomText } from '../../../components'
const SuccessfulScreen = ({route}) => {
    const {title} = route.params;
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <SafeAreaView style={customStyle.container}>
            <CustomImage imageLink={images.ic_success} type={'header'} marginTop={103}/>
                <CustomText value={title} type={'header_success'} marginTop={30}/>
                <CustomText value={"You will be redirected soon"} type={'subheader_success'} marginTop={50}/>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SuccessfulScreen

const styles = StyleSheet.create({})