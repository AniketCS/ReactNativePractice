import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper';
import { colors } from '../styles/styles';


const Footer = ({activeRoute="home"}) => {
    
    const navigate=useNavigation();
    const isAuthenticated=false;

    //  the loading represents whether the db is connected
    const loading=false;

    const navigationHandler=(key)=>{
        switch(key) {
            case 0:
                navigate.navigate("home");
                break;
            case 1:
                navigate.navigate("cart");
                break;
            case 2:
                if(isAuthenticated) navigate.navigate("profile");
                else navigate.navigate("login");
            default:
                navigate.navigate("home");
                break;
        }
    };

    const AvatarOptions ={

    };

  return (
    loading=== false && (

    <View style={{
        backgroundColor:colors.color1,
        borderTopLeftRadius:120,
        borderTopRightRadius:120,
    }}>
       <View style={{
        flexDirection:"row",
        justifyContent:"space-evenly",
       }}>

        {/* this is for shopping icon */}
        <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={()=> navigationHandler(1)}>
         <Avatar.Icon 
        color={colors.color2}
        size={50}
        style={{
            backgroundColor:colors.color1
        }}
        icon={activeRoute=="cart"?"shopping" : "shopping-outline"}
        />
        </TouchableOpacity>

        {/* this is for account face icon */}
        <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={()=> navigationHandler(2)}>
         <Avatar.Icon 
        color={colors.color2}
        size={50}
        style={{
            backgroundColor:colors.color1
        }}
        icon={activeRoute=="profile"?"account" : "account-outline"}
        />
        </TouchableOpacity>
        
       </View>

       {/* this view is for the circular gap in the center */}
       <View style={{
        position:"absolute",
        width:80,
        height:80,
        backgroundColor:colors.color2,
        borderRadius:100,
        justifyContent:"center",
        alignItems:"center",
        top:-50,
        alignSelf:"center"
       }}>

        <View style={{
            borderRadius:100,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <TouchableOpacity 
        activeOpacity={0.8} 
        onPress={()=> navigationHandler(0)}>
         <Avatar.Icon 
        color={colors.color2}
        size={50}
        style={{
            backgroundColor:colors.color1
        }}
        icon={activeRoute=="home"?"home" : "home-outline"}
        />

        </TouchableOpacity>
        </View>

       </View>
    </View>
  ))
}

export default Footer ;