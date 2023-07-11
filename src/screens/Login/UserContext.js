import { Context, useState, createContext } from 'react';
import { FlatList } from 'react-native';
import axiosInstance from '../../utils/axios';
import { checkEmail, getUserByUsername, sendVerificationCode, 
    signIn, signUp, updateUserInfo,getUserAddress, 
    getUserOrders, getUserOrderDetail } from './UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const { children } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkSaveUser = async() =>{
        try{
        username = await AsyncStorage.getItem('username');
        username!=null ? setIsLoggedIn(true):{}
    } catch(error){
        console.warn("On check save user error", error);
    }
    }

    const onSignIn = async (username, password) => {
        try {
            const res = await signIn(username, password);
            if (res.data.response_code == 1) {
                setIsLoggedIn(true);
                return true;
            } else {
                console.log(res.data.message);
                return false;
            }
        } catch (error) {
            console.log('On sign In error', error);
            return false;
        }
    }

    const onSignUp = async (username,password,email, phoneNumber,fullName,gender,birthday) => {
        try{
            const res = await signUp(username,password,email, phoneNumber,fullName,gender,birthday);
            return res.data;
        } catch(error){
            console.log('On Sign Up error', error);
            return null;
        }
    }

    const onSignOut = async() => {
        await AsyncStorage.clear();
        setIsLoggedIn(false);
    } 

    const onSendVerificationCode = async (email) => {
        try {
            const res = await sendVerificationCode(email);
            console.log("On Send Verification Code success", res.data);
            return res.data;
        } catch (error) {
            console.log("On Send Verification Code error", error);
            return null;
        }
    }

    const onCheckEmail = async(email,type) => {
        try {
            const res = await checkEmail(email,type);
            console.log("On Check Email success", res.data);
            return res.data;
        } catch (error) {
            console.log("On Check Email error", error);
            return null;
        }
    }

    const onUpdateUserInfo = async(data,email,type) => {
        try {
            const res = await updateUserInfo(data,email,type);
            console.log("On Update User Info success", res.data);
            return res.data;
        } catch (error) {
            console.log("On Update User Info error", error);
            return null;
        }
    }

    const onGetUserByUsername = async(username) => {
        try{
            const res = await getUserByUsername(username);
            console.log("On Get User info success", res.data);
            return res.data;
        } catch(error){
            console.log("On Get User info error", error);
            return null;
        }
    }

    const onGetUserAddress = async(username) => {
        try{
            const res = await getUserAddress(username);
            console.log("On Get User Address success", res.data);
            return res.data;
        } catch(error){
            console.log("On Get User Address error", error);
            return null;
        }
    }

    const insertUserAddress = async(addressName,ward,district,city,status,userID) => {
        try{
            const res = await insertUserAddress(addressName,ward,district,city,status,userID);
            console.log("On Insert User Address success", res.data);
            return res.data;
        } catch(error){
            console.log("On Insert User Address error", error);
            return null;
        }
    }

    const updateUserAddress = async(data,type,addressID, userID) => {
        try{
            const res = await updateUserAddress(data,type,addressID, userID);
            console.log("On Update User Address success", res.data);
            return res.data;
        } catch(error){
            console.log("On Update User Address error", error);
            return null;
        }
    }

    const onGetUserOrder = async(userID) =>{
        try{
            const res = await getUserOrders(userID);
            console.log("On Get User Order success", res.data);
            return res.data;
        } catch(error){
            console.log("On Get User Order error", error);
            return null;
        }
    }

    const onGetUserOrderDetail = async(userOrderID) =>{
        try{
            const res = await getUserOrderDetail(userOrderID);
            console.log("On Get Order Detail success", res.data);
            return res.data;
        } catch(error){
            console.log("On Get Order Detail error", error);
            return null;
        }
    }

    return (
        <UserContext.Provider 
        value={{ isLoggedIn, onSignIn, onSignUp, onSignOut, onSendVerificationCode,
        onUpdateUserInfo,onGetUserAddress,insertUserAddress,updateUserAddress,
        onCheckEmail,checkSaveUser,onGetUserByUsername,onGetUserOrder,
        onGetUserOrderDetail }}>
            {children}
        </UserContext.Provider>
    )
}


