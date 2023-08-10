import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { defaultStyle, colors } from '../styles/styles';
import Header from "../components/Header";
import { Avatar, Button } from 'react-native-paper';
import { useState } from 'react';
import SearchModel from '../components/SearchModel';
import ProductCard from '../components/ProductCard';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';


const categories =[{category:"abc", _id:"1"},
  {category:"jlm", _id:"2"},
  {category:"def", _id:"3"},
  {category:"xyz", _id:"4"}
  ]

  {/** array for products in which each product has an array of images */}
const products=[{
  price:150,
  name:"Tennis Raquet",
  _id:"randomid",
  images:[{
    url:"https://media.istockphoto.com/id/1064972966/photo/3d-rendering-a-single-tennis-racquet-lying-with-a-yellow-ball-on-white-background.webp?b=1&s=612x612&w=0&k=20&c=T6hk2NZS-3Bz_RKDjiYH1XkGIJdJfSrgABEzPIQbijY=" ,

  }],
  stock:23,
},
{
  price:250,
  name:"Cricket Bat",
  _id:"randomid2",
  images:[{
    url:"https://media.istockphoto.com/id/505125296/photo/wooden-cricket-bat-and-ball-on-a-white-background.jpg?s=612x612&w=0&k=20&c=b54YfksQfdM_oExjMx6LU5myGkY6gveVqkPvM2CeWYY=" ,

  }],
  stock:23,
}
]; 


const Home = () => {

  const [category,setCategory]=useState("");
  const [activeSearch,setActiveSearch]= useState(false);  {/*whenever user will click on this it will get set to true*/}
  const [searchQuery, setSearchQuery] =useState("") ;  {/*initially empty*/}


  const categoryButtonHandler =(id) => {
    // can do console.log(id) here just to check
    setCategory(id);
  };
  

  const addToCardHandler =(id) => {
    console.log("Add to cart", id)
  };
  
  const navigate=useNavigation();
 
  return (
   <>
   {
    activeSearch && (
      <SearchModel  
     searchQuery={searchQuery} 
     setSearchQuery={setSearchQuery} 
     setActiveSearch={setActiveSearch}
     products={products}
     />
    )
   }
     

    {/*just spreading of the variable. spreading means having all the properties of the object*/}
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
        <Text style={{fontSize:25, fontWeight:"700"}}>Sports Vista Mart</Text>
        {/* <Text style={{fontSize:25, fontWeight:"900"}}>Products</Text> */}
      </View>

      {/* Search Bar*/}
      <View> 
        { /*whatever was previously there, opposite will happen. When active search is true, passing it again will make it false*/}
        <TouchableOpacity onPress ={() =>setActiveSearch((prev) =>!prev) }>   
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

      {/**products */}

      <View style={{flex:1}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            products.map(( item, index)=>(
              <ProductCard 
              stock ={item.stock}
              name={item.name}
              price={item.price}
              image={item.images[0]?.url}
              id={item._id}
              addToCardHandler={addToCardHandler} 
              i={index}
              key={item._id}
              navigate={navigate}
              />
            ))
          }
        </ScrollView>
      </View>
    </View>

    <Footer activeRoute={"home"}/>
    </>
  );
};

export default Home ;
