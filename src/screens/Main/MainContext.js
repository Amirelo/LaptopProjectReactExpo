import { View, Text } from 'react-native'
import React, { createContext, useEffect, useState } from 'react'
import {
  getAllProduct, getAllProcessors, getAllProductImages,
  getAllMemories, getAllScreens, getAllStorages, getUserCart,
  getProductByID, insertCart, getCartByEmail, getAllOperatingSystems,
  updateCartQuantity, getProductImagesByProductID, getUserFavorite, 
  checkUserFavorite,deleteCart, insertUserOrder, insertOrderDetail
} from './MainService';

export const MainContext = createContext();

export const MainContextProvider = (props) => {
  const { children } = props;
  const [listProcessors, setListProcessors] = useState();
  const [listMemories, setListMemories] = useState();
  const [listScreens, setListScreens] = useState();
  const [listStorages, setListStorages] = useState();
  const [listProducts, setListProducts] = useState();
  const [listOperatingSystem, setListOperatingSystem] = useState();

  const onGetAllProduct = async () => {
    try {
      const res = await getAllProduct();
      return res.data;
    } catch (error) {
      console.log("On get all product error", error);
      return null;
    }
  }

  const onGetProductByID = async (productID) => {
    try {
      const res = await getProductByID(productID);
      return res.data;
    } catch (error) {
      console.log("On get product by id error", error);
      return null;
    }
  }

  const onGetAllProductImages = async () => {
    try {
      const res = await getAllProductImages();
      return res.data;
    } catch (error) {
      console.log("On get all product images error", error);
      return null;
    }
  }

  const onGetProductImagesByProductID = async (productID) => {
    try {
      const res = await getProductImagesByProductID(productID);
      return res.data;
    } catch (error) {
      console.log("On get all product images error", error);
      return null;
    }
  }

  const onGetAllProcessors = async () => {
    try {
      const res = await getAllProcessors();
      return res.data;
    } catch (error) {
      console.log("On get all processors error", error);
      return null;
    }
  }

  const onGetProductProcessor = async (processorID) => {
    try {
      let getItem = null;
      listProcessors.map(item => {
        if (item.processorID == processorID) {
          getItem = item;
        }
      })
      return getItem;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }


  const onGetAllMemories = async () => {
    try {
      const res = await getAllMemories();
      return res.data;
    } catch (error) {
      console.log("On get all memories error", error);
      return null;
    }
  }

  const onGetProductMemory = (memoryID) => {
    try {
      let getItem = null;
      listMemories.map(item => {
        if (item.memoryID == memoryID) {
          getItem = item;
        }
      })
      return getItem;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  const onGetAllScreens = async () => {
    try {
      const res = await getAllScreens();
      return res.data;
    } catch (error) {
      console.log("On get all screens error", error);
      return null;
    }
  }

  const onGetProductScreen = (screenID) => {
    try {
      let getItem = null;
      listScreens.map(item => {
        if (item.screenID == screenID) {
          getItem = item;
        }
      })
      return getItem;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  const onGetAllStorages = async () => {
    try {
      const res = await getAllStorages();
      return res.data;
    } catch (error) {
      console.log("On get all storages error", error);
      return null;
    }
  }

  const onGetProductStorage = (storageID) => {
    try {
      let getItem = null;
      listStorages.map(item => {
        if (item.storageID == storageID) {
          getItem = item;
        }
      })
      return getItem;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }

  const onGetUserCart = async (username) => {
    try {
      const res = await getUserCart(username);
      return res.data;
    } catch (error) {
      console.log("On get user cart error", error);
      return null;
    }
  }

  const onGetAllOS = async () => {
    try {
      const res = await getAllOperatingSystems();
      return res.data;
    } catch (error) {
      console.log("On get all OS error", error);
      return null;
    }
  }

  const onGetProductOS = async (operatingSystemID) => {
    try {
      let getItem = null;
      listOperatingSystem.map(item => {
        if (item.operatingSystemID == operatingSystemID) {
          getItem = item;
        }
      })
      return getItem;
    } catch (error) {
      console.warn(error);
      return null;
    }
  }



  const onGetUserFavorite = async (userID) => {
    try {
      const res = await getUserFavorite(userID);
      return res.data;
    } catch (error) {
      console.log("On get all user favorite error", error);
      return null;
    }
  }

  const onCheckUserFavorite = async (userID,productID) => {
    try {
      const res = await checkUserFavorite(userID,productID);
      return res.data;
    } catch (error) {
      console.log("On check user favorite error", error);
      return null;
    }
  }

  const onInsertCart = async (itemQuantity, userID, productID) => {
    try {
      const res = await insertCart(itemQuantity, userID, productID);
      return res.data;
    } catch (error) {
      console.log("On insert cart error", error);
      return null;
    }
  }

  const onGetCartByEmail = async (email) => {
    try {
      const res = await getCartByEmail(email);
      return res.data;
    } catch (error) {
      console.log("On insert cart error", error);
      return null;
    }
  }

  const onUpdateCartQuantity = async (cartID, quantity) => {
    try {
      const res = await updateCartQuantity(cartID, quantity);
      return res.data;
    } catch (error) {
      console.log("On update cart quantity error", error);
      return null;
    }
  }

  const onDeleteCart = async (cartID) => {
    try {
      const res = await deleteCart(cartID);
      return res.data;
    } catch (error) {
      console.log("On delete cart error", error);
      return null;
    }
  }

  const onInsertUserOrder = async(
    totalPrice, 
    originalPrice, 
    note, 
    receiver, 
    shippingFee, 
    addressID, 
    userID, 
    couponID,
    cardID) => {
    try {
      const res = await insertUserOrder(
        totalPrice, 
        originalPrice, 
        note, 
        receiver, 
        shippingFee, 
        addressID, 
        userID, 
        couponID,
        cardID);
      return res.data;
    } catch (error) {
      console.log("On insert user order error", error);
      return null;
    }
  }

  const onInsertOrderDetail = async(productQuantity,userOrderID,productID) => {
    try {
      const res = await insertOrderDetail(productQuantity,userOrderID,productID);
      return res.data;
    } catch (error) {
      console.log("On insert order detail error", error);
      return null;
    }
  }



  const getAllData = async () => {
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

    const osResult = await onGetAllOS();
    setListOperatingSystem(osResult.data);


  }

  useEffect(() => {
    getAllData()
  }, [])


  return (
    <MainContext.Provider value={{
      listProducts, listProcessors, listMemories,onGetAllProduct,
      listScreens, listStorages, listOperatingSystem,
      onGetUserCart, onGetProductByID, onInsertCart, onGetCartByEmail,
      onGetAllProductImages, onGetProductImagesByProductID,
      onGetProductProcessor, onGetProductMemory, onGetProductScreen,
      onGetProductStorage, onGetProductOS, onUpdateCartQuantity,
     onCheckUserFavorite,onGetUserFavorite,onDeleteCart,
     onInsertUserOrder,onInsertOrderDetail
    }}>
      {children}
    </MainContext.Provider>
  )
}
