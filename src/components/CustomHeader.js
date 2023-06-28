import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as images from '../assets/images/'
import CustomInput from './CustomInput'
import CustomImageButton from './CustomImageButton'
import CustomImage from './CustomImage'
import CustomText from './CustomText'

const CustomHeader = ({ type, onFavoritePress, onNotificationPress }) => {
  return (
    <>
      {type == 'home' ?
        <View style={styles.homeContainer}>
          <CustomInput imageLink={images.ic_search} type={'tertiary'} placeholder={"search"} width={'70%'} />
          <CustomImageButton type={'inputIcon'} imageLink={images.ic_favorite} onPress={onFavoritePress}/>
          <CustomImageButton type={'inputIcon'} imageLink={images.ic_notification} onPress={onNotificationPress} />
        </View>
        :
        <View>
          <CustomInput imageLink={images.ic_search} type={'tertiary'} placeholder={"search"} width={'90%'} />
          <View style={styles.sortContainer}>
            <Pressable style={styles.itemContainer}>
              <CustomImage imageLink={images.ic_filter} type={'searchBarIcon'} />
              <CustomText value={"Filters"} type={'subtitle'} />
            </Pressable>
            <Pressable style={styles.itemContainer}>
              <CustomImage imageLink={images.ic_sort} type={'searchBarIcon'} />
              <CustomText value={"Popular"} type={'subtitle'} />
            </Pressable>
            <Pressable>
              <CustomImage imageLink={images.ic_view_list} type={'searchBarIcon'} />
            </Pressable>
          </View>
        </View>}
    </>

  )
}

export default CustomHeader

const styles = StyleSheet.create({
  homeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 100,
    justifyContent: 'space-between',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
    marginBottom:8
  }
})