import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from "../components/Header";
import { Avatar, Button } from 'react-native-paper';
import { useState } from 'react';

const Home = () => {

  const categories =[{category:"abc", _id:"1"},
  {category:"jlm", _id:"2"},
  {category:"def", _id:"3"},
  {category:"xyz", _id:"4"}
  ]
  
  const [category,setCategory]=useState("");

  const categoryButtonHandler =(id) => {
    // can do console.log(id) here just to check
    setCategory(id);
  };

  console.log(category);
 
  return (

    //just spreading of the variable. spreading means having all the properties of the object
    <View style={{...defaultStyle, flex:1}}>

      <Header />

    {/* This view is for heading row */}
    <View style={{
        paddingTop:70,
        //flexdirection is by default in column and we are changing to row
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
      }}>
      <View>
        <Text style={{fontSize:25}}>Our </Text>
        <Text style={{fontSize:25, fontWeight:"900"}}>Products</Text>
      </View>

      {/* Search Bar*/}
      <View>
        <TouchableOpacity>
          {/* elevation means box shadow */}
          <Avatar.Icon 
          icon="magnify" 
          size={50}
          color={"grey"} 
          style={{ backgroundColor:colors.color2, elevation:12}}/>
        </TouchableOpacity>
      </View>
      </View>
      {/* Heading row is over */}


      {/* Categories */}
      <View style={{
        flexDirection:"row",
        height:80,
      }}>

       <ScrollView horizontal 
       contentContainerStyle={{
        alignItems:"center",
       }}
       showsHorizontalScrollIndicator={false} >
       
       {
          //looping through categories array
          categories.map((item,index) =>(
            <Button 
            //key is unique because we have written unique id earlier for each categ
            key={item._id}
            style={{
              backgroundColor: category===item._id? colors.color1 :colors.color5,
              borderRadius:100,
              margin:5,
            }}

            //calling another function for onpress event
            onPress={()=> categoryButtonHandler(item._id)}
            >
              <Text style={{
                fontSize:12,
                color:category===item._id? colors.color2 :"grey",
              }}>{item.category}</Text>
            </Button>
          ))
        }
       </ScrollView>

      </View>

    </View>
  );
};

export default Home ;
