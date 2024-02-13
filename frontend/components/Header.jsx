import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';
import {colors} from "../styles/styles";
import { useNavigation, useRoute } from '@react-navigation/native';

//empty cart by default is false
const Header = ({back, emptyCart=false}) => {
    const navigate=useNavigation();
    const route=useRoute();

    const emptyCartHandler = () =>{
        console.log("Empty cart");
    };

   
  return (
    <>
    { back && (
            <TouchableOpacity
            style={{
                position:"absolute",
                left:20,
                top:40,
                zIndex:10,
            }} onPress={()=>navigate.goBack()}
            
            >
                <Avatar.Icon style={{backgroundColor:colors.color4,}}
                icon={"arrow-left"} color={ route.name==="productdetails"? colors.color2:colors.color3}/>
            </TouchableOpacity>
        )
    }
    
    <TouchableOpacity
            style={{
                position:"absolute",
                right:20,
                top:40,
                zIndex:10,
            }} 
            //if empty cart is true then call emptyCart function else do this
            onPress={emptyCart ? emptyCartHandler :()=>navigate.navigate("cart")}

            //product details page will be read here, as that page is dark color white cart will look better
            color={ route.name==="productdetails"? colors.color2:colors.color3}
            >
                <Avatar.Icon style={{backgroundColor:colors.color4,}}
                //empty cart is true
                icon={emptyCart ? "delete-outline":"cart-outline"} color={colors.color3}/>  
            </TouchableOpacity>
    </>
  );
};

export default Header ;