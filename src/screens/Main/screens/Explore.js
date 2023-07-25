import React, { useContext, useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as images from '../../../assets/images'
import customStyle from '../../../assets/stylesheets/customStyle'
import { CustomBanner, CustomButton, CustomHeader, CustomText, ProductHorizontal, ProductListVertical, ProductVertical, ProductsListHorizontal, SortOption } from '../../../components'
import { MainContext } from '../MainContext'
import { FlatList } from 'react-native-gesture-handler'
import { discountFormat, priceFormat } from '../../../utils/helper'

const deviceHeight = Dimensions.get('window').height;
const Explore = ({ navigation }) => {
  const { onGetAllProduct } = useContext(MainContext);

  const [listProducts, setListProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [showAmount, setShowAmount] = useState(6);

  const [itemViewVertical, setItemViewVertical] = useState(true);
  const [sortOption, setSortOption] = useState(0);
  const [sortPressed, setSortPressed] = useState(false);
  const [sortType, setSortType] = useState("None");

  const searchList = () => {
    setFilterProduct(listProducts.filter(item => item.productName.toLowerCase().includes(searchText)));
  }

  const onViewListPressed = () => {
    setShowAmount(6)
    setItemViewVertical(!itemViewVertical);
    console.warn("pressed")
  }

  const onSortPressed = () => {
    setSortPressed(true)
  }

  const onOptionHidePressed = () => {
    setSortPressed(false)
  }

  const onItemPressed = (item) => {
    navigation.navigate("Product Details", { item: item })
  }

  const sortListItem = async () => {
    /* 
  1 -- Popular
  2 -- new
  3 -- price low->high
  4 -- price high->low
  */
    const sortList = [...filterProduct];
    console.log("In sorting function ", sortOption)
    switch (sortOption) {
      case 0:
        break;
      case 1:
        setSortType("Popular")
        setFilterProduct(sortList.sort((a, b) => {
          return b.totalRating - a.totalRating;
        }))
        break;
      case 2:
        setSortType("Newest")
        setFilterProduct(sortList.sort((a, b) => {
          return a.releasedDate.localeCompare(b.releasedDate);
        }))
        break;
      case 3:
        setSortType("Price low to high")
        setFilterProduct(sortList.sort((a, b) => {
          return a.currentPrice - b.currentPrice;
        }))
        break;
      case 4:
        setSortType("Price high to low")
        setFilterProduct(sortList.sort((a, b) => {
          return b.currentPrice - a.currentPrice;
        }))
        break;

    }
    setFilterProduct(sortList)

  }
  const loadMore =() =>{
    setShowAmount(prev=>prev+3);
}

  const initData = async () => {
    const prodRes = await onGetAllProduct();
    setListProducts(prodRes.data);
    setFilterProduct(prodRes.data)
  }

  

  useEffect(() => {
    initData();
  }, [])


  useEffect(() => {
    searchList();
  }, [searchText])

  useEffect(() => {
    sortListItem();
  }, [sortOption])

  useEffect(()=>{
    setShowAmount(6)
  },[navigation])


  return (
    <SafeAreaView style={customStyle.container}>

      <CustomHeader onSearchText={setSearchText} onSortPressed={onSortPressed} onViewListPressed={onViewListPressed} sortType={sortType} />
      <ScrollView style={customStyle.scrollviewContainer} showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

        <View style={customStyle.container}>
          {searchText ?
            <CustomText value={filterProduct.length + ' result(s)'} type={'header'} customStyles={{ alignSelf: 'flex-start', marginStart: '5%' }} marginTop={30} />
            : <></>}
          {isLoading == false ?
            itemViewVertical == true ?
              <FlatList
                width={'100%'}
                customStyle={{flex:1}}
                scrollEnabled={false}
                marginTop={24}
                showsVerticalScrollIndicator={false}
                extraData={sortOption}
                contentContainerStyle={{ gap: 8, marginBottom: 16, alignItems: 'center' }}
                data={filterProduct.slice(0, showAmount)}
                onEndReached={() => loadMore()}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                  return <ProductVertical
                    item={item}
                    onPress={() => onItemPressed(item)}
                  />
                }} />
              :
              <FlatList
                width={'100%'}
                height={"100%"}
                horizontal={false}
                marginTop={24}
                scrollEnabled={false}
                columnWrapperStyle={{ gap: 16 }}
                contentContainerStyle={{ gap: 16, alignItems: 'center' }}
                data={filterProduct.slice(0, showAmount)}
                onEndReached={() => loadMore()}
                onEndReachedThreshold={0.5}
                numColumns={2}
                key={'#'}
                initialNumToRender={3}
                keyExtractor={item => item.productID}
                renderItem={({ item }) => {
                  return <ProductHorizontal
                    imageLink={{ uri: item.productImageLink }}
                    onPress={() => onItemPressed(item)}
                    name={item.productName + " " + item.modelCode}
                    curPrice={priceFormat(item.currentPrice)}
                    oldPrice={priceFormat(item.productPrice)}
                    discount={discountFormat(item.onSale)} />
                }} />
            : <></>}
        </View>

      </ScrollView>
      {sortPressed ?
        <>
          <CustomButton onPress={onOptionHidePressed} customStyles={styles.unselectable} />
          <SortOption setSortOption={setSortOption} setSortPressed={setSortPressed} />
        </>
        : <></>}
    </SafeAreaView>
  )
}

export default Explore

const styles = StyleSheet.create({
  unselectable: {
    backgroundColor: '#00000020',
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: deviceHeight,
    alignItems: 'center',
    paddingTop: '40%'
  }
})