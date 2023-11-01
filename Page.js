import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import { Image } from 'react-native';
import { Button} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';


export default function App() {
    return (
      <View style={styles.container}>
    

        <StatusBar style="auto" />
          <View style={styles.style1}>
        <View>
            <Image source={require('./assets/book.jpg')}
            style={styles.pic}>
            </Image> </View>

  <View style={styles.Text}>
<Text>
Nguyên hàm tích phân và ứng dụng<br/><br/>
Cung cấp bởi Tiki Trading <br/><br/>
</Text>
<Text style={{color:'red',fontWeight:'bold',fontSize:20}}>
141.800đ
</Text>
<TouchableOpacity style={styles.btn1}>
        <Text style={{fontWeight:'bold' , fontSize:20, textAlign:'center'}}>-</Text>
    </TouchableOpacity>
<TextInput style={{borderColor:'black',borderWidth:'1px',width:30, position:'absolute',left:33,top:102,textAlign:'center'}}></TextInput>
<TouchableOpacity style={styles.btn2}>
        <Text style={{fontWeight:'bold' , fontSize:20, textAlign:'center'}}>+</Text>
    </TouchableOpacity>
  </View>
<View style={styles.txt2}>
    <Text>Mã giảm giá đã lưu</Text>
    <Pressable style={styles.link}> Xem tại đây</Pressable>
</View>

<View style={styles.magiamgia}>
    
   <View style={styles.magiamgia1}>

   </View>
   <View>
        <Text style={{fontWeight:'bold'}}>Mã giảm giá</Text>
    </View>

</View>
    <View>
        <TouchableOpacity style={styles.btn3}>
            <Text style={{color:'white',fontWeight:'bold'}}>Áp dụng </Text>
            </TouchableOpacity>
    </View>

          </View>

          <View style={styles.style2}>
         </View>

  <View style={styles.style3}>
  <View style={styles.textstyle3}>
     <Text style={{fontWeight:'bold'}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
        <Pressable style={{color:'blue'}}>Nhập tại đây!</Pressable>
         
          </View>
</View>

          <View style={styles.style4}>
  </View>


  <View style={styles.style5}>
   <View style={styles.tamtinh}>
    <Text style={{fontWeight:'bold', fontSize:20}} >Tạm tính</Text>
   </View>
   <View style={styles.tien}>
    <Text style={{fontWeight:'bold', fontSize:20,color:'red'}} >141.800đ</Text>
   </View>


  </View>

  <View style={styles.style6}>
  </View>

  <View style={styles.style7}>
  <View style={styles.thanhTien}>
    <View>
<Text style={{fontWeight:'bold', fontSize:20}} >Thành tiền</Text>
</View>
<View style={styles.tien1}>
    <Text style={{fontWeight:'bold', fontSize:20,color:'red'}} >141.800đ</Text>
   </View>
   </View>
<View>

        
</View>
<TouchableOpacity style={styles.btn5}>
    <Text style={{textAlign:'center',padding:12, color:'white',fontWeight:'bold'}}>TIẾN HÀNH ĐẶT HÀNG </Text>
    </TouchableOpacity>

    </View>


      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundImage:'linear-gradient(to bottom,white, cyan)'
    },
    txt2:{
    position:'absolute',
    top:160,
    left:25,
    width:1000
    },
    btn5:{
     backgroundColor:'#E53935',
    height:50,
    width:340,
    position:'absolute',
    left:35,
    top :120
    },
    btn3:{
       backgroundColor:'#0A5EB7',
       width:75,
       height:40,
       padding:8,
       position:'absolute',
       top:200,
       left:250
    },

    tien:{
        position:'absolute',
        top:30,
        left:300
    },
    tamtinh:{
     position:'absolute',
     top:30,
     left:20
    },
    thanhTien:{
        position:'absolute',
        top:75,
        left:20,
        
      },
      tien1:{
        position:'absolute',
        top:1,
        left:300
      },
    magiamgia:{
      borderColor:'black',
      borderWidth:'1px',
      width:200,
      height:45,
      position:'absolute',
      top:200,
      padding:10,
      flexDirection:'row'
    },
    magiamgia1:{
backgroundColor:'#F2DD1B',
height:25,
width: 50,


    },
    style1:{
  flex:1.5,
  backgroundColor:'white'
    },
   pic:{
    position:'absolute',
    width:150,
    height:150,
    left:10,
    top: 10
    },
    link:{
        position:'absolute',
       
        left:150,
   color:'blue'
    },
Text:{
    position:'absolute',
    left:165
},
btn1:{
    backgroundColor:'gray',
    width:'30px'
},
btn2:{
    backgroundColor:'gray',
    width:'30px',
    position:'absolute',
    left:65,
    top:100

},
textstyle3:{
    
    position:'absolute',
    top:30,
    left:20,
    flexDirection:'row'
},
    style2:{
        flex:0.2,
        backgroundColor:'gray'
    },
    style3:{
        flex:0.5,
        backgroundColor:'white',

    },
 
    
    style4:{
        flex:0.2,
        backgroundColor:'gray'
    },

    
    style5:{
        flex:0.5,
        backgroundColor:'white'
      },
      style6:{
        flex:0.5,
        backgroundColor:'gray'
    },
    style7:{
        flex:0.8,
        backgroundColor:'white'
      },











  });
  