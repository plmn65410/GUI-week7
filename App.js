
import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default function App(){
  return(
  <View style={Styles.container}>    
    <Text style={Styles.text}>
      Hello world 
      </Text>
        <Image style={Styles.image}
            source={{uri:'https://res.cloudinary.com/teepublic/image/private/s--kWfQw5-G--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffb81c,e_outline:48/co_ffb81c,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1546010902/production/designs/3839547_0.jpg'}}/>
        <Image style={Styles.image}
            source={{uri:'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'}}/>
        <Image style={Styles.image}
            source={{uri:'https://pbs.twimg.com/media/DXznMv6XkAUPaQG.jpg'}}/>
  </View>
  )
}
const Styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'Center',
    alignItems:'Center',
    backgroundColor:'#ff8000',
  },
  text:{
    fontSize:20,
    color:'red',
    backgroundColor:'black',
    padding:20,
  },
  image:{
    width:250,height:250
  }


})
//export default App;