import { StyleSheet, Text, View, Pressable, Alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AccountTab, CustomButton, CustomImage, CustomImageButton } from '../../../components'
import * as images from '../../../assets/images'
import { UserContext } from '../../Login/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = ({ route, navigation }) => {
  const { userInfo } = route.params;
  const [isLoading, setIsLoading] = useState(false);

  const onGoBack = (data, type) => {
    setIsLoading(true);
    switch (type) {
      case "USERNAME":
        userInfo.username = data;
        break;
      case "FULLNAME":
        userInfo.fullname = data;
        break;
      case "IMAGELINK":
        userInfo.imageLink = data;
        break;
      case "BIRTHDAY":
        userInfo.birthday = data;
        break;
      case "GENDER":
        userInfo.gender = data;
        break;
      case "EMAIL":
        userInfo.email = data;
        break;
      case "STATUS":
        userInfo.status = data;
        break;
      case "PHONENUMBER":
        userInfo.phonenumber = data;
        break;
      default:
        break;

    }
    setIsLoading(false);
    route.params.onGoBackAccount(userInfo);
  }

  useEffect(() => {
    console.warn("resfresh");
    onGoBack();

  }, [])

  const onAccountTabPressed = (type) => {
    navigation.navigate("Update User Information",
      { type: type, email: userInfo.email, onGoBack });
  }

  return (
    <SafeAreaView style={customStyle.container}>
      {isLoading == false ?
        <>
          <CustomImageButton imageLink={userInfo.imageLink} linkType={'uri'} type={'logo'} customStyles={styles.userImage} />

          <AccountTab type={'profile'} onPress={() => onAccountTabPressed("USERNAME")} title={"Username"} subtitle={userInfo.username} />
          <AccountTab type={'profile'} onPress={() => onAccountTabPressed("EMAIL")} title={"Email"} subtitle={userInfo.email} />
          <AccountTab type={'profile'} onPress={() => onAccountTabPressed("PHONENUMBER")} title={"Phone number"} subtitle={userInfo.phonenumber} />
          <AccountTab type={'profile'} onPress={() => onAccountTabPressed("BIRTHDAY")} title={"Birthday"} subtitle={userInfo.birthday} />
          <AccountTab type={'profile'} onPress={() => onAccountTabPressed("GENDER")} title={"Gender"} subtitle={userInfo.gender} />
        </>
        : <></>}
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})