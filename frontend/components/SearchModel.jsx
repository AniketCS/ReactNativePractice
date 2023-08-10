import { View, Text, Platform, StatusBar, SafeAreaView, ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native'
import React, { useEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import { colors } from '../styles/styles';
import { Headline, Searchbar } from 'react-native-paper';



const SearchModel = ({
  searchQuery,
  setActiveSearch,
  setSearchQuery,
  products=[],
}) => {

  const navigate =useNavigation() ;

  {/**creating a function for when user clicks back */}
  const backAction =() => {
    setSearchQuery("");
    setActiveSearch(false);   
    return true ;  {/** without this app closes when pressing on back */}
  };

  useEffect (()=>{
    BackHandler.addEventListener("hardwareBackPress", backAction);

    return () =>{
      BackHandler.removeEventListener("hardwareBackPress", backAction);
    }
  });

  return (
    <>
    
    <View style={{
      width:"100%",
      height:"100%",
      position:"absolute",
      top:0,
      zIndex:100,
      backgroundColor:colors.color2,
      padding:35,
      paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
    }
    }>
    <SafeAreaView>
      {/**search bar was taken from paper library  and like react has onChange, react native has onChangeText*/}
      <Searchbar 
      placeholder='Search here' onChangeText={(query) => setSearchQuery(query)}
      value={searchQuery}
      style={{
        marginTop:20
      }}
      />
      <ScrollView>
        <View style={{
            paddingVertical:40,
            paddingHorizontal:10,
          }}>
          
          {/**we will map through all products*/}
          { 
            products.map(i=> (
              <SearchItem key={i._id} 
              imgSrc={i.images[0]?.url}  
              name={i.name}  
              price={i.price}
              handler= {
                ()=> navigate.navigate("productdetails",{id:onabort._id})
              }/>
            ))
          }
        </View>
      </ScrollView>
    </SafeAreaView>
    </View>
    </>
  );
};

// {/**we will receive all the parameters to search the item */}
const SearchItem =({price,name,imgSrc,handler}) => (
  <TouchableOpacity onPress={handler}>
<View 
style= {{
  padding:20,
  borderRadius:10,
  backgroundColor:colors.color2,elevation:5,
  width:"100%",
  alignItems:"center",
  justifyContent:"flex-end",
  flexDirection:"row",
  marginVertical:30,
}}
>

<Image 
source={{
  uri:imgSrc,
}}

style={{
  width:80,
  height:80,
  position:"absolute",
  resizeMode:"contain",
  top:-15,
  left:10,
  borderTopRightRadius:20,
  borderBottomRightRadius:20,
}}
/>

<View style={{
  width:"80%",
  paddingHorizontal:30
}}>
  {/* *number of lines is so that in case product name is very huge remaining will show .... in first line */}
  <Text numberOfLines={1}> {name}</Text>
  <Headline 
   numberOfLines={1}
  style={{
    fontWeight:"900",
  }}> ${price}</Headline>

</View>
</View>
  </TouchableOpacity>
)

export default SearchModel;