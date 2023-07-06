import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as images from '../../../assets/images';
import customStyle from '../../../assets/stylesheets/customStyle';
import { CustomImage, CustomText } from '../../../components';


const SplashScreen = ({navigation}) => {
  setTimeout(() =>{
    navigation.reset({
        index:0,
        routes:[{name:"Sign In"}],
    });
},2000);
  return (
    <SafeAreaView style={customStyle.splashContainer}>
                <CustomImage imageLink={images.app_logo_splash} type={'header'} />
                <CustomText value={"Simplify your life"} type={'splash'} marginTop={20}/>
            </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
})