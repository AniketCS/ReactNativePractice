import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colors } from '../styles/styles'
import { Button } from 'react-native-paper'

{/** these are all required for product card */}
const ProductCard = ({stock, name, price, image, id, addToCardHandler, i, navigate}) => {
  return (
   <TouchableOpacity 
   activeOpacity={1}
   onPress={()=> navigate.navigate("productdetails", {id})}>

    {/** if even index then color 1 else color 2 */}

    <View style={{ 
        elevation:5, 
        width:220, 
        alignItems:"center", 
        justifyContent:"space-between", 
        margin:20, 
        borderRadius: 20, 
        height:400, 
        backgroundColor:i%2===0? colors.color1 : colors.color2,
        }}
        >  

        <Image source = {{
           uri:image,
        }}

        style={{
            width:"90%",
            height:200,
            resizeMode:"contain",
            position:"absolute",
            left:40,
            top:105,
        }}
        />

        <View style={{
            // flexDirection:"row",
            padding:20,
            justifyContent:"space-between",
            width:"100%"
        }}>
            <Text numberOfLines={2} style ={{
                color:i%2===0? colors.color2 :colors.color3,
                fontSize:25,
                fontWeight:"300"
            }}>
                {name}
            </Text>

            <Text numberOfLines={2} style ={{
                color:i%2===0? colors.color2 :colors.color3,
                fontSize:20,
                fontWeight:"700"
            }}>
                ${price}
            </Text>
        </View>

        <TouchableOpacity style={{
            backgroundColor:i%2===0?colors.color2 :colors.color3,
            borderRadius:0,
            borderBottomRightRadius:20,
            borderBottomLeftRadius:20,
            width:"100%",

        }}>
            <Button 
            onPress={() => addToCardHandler(id,stock)}
            textColor={i%2===0? colors.color1 : colors.color2}
            >
                Add to Cart
            </Button>
        </TouchableOpacity>
    </View>
   </TouchableOpacity>
  )
}

export default ProductCard