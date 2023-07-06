import { View, Text } from 'react-native'
import React, { createContext } from 'react'

export const ProductContext = createContext();

export const MainContextProvider = (props) => {
    const {children} = props;
  return (
    <ProductContext.Provider>
        {children}
    </ProductContext.Provider>
  )
}
