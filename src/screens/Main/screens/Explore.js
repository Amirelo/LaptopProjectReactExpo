import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomBanner, CustomButton, CustomHeader, CustomText, ProductHorizontal, ProductListVertical, ProductsListHorizontal, SortOption } from '../../../components'
import { MainContext } from '../MainContext'
import { FlatList } from 'react-native-gesture-handler'
import { discountFormat, priceFormat } from '../../../utils/helper'

const deviceHeight = Dimensions.get('window').height;
const Explore = ({navigation}) => {
  const { listProducts, listProcessors, listMemories, listScreens, listStorages } = useContext(MainContext);
  const [searchText, setSearchText] = useState("");
  const [isLoading,setIsLoading] = useState(false);
  const [filterProduct, setFilterProduct]= useState(listProducts);
  const [itemViewVertical,setItemViewVertical] = useState(true);
  const [sortOption,setSortOption] = useState(0);
  const [sortPressed,setSortPressed] = useState(false);
 
  const searchList = () => {
    setIsLoading(false);
    setFilterProduct(listProducts.filter(item=>item.productName.toLowerCase().includes(searchText)));

/* 
1 -- Popular
2 -- new
3 -- price low->high
4 -- price high->low
*/
    switch(sortOption){
      case 0:
        break;
      case 1:
        setFilterProduct(filterProduct.sort((a,b) => {
          return a.rating > b.rating;
        }))
      case 2:
        setFilterProduct(filterProduct.sort((a,b) => {
          return a.releasedDate > b.releasedDate;
        }))
      case 3:
        setFilterProduct(filterProduct.sort((a,b) => {
          return a.currentPrice > b.currentPrice;
        }))
        case 4:
          setFilterProduct(filterProduct.sort((a,b) => {
            return a.currentPrice < b.currentPrice;
          }))
    }

    setIsLoading(true);
  }

  const onViewListPressed = () => {
    setItemViewVertical(!itemViewVertical);
  }

  const onSortPressed = () => {
    setSortPressed(true)
  }

  const onOptionHidePressed = () => {
    setSortPressed(false)
  }

  const onItemPressed = (item) => {
    navigation.navigate("Product Details",{item:item})
}


  useEffect(()=>{
    searchList();
  },[searchText])

  return (
    <SafeAreaView style={customStyle.container}>

      <CustomHeader onSearchText={setSearchText} onViewListPressed={onViewListPressed} onSortPressed= {onSortPressed}/>
      <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

        <View style={customStyle.container}>
          <CustomText value={'20 result(s)'} type={'header'} customStyles={{ alignSelf: 'flex-start', marginStart: 8 }} marginTop={30} />
          {isLoading?
            itemViewVertical==true?
          <ProductListVertical marginTop={24} noHeader={true} data={[filterProduct, listProcessors, listMemories, listScreens, listStorages]} />
          :
          <FlatList
                width={'100%'}
                height={"100%"}
                horizontal={false}
                marginTop={24}
                scrollEnabled={false}
                columnWrapperStyle={{gap:16}}
                contentContainerStyle={{ gap: 16, alignItems:'center' }}
                data={filterProduct}
                numColumns={2}
                initialNumToRender={3}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                    return <ProductHorizontal
                        imageLink={{ uri: item.productImageLink }}
                        onPress={()=>onItemPressed(item)}
                        name={item.productName + " " + item.modelCode}
                        curPrice={priceFormat(item.currentPrice)}
                        oldPrice={priceFormat(item.productPrice)}
                        discount={discountFormat(item.onSale)} />
                }} />
          :<></>}
        </View>
        
      </ScrollView>
      {sortPressed ?
      <>
      <CustomButton onPress={onOptionHidePressed} customStyles={styles.unselectable}/>
        <SortOption/>
        </>
        :<></>}
    </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({
  unselectable:{
    backgroundColor:'#00000020',
    position:'absolute',
    flex:1,
    width:'100%',
    height:deviceHeight,
    alignItems:'center',
    paddingTop:'40%'
  }
})