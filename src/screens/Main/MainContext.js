import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import { getAllProduct, getAllProcessors, getAllProductImages, 
  getAllMemories, getAllScreens, getAllStorages, getUserCart,getProductByID } from './MainService';

export const MainContext = createContext();

export const MainContextProvider = (props) => {
    const {children} = props;
    const [listProcessors, setListProcessors] = useState();
    const [listMemories, setListMemories] = useState();
    const [listScreens, setListScreens] = useState();
    const [listStorages, setListStorages] = useState();
    const [listProducts, setListProducts] = useState();

    const onGetAllProduct = async() => {
      try{
        const res = await getAllProduct();
        return res.data;
      } catch(error){
        console.log("On get all product error", error);
        return null;
      }
    }

    const onGetProductByID = async(productID) => {
      try{
        const res = await getProductByID(productID);
        return res.data;
      } catch(error){
        console.log("On get product by id error", error);
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

    const onGetUserCart = async(username) => {
      try{
        const res = await getUserCart(username);
        return res.data;
      } catch(error){
        console.log("On get user cart error",error);
        return null;
      }
    }

    

    const getAllData = async() => {
      const processorResult = await onGetAllProcessors();
      setListProcessors(processorResult.data);

      const productResult = await onGetAllProduct();
      setListProducts(productResult.data);

      const memoryResult = await onGetAllMemories();
      setListMemories(memoryResult.data);

      const screenResult = await onGetAllScreens();
      setListScreens(screenResult.data);

      const storageResult = await onGetAllStorages();
      setListStorages(storageResult.data);

    }

    useEffect(() =>{
      getAllData()
    },[])
    

  return (
    <MainContext.Provider value={{listProducts,listProcessors,listMemories, 
    listScreens,listStorages,onGetUserCart,onGetProductByID}}>
        {children}
    </MainContext.Provider>
  )
}
