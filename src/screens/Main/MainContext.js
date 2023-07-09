import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { getAllProduct, getAllProcessors, getAllProductImages, getAllMemories, getAllScreens, getAllStorages } from './MainService';

export const MainContext = createContext();

export const MainContextProvider = (props) => {
    const {children} = props;

    const onGetAllProduct = async() => {
      try{
        const res = await getAllProduct();
        return res.data;
      } catch(error){
        console.log("On get all product error", error);
        return null;
      }
    }

    const onGetAllProductImages = async() => {
      try{
        const res = await getAllProductImages();
        return res.data;
      } catch(error){
        console.log("On get all product images error", error);
        return null;
      }
    }

    const onGetAllProcessors = async() => {
      try{
        const res = await getAllProcessors();
        return res.data;
      } catch(error){
        console.log("On get all processors error", error);
        return null;
      }
    }

    const onGetAllMemories = async () => {
      try{
        const res = await getAllMemories();
        return res.data;
      } catch(error){
        console.log("On get all memories error", error);
        return null;
      }
    }

    const onGetAllScreens = async () => {
      try{
        const res = await getAllScreens();
        return res.data;
      } catch(error){
        console.log("On get all screens error", error);
        return null;
      }
    }

    const onGetAllStorages = async() =>{
      try{
        const res = await getAllStorages();
        return res.data;
      } catch(error){
        console.log("On get all storages error", error);
        return null;
      }
    }

  return (
    <MainContext.Provider value={{onGetAllProduct,onGetAllProcessors, onGetAllProductImages,onGetAllMemories,onGetAllScreens,onGetAllStorages}}>
        {children}
    </MainContext.Provider>
  )
}
