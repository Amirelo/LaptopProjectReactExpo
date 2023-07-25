import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomButton, CustomInput, LocationOptions } from '../../../components'
import * as images from '../../../assets/images'
import ProductPressOption from '../../../components/ProductPressOption'
import { UserContext } from '../../Login/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SafeAreaView } from 'react-native-safe-area-context'




const CartRecipientScreen = ({ navigation,route }) => {
  const [location, setLocation] = useState();
  const [locationPressed, setLocationPressed] = useState(false);
  const [userAddresses, setUserAddresses] = useState([]);
  const [fullName,setFullName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [note,setNote] = useState("");
  const [paymentType,setPaymentType] = useState("");
  const [userID,setUserID] = useState();

  const { onGetAddressesByEmail,onGetUserByEmail } = useContext(UserContext);
  const{totalPrice,cart} = route.params;

  const initData = async() => {
    email = await AsyncStorage.getItem('email');
    const userInfo = await onGetUserByEmail(email);
    console.log(userInfo.data)
    setFullName(userInfo.data.fullname);
    setPhoneNumber(userInfo.data.phonenumber);
    setUserID(userInfo.data.userId)
    const userAddress = await onGetAddressesByEmail(email);
    setUserAddresses(userAddress.data);
    console.log(userAddress.data)
  }

  const onContinueToCheckoutPressed = () => {
    navigation.navigate("Checkout",{location:location,fullName:fullName,phoneNumber:phoneNumber, totalPrice:totalPrice,note:note,userID:userID,cart:cart});
  }

  const onLocationPressed = () => {
    setLocationPressed(true)
  }

  const onHideLocationPressed = () => {
    setLocationPressed(false)
  }

  const onLocationSelected = (item) => {
    setLocationPressed(false)
    setLocation(item)
  }

  useEffect(()=>{
    initData()
  },[])

  return (
    <SafeAreaView style={customStyle.container}>
      <CustomButton onPress={onLocationPressed} type={'social'} value={location?location.addressName+", P."+location.ward+", Q."+location.district+", "+location.city:"Location"} imageLink={images.ic_arrow_down} marginTop={103}/>
      <CustomInput placeholder={"Recipient"} value={fullName} onChangeText={setFullName} marginTop={8} />
      <CustomInput placeholder={"Phone number"} value={phoneNumber} onChangeText={setPhoneNumber} marginTop={8} />
      <CustomInput placeholder={"Note"} value={note} onChangeText={setNote} marginTop={8} />
      <CustomInput placeholder={"Payment Type"} marginTop={8} />
      <CustomButton value={"Continue to checkout"} type={'primary'} onPress={onContinueToCheckoutPressed} marginTop={24} customStyles={{marginBottom:32}} />
      {locationPressed ?
        <>
          <CustomButton onPress={onHideLocationPressed} customStyles={customStyle.unselectable} />
          <LocationOptions data={userAddresses} onLocationSelected={onLocationSelected}/>
        </>
        : <></>}
    </SafeAreaView>
  )
}

export default CartRecipientScreen

const styles = StyleSheet.create({})