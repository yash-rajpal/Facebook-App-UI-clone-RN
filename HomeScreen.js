// // // // /**
// // // //  * Sample React Native App
// // // //  * https://github.com/facebook/react-native
// // // //  *
// // // //  * @format
// // // //  * @flow strict-local
// // // //  */

// // // // import React from 'react';
// // // // import {
// // // //   SafeAreaView,
// // // //   StyleSheet,
// // // //   ScrollView,
// // // //   View,
// // // //   Text,
// // // //   StatusBar,
// // // // } from 'react-native';

// // // // import {
// // // //   Header,
// // // //   LearnMoreLinks,
// // // //   Colors,
// // // //   DebugInstructions,
// // // //   ReloadInstructions,
// // // // } from 'react-native/Libraries/NewAppScreen';
// // // // import IoniconsI from 'react-native-vector-icons/Ionicons'
// // // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// // // // import 'react-native-gesture-handler';
// // // // import { createMaterialTopTabNavigator } from 'react-navigation-tabs';


// // // // export default class Home extends React.Component{
// // // //     render(){
// // // //         return(
// // // //             <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
// // // //                 <Text>
// // // //                     This is HomeScreen
// // // //                 </Text>
// // // //             </View>
// // // //         )
// // // //     }
// // // // }

// // // import React, { Component } from 'react';
// // // import {
// // //   StyleSheet,
// // //   Text,
// // //   View,
// // //   TouchableOpacity,
// // //   Image,
// // //   FlatList,
// // // } from 'react-native';
// // // import apidata from './apidata.json'
// // // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// // // import IoniconsI from 'react-native-vector-icons/Ionicons'
// // // import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
// // // import EvilIconsI from 'react-native-vector-icons/EvilIcons'



// // // export default class Home extends Component {

// // //   constructor(props) {
// // //     super(props);
// // //     this.state = {
// // //       datasource:apidata
// // //     };
// // //   }

// // //   render() {
// // //     return (
// // //       <View style={styles.container}>
// // //         <FlatList style={styles.list}
// // //           data={this.state.datasource}
// // //           keyExtractor= {(item) => {
// // //             return item.id;
// // //           }}
// // //           ItemSeparatorComponent={() => {
// // //             return (
// // //               <View style={styles.separator}/>
// // //             )
// // //           }}
          
// // //           renderItem={(post) => {
// // //             const item = post.item;
// // //             return(
// // //                 <View style={{width:wp('100%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
// // //             <View style={{flex:1}}>

// // //                 <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
// // //                     {/* header area */}
// // //                     <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
// // //                     <IoniconsI name="ios-person" size={wp('10%')} color="black" />
// // //                     </View>
// // //                     <View style={{marginLeft:wp('3%'),}}>
// // //                         <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
// // //                             Post Topic
// // //                         </Text>
// // //                         <View style={{flexDirection:'row'}}>
// // //                         <Text style={{fontSize:wp('3%'),color:'grey'}}>
// // //                         Yesterday at 1:16 PM. </Text>
// // //                         <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
// // //                         </View>
// // //                     </View>
// // //                     <View style={{flex:1,alignItems:'flex-end'}}>
// // //                         <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
// // //                     </View>
// // //                 </View>

// // //                 <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
// // //                     <Text style={{fontSize:wp('4%')}}>
// // //                         {item.post}
// // //                     </Text>
// // //                 </View>


// // //                 {/* for Icons and image */}
// // //                 <View style={{width:wp('100%'),justifyContent:'flex-end',flex:1}}>
// // //                     {/* for Image */}
// // //                     <View>
// // //                     </View>

// // //                     {/* for Icons */}
// // //                     <View style={{width:wp('100%'),height:hp('8%'),flexDirection:'row',justifyContent:'space-around'}}>

// // //                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
// // //                             <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
// // //                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
// // //                         </View>

// // //                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
// // //                             <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
// // //                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text>
// // //                         </View>

// // //                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
// // //                             <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
// // //                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
// // //                         </View>

// // //                     </View>
// // //                 </View>

// // //             </View>

// // //                 </View>
// // //             )
// // //           }}/>
// // //       </View>
// // //     );
// // //   }
// // // }

// // // const styles = StyleSheet.create({
// // //   container:{
// // //     flex:1,
// // //     // marginTop:20,
// // //     backgroundColor:"#E6E6E6",

// // //   },
// // //   list: {
// // //     // paddingHorizontal: 17,
// // //     backgroundColor:"#E6E6E6",
// // //   },
// // //   separator: {
// // //     marginTop: hp('1%'),
// // //   },
// // //   /* card ***/
// // //   card:{
// // //     shadowColor: '#00000021',
// // //     shadowOffset: {
// // //       width: 2
// // //     },
// // //     shadowOpacity: 0.5,
// // //     shadowRadius: 4,
// // //     marginVertical: 8,
// // //     backgroundColor:"white"
// // //   },
// // //   cardHeader: {
// // //     paddingVertical: 17,
// // //     paddingHorizontal: 16,
// // //     borderTopLeftRadius: 1,
// // //     borderTopRightRadius: 1,
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //   },
// // //   cardContent: {
// // //     paddingVertical: 12.5,
// // //     paddingHorizontal: 16,
// // //   },
// // //   cardFooter:{
// // //     flexDirection: 'row',
// // //     justifyContent: 'space-between',
// // //     paddingTop: 12.5,
// // //     paddingBottom: 25,
// // //     paddingHorizontal: 16,
// // //     borderBottomLeftRadius: 1,
// // //     borderBottomRightRadius: 1,
// // //     backgroundColor:"#EEEEEE",
// // //   },
// // //   cardImage:{
// // //     flex: 1,
// // //     height: 150,
// // //     width: null,
// // //   },
// // //   /* card components ***/
// // //   title:{
// // //     fontSize:18,
// // //     flex:1,
// // //   }, 
// // //   description:{
// // //     fontSize:15,
// // //     color:"#888",
// // //     flex:1,
// // //     marginTop:5,
// // //     marginBottom:5,
// // //   },
// // //   time:{
// // //     fontSize:13,
// // //     color: "#808080",
// // //     marginTop: 5
// // //   },
// // //   icon: {
// // //     width:25,
// // //     height:25,
// // //   },
// // //   iconData:{
// // //     width:15,
// // //     height:15,
// // //     marginTop:5,
// // //     marginRight:5
// // //   },
// // //   timeContainer:{
// // //     flexDirection:'row'
// // //   },
// // //   /* social bar ***/
// // //   socialBarContainer: {
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     flexDirection: 'row',
// // //     flex: 1
// // //   },
// // //   socialBarSection: {
// // //     justifyContent: 'center',
// // //     alignItems:'center',
// // //     flexDirection: 'row',
// // //     flex: 1,
    
// // //   },
// // //   socialBarlabel: {
// // //     marginLeft: 8,
// // //     alignSelf: 'flex-end',
// // //     justifyContent: 'center',
// // //     alignItems:'center',
// // //   },
// // //   socialBarButton:{
// // //     flexDirection: 'row',
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
    
// // //   }
// // // });

// // import React, { Component } from 'react';
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   TouchableOpacity,
// //   Image,
// //   FlatList,
// //   Button,
// //   TextInput
// // } from 'react-native';
// // import apidata from './apidata.json'
// // import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// // import IoniconsI from 'react-native-vector-icons/Ionicons'
// // import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
// // import EvilIconsI from 'react-native-vector-icons/EvilIcons'
// // import Icon from "react-native-vector-icons/MaterialIcons"
// // import Modal from 'react-native-modal';




// // export default class Home extends Component {

// //   constructor(props) {
// //     super(props, {
// //       scrollOffset: null,
// //     });
// //     this.state = {
// //       datasource:apidata,
// //     //   visible: false,
// //         visible : [false,false,false,false,false,false,false,false,false,false],
// //       datasource1: null,
// //       end: false,
// //       Direction: ['down'],
// //       c: 0
// //     };
// //     this.scrollViewRef = React.createRef();
// //   }
// //   open = (index) =>{ 
// //     var arr = this.state.visible
// //     arr[index] = true
// //     this.setState({visible: arr,Direction: ['down']})
// // };
// //   close = () => {
// //       var arr = [false,false,false,false,false,false,false,false,false,false]
// //       this.setState({visible: arr,Direction: ['down']})
// //     };
// //   isVisible = () => this.state.visible;
// //   handleOnScroll = event => {
// //     console.log("sajgfdasjghdfaghsfdhgafdgsf",event.nativeEvent.contentOffset.y)
// //     if(event.nativeEvent.contentOffset.y === 0)
// //     this.setState({
// //       scrollOffset: event.nativeEvent.contentOffset.y,
// //       c: 0
// //     });
// //     // if(event.nativeEvent.contentOffset.y == 0){

// //     // }
// //   };
// //   handleScrollTo = p => {
// //     console.log(p)
// //     if (this.scrollViewRef.current) {
// //       console.log(this.scrollViewRef.current.scrollTo(p))
// //       this.scrollViewRef.current.scrollTo(p);
// //     }
// //   };
// //   end = () => {
// //       console.log(this.state.end)
// //       this.state.c++;
// //       console.log(this.state.c)
// //       if(this.state.c>1){
// //         this.setState({
// //           scrollOffset: 0,
// //           Direction: ['down','up']
// //         })
// //       }
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <FlatList style={styles.list}
// //           data={this.state.datasource}
// //           keyExtractor= {(item) => {
// //             return item.id;
// //           }}
// //           // ItemSeparatorComponent={() => {
// //           //   return (
// //           //     <View style={styles.separator}/>
// //           //   )
// //           // }}
          
// //           renderItem={(post) => {
// //             const item = post.item;
// //             return(
// //                 <View style={{width:wp('90%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
// //             <View style={{flex:1}}>

// //                 <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
// //                     {/* header area */}
// //                     <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
// //                     <IoniconsI name="ios-person" size={wp('10%')} color="black" />
// //                     </View>
// //                     <View style={{marginLeft:wp('3%'),}}>
// //                         <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
// //                             Post Topic
// //                         </Text>
// //                         <View style={{flexDirection:'row'}}>
// //                         <Text style={{fontSize:wp('3%'),color:'grey'}}>
// //                         Yesterday at 1:16 PM. </Text>
// //                         <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
// //                         </View>
// //                     </View>
// //                     <View style={{flex:1,alignItems:'flex-end'}}>
// //                         <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
// //                     </View>
// //                 </View>

// //                 <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
// //                     <Text style={{fontSize:wp('4%')}}>
// //                         {item.post}
// //                     </Text>
// //                 </View>


// //                 {/* for Icons and image */}
// //                 <View style={{width:wp('100%'),justifyContent:'flex-end',flex:1}}>
// //                     {/* for Image */}
// //                     <View>
// //                     </View>

// //                     {/* for Icons */}
// //                     <View style={{width:wp('90%'),height:hp('8%'),flexDirection:'row',justifyContent:'space-around'}}>

// //                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
// //                             <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
// //                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
// //                         </View>
// //                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
// //                           <View style={{flex:1}}>
// //                         <Button title="Comments" 
// //                         // onPress = {this.open}
// //                         onPress={() => {
// //                           // var pro = new Promise((resolve,reject) => {
// //                             this.setState({
// //                               datasource1:item.comments,
// //                             })
// //                             this.open(post.index)
// //                           //   if(this.state.datasource1 != null){
// //                           //     resolve(this.state.datasource1)
// //                           //   }
// //                           // })
// //                           //   pro.then((data) => {
// //                           //     console.log('sdnvasv',this.state.datasource1)
// //                           //     this.open()
// //                           //   })
// //                         }}
// //                          />

// //                           <Modal
// //                             isVisible={this.state.visible[post.index]}
// //                             onSwipeComplete={this.close}
// //                             swipeDirection={this.state.Direction}
// //                             scrollTo={this.handleScrollTo}
// //                             scrollOffset={this.state.scrollOffset}
// //                             // scrollOffsetMax={1000} // content height - ScrollView height
// //                             propagateSwipe={true}
// //                             style={styles.modal}>
// //                               {/* <View style={{borderRadius:30,flex:1}}> */}
// //                             <View style={styles.scrollableModal}>
// //                             <View style={styles.header}>
// //                               <Icon name = "navigate-before" size={40} onPress={this.close} color="#1f5bc2"/>
// //                               <Icon name = "thumb-up" size={30} color="#1f5bc2"/>
// //                             </View>
// //                               <FlatList
// //                                 // ref={this.scrollViewRef}
// //                                 onScrollEndDrag={this.end}
// //                                 onScroll={this.handleOnScroll}
// //                                 data={this.state.datasource1}
// //                                 renderItem={({ item }) => {
// //                                   let mainContentStyle;
// //                               return(
// //                                   <View style={styles.container}>
// //                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
// //                                   <View style={styles.content}>
// //                                     <View style={mainContentStyle}>
// //                                       <View style={styles.text}>
// //                                       <Text style={styles.name}>Person</Text>
// //                                       <View>
// //                                         <Text>{item}</Text>
// //                                       </View>
// //                                       </View>
// //                                       <View style={{flexDirection:'row'}}>
// //                                       <Text style={styles.timeAgo}>
// //                                         2hr
// //                                       </Text>
// //                                       <TouchableOpacity>
// //                                       <Text style={styles.timeAgo}>
// //                                         Like
// //                                       </Text>    
// //                                       </TouchableOpacity>              
// //                                       <TouchableOpacity>
// //                                       <Text style={styles.timeAgo}>
// //                                         Reply
// //                                       </Text>
// //                                       </TouchableOpacity>
// //                                       </View>
// //                                     </View>
// //                                   </View>
// //                                 </View>
// //                                 )}}
// //                                 keyExtractor={(item, index) => index}
// //                               />
// //                               <View style={styles.footer}>
// //                               <View style={styles.inputContainer}>
// //                                 <TextInput style={styles.inputs}
// //                                     placeholder="Write a Comment..."
// //                                     underlineColorAndroid='transparent'
// //                                     onChangeText={(name_address) => this.setState({name_address})}/>
// //                               </View>

// //                                 <TouchableOpacity style={styles.btnSend}>
// //                                   {/* <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  /> */}
// //                                   <Icon name="chevron-right" size={40} color="white"/>
// //                                 </TouchableOpacity>
// //                             </View>
// //                             </View>
                          
// //                             {/* </View> */}
// //                           </Modal>
// // </View>
// //                             {/* <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
// //                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text> */}
// //                         </View>

                         
// //                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
// //                             <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
// //                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
// //                         </View>
// //                     </View>
// //                 </View>

// //             </View>

// //                 </View>
// //             )
// //           }}/>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container:{
// //     flex:1,
// //     // marginTop:20,
// //     backgroundColor:"#E6E6E6",

// //   },
// //   modal: {
// //     justifyContent: 'flex-end',
// //     marginTop: 30,
// //     marginRight: 10,
// //     marginLeft: 10,
// //     marginBottom : 0
// //   },
// //   scrollableModal: {
// //     // height: 600,
// //     flex:1,
// //     height: hp("90%"),
// //     backgroundColor:'white',
// //     borderRadius:30
// //   },
// //   container: {
// //     padding: 16,
// //     flexDirection: 'row',
// //     borderBottomWidth: 1,
// //     borderColor: "#FFFFFF",
// //     alignItems: 'flex-start'
// //   },
// //   avatar: {
// //     width:50,
// //     height:50,
// //     borderRadius:25,
// //   },
// //   text: {
// //     marginBottom: 5,
// //     // flexDirection: 'row',
// //     flexWrap:'wrap'
// //   },
// //   content: {
// //     flex: 1,
// //     marginLeft: 16,
// //     marginRight: 0
// //   },
// //   mainContent: {
// //     marginRight: 60
// //   },
// //   img: {
// //     height: 50,
// //     width: 50,
// //     margin: 0
// //   },
// //   attachment: {
// //     position: 'absolute',
// //     right: 0,
// //     height: 50,
// //     width: 50
// //   },
// //   separator: {
// //     height: 1,
// //     backgroundColor: "#CCCCCC"
// //   },
// //   timeAgo:{
// //     fontSize:12,
// //     color:"#696969",
// //     marginRight:10
// //   },
// //   timeAgo1:{
// //     fontSize:12,
// //     color:"#FF3031",
// //     marginRight:10
// //   },
// //   name:{
// //     fontSize:16,
// //     color:"#1f5bc2",
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent:'space-between',
// //     height:40,
// //     paddingHorizontal:10,
// //     padding:5,
// //     alignItems:'center',
// //     borderRadius:30,
// //     paddingTop:20
// //   },  
// //   footer:{
// //     flexDirection: 'row',
// //     height:60,
// //     backgroundColor: '#eeeeee',
// //     paddingHorizontal:10,
// //     padding:5,
// //     alignItems:'center'
// //   },
// //   btnSend:{
// //     backgroundColor:"#1f5bc2",
// //     width:40,
// //     height:40,
// //     borderRadius:360,
// //     alignItems:'center',
// //     justifyContent:'center',
// //   },
// //   iconSend:{
// //     width:30,
// //     height:30,
// //     alignSelf:'center',
// //   },
// //   inputContainer: {
// //     borderBottomColor: '#F5FCFF',
// //     backgroundColor: '#FFFFFF',
// //     borderRadius:30,
// //     borderBottomWidth: 1,
// //     height:40,
// //     flexDirection: 'row',
// //     alignItems:'center',
// //     flex:1,
// //     marginRight:10,
// //   },
// //   inputs:{
// //     height:40,
// //     marginLeft:16,
// //     borderBottomColor: '#FFFFFF',
// //     flex:1,
// //   },
// //   // list: {
// //   //   // paddingHorizontal: 17,
// //   //   backgroundColor:"#E6E6E6",
// //   // },
// //   // separator: {
// //   //   marginTop: hp('1%'),
// //   // },
// //   // /* card */
// //   // card:{
// //   //   shadowColor: '#00000021',
// //   //   shadowOffset: {
// //   //     width: 2
// //   //   },
// //   //   shadowOpacity: 0.5,
// //   //   shadowRadius: 4,
// //   //   marginVertical: 8,
// //   //   backgroundColor:"white"
// //   // },
// //   // cardHeader: {
// //   //   paddingVertical: 17,
// //   //   paddingHorizontal: 16,
// //   //   borderTopLeftRadius: 1,
// //   //   borderTopRightRadius: 1,
// //   //   flexDirection: 'row',
// //   //   justifyContent: 'space-between',
// //   // },
// //   // cardContent: {
// //   //   paddingVertical: 12.5,
// //   //   paddingHorizontal: 16,
// //   // },
// //   // cardFooter:{
// //   //   flexDirection: 'row',
// //   //   justifyContent: 'space-between',
// //   //   paddingTop: 12.5,
// //   //   paddingBottom: 25,
// //   //   paddingHorizontal: 16,
// //   //   borderBottomLeftRadius: 1,
// //   //   borderBottomRightRadius: 1,
// //   //   backgroundColor:"#EEEEEE",
// //   // },
// //   // cardImage:{
// //   //   flex: 1,
// //   //   height: 150,
// //   //   width: null,
// //   // },
// //   // /* card components */
// //   // title:{
// //   //   fontSize:18,
// //   //   flex:1,
// //   // }, 
// //   // description:{
// //   //   fontSize:15,
// //   //   color:"#888",
// //   //   flex:1,
// //   //   marginTop:5,
// //   //   marginBottom:5,
// //   // },
// //   // time:{
// //   //   fontSize:13,
// //   //   color: "#808080",
// //   //   marginTop: 5
// //   // },
// //   // icon: {
// //   //   width:25,
// //   //   height:25,
// //   // },
// //   // iconData:{
// //   //   width:15,
// //   //   height:15,
// //   //   marginTop:5,
// //   //   marginRight:5
// //   // },
// //   // timeContainer:{
// //   //   flexDirection:'row'
// //   // },
// //   // /* social bar */
// //   // socialBarContainer: {
// //   //   justifyContent: 'center',
// //   //   alignItems: 'center',
// //   //   flexDirection: 'row',
// //   //   flex: 1
// //   // },
// //   // socialBarSection: {
// //   //   justifyContent: 'center',
// //   //   alignItems:'center',
// //   //   flexDirection: 'row',
// //   //   flex: 1,
    
// //   // },
// //   // socialBarlabel: {
// //   //   marginLeft: 8,
// //   //   alignSelf: 'flex-end',
// //   //   justifyContent: 'center',
// //   //   alignItems:'center',
// //   // },
// //   // socialBarButton:{
// //   //   flexDirection: 'row',
// //   //   justifyContent: 'center',
// //   //   alignItems: 'center',
    
// //   // }
// // });

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Button,
//   TextInput
// } from 'react-native';
// import apidata from './apidata.json'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import IoniconsI from 'react-native-vector-icons/Ionicons'
// import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
// import EvilIconsI from 'react-native-vector-icons/EvilIcons'
// import Icon from "react-native-vector-icons/MaterialIcons"
// import Modal from 'react-native-modal';




// export default class Home extends Component {

//   constructor(props) {
//     super(props, {
//       scrollOffset: null,
//     });
//     this.state = {
//       datasource:apidata,
//     //   visible: false,
//         visible : [false,false,false,false,false,false,false,false,false,false],
//       datasource1: null,
//       end: false,
//       Direction: ['down'],
//       c: 0
//     };
//     this.scrollViewRef = React.createRef();
//   }
//   open = (index) =>{ 
//     var arr = this.state.visible
//     arr[index] = true
//     this.setState({visible: arr,Direction: ['down']})
// };
//   close = () => {
//       var arr = [false,false,false,false,false,false,false,false,false,false]
//       this.setState({visible: arr,Direction: ['down']})
//     };
//   isVisible = () => this.state.visible;
//   handleOnScroll = event => {
//     console.log("sajgfdasjghdfaghsfdhgafdgsf",event.nativeEvent.contentOffset.y)
//     this.setState({
//       scrollOffset: event.nativeEvent.contentOffset.y,
//       c: 0
//     });
//     // if(event.nativeEvent.contentOffset.y == 0){

//     // }
//   };
//   handleScrollTo = p => {
//     console.log("jyfhfhchgc",p , this.scrollViewRef.current)
//     console.log(typeof(this.scrollViewRef.current) )
//     if (this.scrollViewRef.current) {
//       console.log(this.scrollViewRef.current.scrollTo(p))
//       this.scrollViewRef.current.scrollTo(p);
//     }
//   };
//   end = () => {
//       console.log(this.state.end)
//       this.state.c++;
//       console.log(this.state.c)
//       if(this.state.c>1){
//         this.setState({
//           scrollOffset: 0,
//           Direction: ['down','up']
//         })
//       }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList style={styles.list}
//           data={this.state.datasource}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           // ItemSeparatorComponent={() => {
//           //   return (
//           //     <View style={styles.separator}/>
//           //   )
//           // }}
          
//           renderItem={(post) => {
//             const item = post.item;
//             return(
//                 <View style={{width:wp('90%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
//             <View style={{flex:1}}>

//                 <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
//                     {/* header area */}
//                     <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
//                     <IoniconsI name="ios-person" size={wp('10%')} color="black" />
//                     </View>
//                     <View style={{marginLeft:wp('3%'),}}>
//                         <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
//                             Post Topic
//                         </Text>
//                         <View style={{flexDirection:'row'}}>
//                         <Text style={{fontSize:wp('3%'),color:'grey'}}>
//                         Yesterday at 1:16 PM. </Text>
//                         <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
//                         </View>
//                     </View>
//                     <View style={{flex:1,alignItems:'flex-end'}}>
//                         <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
//                     </View>
//                 </View>

//                 <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
//                     <Text style={{fontSize:wp('4%')}}>
//                         {item.post}
//                     </Text>
//                 </View>


//                 {/* for Icons and image */}
//                 <View style={{width:wp('100%'),justifyContent:'flex-end',flex:1}}>
//                     {/* for Image */}
//                     <View>
//                     </View>

//                     {/* for Icons */}
//                     <View style={{width:wp('90%'),height:hp('8%'),flexDirection:'row',justifyContent:'space-around'}}>

//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
//                         </View>
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
//                           <View style={{flex:1}}>
//                             <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
//                               this.setState({
//                                 datasource1: item.comments
//                               })
//                               this.open(post.index)
//                             }}>
//                           <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text>
//                             </TouchableOpacity>
//                           <Modal
//                             isVisible={this.state.visible[post.index]}
//                             onSwipeComplete={this.close}
//                             swipeDirection={this.state.Direction}
//                             scrollTo={this.handleScrollTo}
//                             scrollOffset={this.state.scrollOffset}
//                             // scrollOffsetMax={1000} // content height - ScrollView height
//                             propagateSwipe={true}
//                             style={styles.modal}>
//                               {/* <View style={{borderRadius:30,flex:1}}> */}
//                             <View style={styles.scrollableModal}>
//                             <View style={styles.header}>
//                               <Icon name = "navigate-before" size={40} onPress={this.close} color="#1f5bc2"/>
//                               <Icon name = "thumb-up" size={30} color="#1f5bc2"/>
//                             </View>
//                               <FlatList
//                                 // ref={this.scrollViewRef}
//                                 onScrollEndDrag={this.end}
//                                 onScroll={this.handleOnScroll}
//                                 data={this.state.datasource1}
//                                 renderItem={({ item }) => {
//                                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )}}
//                                 keyExtractor={(item, index) => index}
//                               />
//                               <View style={styles.footer}>
//                               <View style={styles.inputContainer}>
//                                 <TextInput style={styles.inputs}
//                                     placeholder="Write a Comment..."
//                                     underlineColorAndroid='transparent'
//                                     onChangeText={(name_address) => this.setState({name_address})}/>
//                               </View>

//                                 <TouchableOpacity style={styles.btnSend}>
//                                   {/* <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  /> */}
//                                   <Icon name="chevron-right" size={40} color="white"/>
//                                 </TouchableOpacity>
//                             </View>
//                             </View>
                          
//                             {/* </View> */}
//                           </Modal>
// </View>
//                             {/* <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text> */}
//                         </View>

                         
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
//                         </View>
//                     </View>
//                 </View>

//             </View>

//                 </View>
//             )
//           }}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     // marginTop:20,
//     backgroundColor:"#E6E6E6",

//   },
//   modal: {
//     justifyContent: 'flex-end',
//     marginTop: 30,
//     marginRight: 10,
//     marginLeft: 10,
//     marginBottom : 0
//   },
//   scrollableModal: {
//     // height: 600,
//     flex:1,
//     height: hp("90%"),
//     backgroundColor:'white',
//     borderRadius:30
//   },
//   container: {
//     padding: 16,
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: "#FFFFFF",
//     alignItems: 'flex-start'
//   },
//   avatar: {
//     width:50,
//     height:50,
//     borderRadius:25,
//   },
//   text: {
//     marginBottom: 5,
//     // flexDirection: 'row',
//     flexWrap:'wrap'
//   },
//   content: {
//     flex: 1,
//     marginLeft: 16,
//     marginRight: 0
//   },
//   mainContent: {
//     marginRight: 60
//   },
//   img: {
//     height: 50,
//     width: 50,
//     margin: 0
//   },
//   attachment: {
//     position: 'absolute',
//     right: 0,
//     height: 50,
//     width: 50
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "#CCCCCC"
//   },
//   timeAgo:{
//     fontSize:12,
//     color:"#696969",
//     marginRight:10
//   },
//   timeAgo1:{
//     fontSize:12,
//     color:"#FF3031",
//     marginRight:10
//   },
//   name:{
//     fontSize:16,
//     color:"#1f5bc2",
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent:'space-between',
//     height:40,
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center',
//     borderRadius:30,
//     paddingTop:20
//   },  
//   footer:{
//     flexDirection: 'row',
//     height:60,
//     backgroundColor: '#eeeeee',
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center'
//   },
//   btnSend:{
//     backgroundColor:"#1f5bc2",
//     width:40,
//     height:40,
//     borderRadius:360,
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   iconSend:{
//     width:30,
//     height:30,
//     alignSelf:'center',
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius:30,
//     borderBottomWidth: 1,
//     height:40,
//     flexDirection: 'row',
//     alignItems:'center',
//     flex:1,
//     marginRight:10,
//   },
//   inputs:{
//     height:40,
//     marginLeft:16,
//     borderBottomColor: '#FFFFFF',
//     flex:1,
//   },
//   // list: {
//   //   // paddingHorizontal: 17,
//   //   backgroundColor:"#E6E6E6",
//   // },
//   // separator: {
//   //   marginTop: hp('1%'),
//   // },
//   // /* card */
//   // card:{
//   //   shadowColor: '#00000021',
//   //   shadowOffset: {
//   //     width: 2
//   //   },
//   //   shadowOpacity: 0.5,
//   //   shadowRadius: 4,
//   //   marginVertical: 8,
//   //   backgroundColor:"white"
//   // },
//   // cardHeader: {
//   //   paddingVertical: 17,
//   //   paddingHorizontal: 16,
//   //   borderTopLeftRadius: 1,
//   //   borderTopRightRadius: 1,
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   // },
//   // cardContent: {
//   //   paddingVertical: 12.5,
//   //   paddingHorizontal: 16,
//   // },
//   // cardFooter:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   paddingTop: 12.5,
//   //   paddingBottom: 25,
//   //   paddingHorizontal: 16,
//   //   borderBottomLeftRadius: 1,
//   //   borderBottomRightRadius: 1,
//   //   backgroundColor:"#EEEEEE",
//   // },
//   // cardImage:{
//   //   flex: 1,
//   //   height: 150,
//   //   width: null,
//   // },
//   // /* card components */
//   // title:{
//   //   fontSize:18,
//   //   flex:1,
//   // }, 
//   // description:{
//   //   fontSize:15,
//   //   color:"#888",
//   //   flex:1,
//   //   marginTop:5,
//   //   marginBottom:5,
//   // },
//   // time:{
//   //   fontSize:13,
//   //   color: "#808080",
//   //   marginTop: 5
//   // },
//   // icon: {
//   //   width:25,
//   //   height:25,
//   // },
//   // iconData:{
//   //   width:15,
//   //   height:15,
//   //   marginTop:5,
//   //   marginRight:5
//   // },
//   // timeContainer:{
//   //   flexDirection:'row'
//   // },
//   // /* social bar */
//   // socialBarContainer: {
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   flexDirection: 'row',
//   //   flex: 1
//   // },
//   // socialBarSection: {
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   //   flexDirection: 'row',
//   //   flex: 1,
    
//   // },
//   // socialBarlabel: {
//   //   marginLeft: 8,
//   //   alignSelf: 'flex-end',
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   // },
//   // socialBarButton:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
    
//   // }
// });


// last working code

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Button,
//   TextInput,
//   ScrollView
// } from 'react-native';
// import apidata from './apidata.json'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import IoniconsI from 'react-native-vector-icons/Ionicons'
// import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
// import EvilIconsI from 'react-native-vector-icons/EvilIcons'
// import Icon from "react-native-vector-icons/MaterialIcons"
// import Modal from 'react-native-modal';




// export default class Home extends Component {

//   constructor(props) {
//     super(props, {
//       scrollOffset: null,
//     });
//     this.state = {
//       datasource:apidata,
//     //   visible: false,
//         visible : [false,false,false,false,false,false,false,false,false,false],
//       datasource1: null,
//       end: false,
//       Direction: ['down'],
//       c: 0
//     };
//     this.scrollViewRef = React.createRef();
//   }
//   open = (index) =>{ 
//     var arr = this.state.visible
//     arr[index] = true
//     this.setState({visible: arr,Direction: ['down']})
// };
//   close = () => {
//       var arr = [false,false,false,false,false,false,false,false,false,false]
//       this.setState({visible: arr,Direction: ['down']})
//     };
//   isVisible = () => this.state.visible;
//   handleOnScroll = event => {
//     console.log("sajgfdasjghdfaghsfdhgafdgsf",event.nativeEvent.contentOffset.y)
//     this.setState({
//       scrollOffset: event.nativeEvent.contentOffset.y,
//       c: 0
//     });
//     // if(event.nativeEvent.contentOffset.y == 0){

//     // }
//   };
//   handleScrollTo = p => {
//     console.log("dasjhdgsa",p)
//     if (this.scrollViewRef.current) {
//       console.log(this.scrollViewRef.current.scrollTo(p))
//       this.scrollViewRef.current.scrollTo(p);
//     }
//   };
//   end = () => {
//       if(this.state.scrollOffset != 0){
//         this.setState({
//         scrollOffset: 0,
//         Direction: ['down','up']
//       })}
//       console.log(this.state.end)
//     //   this.state.c++;
//       console.log(this.state.c)
//       if(this.state.c>1 && this.state.scrollOffset!=0){
//           console.log("Condition Ran")
//         this.setState({
//           scrollOffset: 0,
//           Direction: ['down','up']
//         })
//       }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList style={styles.list}
//           data={this.state.datasource}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           // ItemSeparatorComponent={() => {
//           //   return (
//           //     <View style={styles.separator}/>
//           //   )
//           // }}
          
//           renderItem={(post) => {
//             const item = post.item;
//             return(
//                 <View style={{width:wp('90%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
//             <View style={{flex:1}}>

//                 <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
//                     {/* header area */}
//                     <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
//                     <IoniconsI name="ios-person" size={wp('10%')} color="black" />
//                     </View>
//                     <View style={{marginLeft:wp('3%'),}}>
//                         <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
//                             Post Topic
//                         </Text>
//                         <View style={{flexDirection:'row'}}>
//                         <Text style={{fontSize:wp('3%'),color:'grey'}}>
//                         Yesterday at 1:16 PM. </Text>
//                         <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
//                         </View>
//                     </View>
//                     <View style={{flex:1,alignItems:'flex-end'}}>
//                         <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
//                     </View>
//                 </View>

//                 <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
//                     <Text style={{fontSize:wp('4%')}}>
//                         {item.post}
//                     </Text>
//                 </View>


//                 {/* for Icons and image */}
//                 <View style={{width:wp('100%'),justifyContent:'flex-end',flex:1}}>
//                     {/* for Image */}
//                     <View>
//                     </View>

//                     {/* for Icons */}
//                     <View style={{width:wp('90%'),height:hp('8%'),flexDirection:'row',justifyContent:'space-around'}}>

//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
//                         </View>
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
//                           <View style={{flex:1}}>
//                             <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
//                               this.setState({
//                                 datasource1: item.comments
//                               })
//                               this.open(post.index)
//                             }}>
//                           <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text>
//                             </TouchableOpacity>
//                           <Modal
//                             isVisible={this.state.visible[post.index]}
//                             onSwipeComplete={this.close}
//                             swipeDirection={this.state.Direction}
//                             scrollTo={this.handleScrollTo}
//                             scrollOffset={this.state.scrollOffset}
//                             // scrollOffset = {0}
//                             // scrollOffsetMax={1000} // content height - ScrollView height
//                             propagateSwipe={true}
//                             style={styles.modal}>
//                               {/* <View style={{borderRadius:30,flex:1}}> */}
//                             <View style={styles.scrollableModal}>
//                             <View style={styles.header}>
//                               <Icon name = "navigate-before" size={40} onPress={this.close} color="#1f5bc2"/>
//                               <Icon name = "thumb-up" size={30} color="#1f5bc2"/>
//                             </View>
//                             <ScrollView ref={this.scrollViewRef}
//             onScroll={this.handleOnScroll}
//             onScrollEndDrag={this.end}
//             scrollEventThrottle={16} style={{flex:1}}>
//               {this.state.datasource1 != null ? <View>
//                 {
//                 this.state.datasource1.map(item => {
//                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )
//                 })
              
//               }
//               </View> : <View /> }
              

//                             </ScrollView>
    
//                               {/* <FlatList
//                                 // ref={this.scrollViewRef}
//                                 onScrollEndDrag={this.end}
//                                 onScroll={this.handleOnScroll}
//                                 data={this.state.datasource1}
//                                 renderItem={({ item }) => {
//                                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )}}
//                                 keyExtractor={(item, index) => index}
//                               /> */}
//                               <View style={styles.footer}>
//                               <View style={styles.inputContainer}>
//                                 <TextInput style={styles.inputs}
//                                     placeholder="Write a Comment..."
//                                     underlineColorAndroid='transparent'
//                                     onChangeText={(name_address) => this.setState({name_address})}/>
//                               </View>

//                                 <TouchableOpacity style={styles.btnSend}>
//                                   {/* <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  /> */}
//                                   <Icon name="chevron-right" size={40} color="white"/>
//                                 </TouchableOpacity>
//                             </View>
//                             </View>
                          
//                             {/* </View> */}
//                           </Modal>
// </View>
//                             {/* <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text> */}
//                         </View>

                         
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
//                         </View>
//                     </View>
//                 </View>

//             </View>

//                 </View>
//             )
//           }}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     // marginTop:20,
//     backgroundColor:"#E6E6E6",

//   },
//   modal: {
//     justifyContent: 'flex-end',
//     marginTop: 30,
//     marginRight: 10,
//     marginLeft: 10,
//     marginBottom : 0
//   },
//   scrollableModal: {
//     // height: 600,
//     flex:1,
//     height: hp("90%"),
//     backgroundColor:'white',
//     borderRadius:30
//   },
//   container: {
//     padding: 16,
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: "#FFFFFF",
//     alignItems: 'flex-start'
//   },
//   avatar: {
//     width:50,
//     height:50,
//     borderRadius:25,
//   },
//   text: {
//     marginBottom: 5,
//     // flexDirection: 'row',
//     flexWrap:'wrap'
//   },
//   content: {
//     flex: 1,
//     marginLeft: 16,
//     marginRight: 0
//   },
//   mainContent: {
//     marginRight: 60
//   },
//   img: {
//     height: 50,
//     width: 50,
//     margin: 0
//   },
//   attachment: {
//     position: 'absolute',
//     right: 0,
//     height: 50,
//     width: 50
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "#CCCCCC"
//   },
//   timeAgo:{
//     fontSize:12,
//     color:"#696969",
//     marginRight:10
//   },
//   timeAgo1:{
//     fontSize:12,
//     color:"#FF3031",
//     marginRight:10
//   },
//   name:{
//     fontSize:16,
//     color:"#1f5bc2",
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent:'space-between',
//     height:40,
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center',
//     borderRadius:30,
//     paddingTop:20
//   },  
//   footer:{
//     flexDirection: 'row',
//     height:60,
//     backgroundColor: '#eeeeee',
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center'
//   },
//   btnSend:{
//     backgroundColor:"#1f5bc2",
//     width:40,
//     height:40,
//     borderRadius:360,
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   iconSend:{
//     width:30,
//     height:30,
//     alignSelf:'center',
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius:30,
//     borderBottomWidth: 1,
//     height:40,
//     flexDirection: 'row',
//     alignItems:'center',
//     flex:1,
//     marginRight:10,
//   },
//   inputs:{
//     height:40,
//     marginLeft:16,
//     borderBottomColor: '#FFFFFF',
//     flex:1,
//   },
//   // list: {
//   //   // paddingHorizontal: 17,
//   //   backgroundColor:"#E6E6E6",
//   // },
//   // separator: {
//   //   marginTop: hp('1%'),
//   // },
//   // /* card */
//   // card:{
//   //   shadowColor: '#00000021',
//   //   shadowOffset: {
//   //     width: 2
//   //   },
//   //   shadowOpacity: 0.5,
//   //   shadowRadius: 4,
//   //   marginVertical: 8,
//   //   backgroundColor:"white"
//   // },
//   // cardHeader: {
//   //   paddingVertical: 17,
//   //   paddingHorizontal: 16,
//   //   borderTopLeftRadius: 1,
//   //   borderTopRightRadius: 1,
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   // },
//   // cardContent: {
//   //   paddingVertical: 12.5,
//   //   paddingHorizontal: 16,
//   // },
//   // cardFooter:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   paddingTop: 12.5,
//   //   paddingBottom: 25,
//   //   paddingHorizontal: 16,
//   //   borderBottomLeftRadius: 1,
//   //   borderBottomRightRadius: 1,
//   //   backgroundColor:"#EEEEEE",
//   // },
//   // cardImage:{
//   //   flex: 1,
//   //   height: 150,
//   //   width: null,
//   // },
//   // /* card components */
//   // title:{
//   //   fontSize:18,
//   //   flex:1,
//   // }, 
//   // description:{
//   //   fontSize:15,
//   //   color:"#888",
//   //   flex:1,
//   //   marginTop:5,
//   //   marginBottom:5,
//   // },
//   // time:{
//   //   fontSize:13,
//   //   color: "#808080",
//   //   marginTop: 5
//   // },
//   // icon: {
//   //   width:25,
//   //   height:25,
//   // },
//   // iconData:{
//   //   width:15,
//   //   height:15,
//   //   marginTop:5,
//   //   marginRight:5
//   // },
//   // timeContainer:{
//   //   flexDirection:'row'
//   // },
//   // /* social bar */
//   // socialBarContainer: {
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   flexDirection: 'row',
//   //   flex: 1
//   // },
//   // socialBarSection: {
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   //   flexDirection: 'row',
//   //   flex: 1,
    
//   // },
//   // socialBarlabel: {
//   //   marginLeft: 8,
//   //   alignSelf: 'flex-end',
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   // },
//   // socialBarButton:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
    
//   // }
// });


// //  LAST APK CODE

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Button,
//   TextInput,
//   ScrollView
// } from 'react-native';
// import apidata from './apidata.json'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import IoniconsI from 'react-native-vector-icons/Ionicons'
// import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
// import EvilIconsI from 'react-native-vector-icons/EvilIcons'
// import Icon from "react-native-vector-icons/MaterialIcons"
// import Modal from 'react-native-modal';




// export default class Home extends Component {

//   constructor(props) {
//     super(props, {
//       scrollOffset: null,
//     });
//     this.state = {
//       datasource:apidata,
//     //   visible: false,
//         visible : [false,false,false,false,false,false,false,false,false,false],
//       datasource1: null,
//       end: false,
//       Direction: ['down'],
//       c: 0
//     };
//     this.scrollViewRef = React.createRef();
//   }
//   open = (index) =>{ 
//     var arr = this.state.visible
//     arr[index] = true
//     this.setState({visible: arr,Direction: ['down']})
// };
//   close = () => {
//       var arr = [false,false,false,false,false,false,false,false,false,false]
//       this.setState({visible: arr,Direction: ['down']})
//     };
//   isVisible = () => this.state.visible;
//   handleOnScroll = event => {
//     console.log("sajgfdasjghdfaghsfdhgafdgsf",event.nativeEvent.contentOffset.y)
//     this.setState({
//       scrollOffset: event.nativeEvent.contentOffset.y,
//       c: 0
//     });
//     // if(event.nativeEvent.contentOffset.y == 0){

//     // }
//   };
//   handleScrollTo = p => {
//     console.log("dasjhdgsa",p)
//     if (this.scrollViewRef.current) {
//       console.log(this.scrollViewRef.current.scrollTo(p))
//       this.scrollViewRef.current.scrollTo(p);
//     }
//   };
//   end = () => {
//       if(this.state.scrollOffset != 0){
//         this.setState({
//         scrollOffset: 0,
//         Direction: ['down','up']
//       })}
//       console.log(this.state.end)
//     //   this.state.c++;
//       console.log(this.state.c)
//       if(this.state.c>1 && this.state.scrollOffset!=0){
//           console.log("Condition Ran")
//         this.setState({
//           scrollOffset: 0,
//           Direction: ['down','up']
//         })
//       }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList style={styles.list}
//           data={this.state.datasource}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           // ItemSeparatorComponent={() => {
//           //   return (
//           //     <View style={styles.separator}/>
//           //   )
//           // }}
          
//           renderItem={(post) => {
//             const item = post.item;
//             return(
//                 <View style={{width:wp('90%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
//             <View style={{flex:1}}>

//                 <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
//                     {/* header area */}
//                     <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
//                     <IoniconsI name="ios-person" size={wp('10%')} color="black" />
//                     </View>
//                     <View style={{marginLeft:wp('3%'),}}>
//                         <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
//                             Post Topic
//                         </Text>
//                         <View style={{flexDirection:'row'}}>
//                         <Text style={{fontSize:wp('3%'),color:'grey'}}>
//                         Yesterday at 1:16 PM. </Text>
//                         <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
//                         </View>
//                     </View>
//                     <View style={{flex:1,alignItems:'flex-end'}}>
//                         <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
//                     </View>
//                 </View>

//                 <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
//                     <Text style={{fontSize:wp('4%')}}>
//                         {item.post}
//                     </Text>
//                 </View>


//                 {/* for Icons and image */}
//                 <View style={{width:wp('90%'),justifyContent:'flex-end',flex:1,marginTop:hp("2%")}}>
//                     {/* for Image */}
//                     <View style={{flex:1}}>
//                         <Image source = {require("./download.jpg")} style={{flex:1,width:wp("80%"),alignSelf:'center'}}/>
//                       </View>
//                       <View style={{height:hp('5%'),flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:wp('5%')}}>
//                        <Text>{Math.floor(Math.random() * 100) + 1} Likes</Text>
//                         <Text>{item.comments.length} comments - {Math.floor(Math.random() * 10) + 1} Shares</Text>
//                     </View>

//                     {/* for Icons */}
//                     <View style={{width:wp('90%'),height:hp('6%'),flexDirection:'row',justifyContent:'space-around'}}>

//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
//                         </View>
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
//                           <View style={{flex:1}}>
//                             <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
//                               this.setState({
//                                 datasource1: item.comments
//                               })
//                               this.open(post.index)
//                             }}>
//                           <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text>
//                             </TouchableOpacity>
//                           <Modal
//                             isVisible={this.state.visible[post.index]}
//                             onSwipeComplete={this.close}
//                             swipeDirection={this.state.Direction}
//                             scrollTo={this.handleScrollTo}
//                             scrollOffset={this.state.scrollOffset}
//                             // scrollOffset = {0}
//                             // scrollOffsetMax={1000} // content height - ScrollView height
//                             propagateSwipe={true}
//                             style={styles.modal}>
//                               {/* <View style={{borderRadius:30,flex:1}}> */}
//                             <View style={styles.scrollableModal}>
//                             <View style={styles.header}>
//                               <Icon name = "navigate-before" size={40} onPress={this.close} color="#1f5bc2"/>
//                               <Icon name = "thumb-up" size={30} color="#1f5bc2"/>
//                             </View>
//                             <ScrollView ref={this.scrollViewRef}
//             onScroll={this.handleOnScroll}
//             onScrollEndDrag={this.end}
//             scrollEventThrottle={16} style={{flex:1}}>
//               {this.state.datasource1 != null ? <View>
//                 {
//                 this.state.datasource1.map(item => {
//                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )
//                 })
              
//               }
//               </View> : <View /> }
              

//                             </ScrollView>
    
//                               {/* <FlatList
//                                 // ref={this.scrollViewRef}
//                                 onScrollEndDrag={this.end}
//                                 onScroll={this.handleOnScroll}
//                                 data={this.state.datasource1}
//                                 renderItem={({ item }) => {
//                                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )}}
//                                 keyExtractor={(item, index) => index}
//                               /> */}
//                               <View style={styles.footer}>
//                               <View style={styles.inputContainer}>
//                                 <TextInput style={styles.inputs}
//                                     placeholder="Write a Comment..."
//                                     underlineColorAndroid='transparent'
//                                     onChangeText={(name_address) => this.setState({name_address})}/>
//                               </View>

//                                 <TouchableOpacity style={styles.btnSend}>
//                                   {/* <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  /> */}
//                                   <Icon name="chevron-right" size={40} color="white"/>
//                                 </TouchableOpacity>
//                             </View>
//                             </View>
                          
//                             {/* </View> */}
//                           </Modal>
// </View>
//                             {/* <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text> */}
//                         </View>

                         
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
//                         </View>
//                     </View>
//                 </View>

//             </View>

//                 </View>
//             )
//           }}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     // marginTop:20,
//     backgroundColor:"#E6E6E6",

//   },
//   modal: {
//     justifyContent: 'flex-end',
//     marginTop: 30,
//     marginRight: 10,
//     marginLeft: 10,
//     marginBottom : 0
//   },
//   scrollableModal: {
//     // height: 600,
//     flex:1,
//     height: hp("90%"),
//     backgroundColor:'white',
//     borderRadius:30
//   },
//   container: {
//     padding: 16,
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: "#FFFFFF",
//     alignItems: 'flex-start'
//   },
//   avatar: {
//     width:50,
//     height:50,
//     borderRadius:25,
//   },
//   text: {
//     marginBottom: 5,
//     // flexDirection: 'row',
//     flexWrap:'wrap'
//   },
//   content: {
//     flex: 1,
//     marginLeft: 16,
//     marginRight: 0
//   },
//   mainContent: {
//     marginRight: 60
//   },
//   img: {
//     height: 50,
//     width: 50,
//     margin: 0
//   },
//   attachment: {
//     position: 'absolute',
//     right: 0,
//     height: 50,
//     width: 50
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "#CCCCCC"
//   },
//   timeAgo:{
//     fontSize:12,
//     color:"#696969",
//     marginRight:10
//   },
//   timeAgo1:{
//     fontSize:12,
//     color:"#FF3031",
//     marginRight:10
//   },
//   name:{
//     fontSize:16,
//     color:"#1f5bc2",
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent:'space-between',
//     height:40,
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center',
//     borderRadius:30,
//     paddingTop:20
//   },  
//   footer:{
//     flexDirection: 'row',
//     height:60,
//     backgroundColor: '#eeeeee',
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center'
//   },
//   btnSend:{
//     backgroundColor:"#1f5bc2",
//     width:40,
//     height:40,
//     borderRadius:360,
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   iconSend:{
//     width:30,
//     height:30,
//     alignSelf:'center',
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius:30,
//     borderBottomWidth: 1,
//     height:40,
//     flexDirection: 'row',
//     alignItems:'center',
//     flex:1,
//     marginRight:10,
//   },
//   inputs:{
//     height:40,
//     marginLeft:16,
//     borderBottomColor: '#FFFFFF',
//     flex:1,
//   },
//   // list: {
//   //   // paddingHorizontal: 17,
//   //   backgroundColor:"#E6E6E6",
//   // },
//   // separator: {
//   //   marginTop: hp('1%'),
//   // },
//   // /* card */
//   // card:{
//   //   shadowColor: '#00000021',
//   //   shadowOffset: {
//   //     width: 2
//   //   },
//   //   shadowOpacity: 0.5,
//   //   shadowRadius: 4,
//   //   marginVertical: 8,
//   //   backgroundColor:"white"
//   // },
//   // cardHeader: {
//   //   paddingVertical: 17,
//   //   paddingHorizontal: 16,
//   //   borderTopLeftRadius: 1,
//   //   borderTopRightRadius: 1,
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   // },
//   // cardContent: {
//   //   paddingVertical: 12.5,
//   //   paddingHorizontal: 16,
//   // },
//   // cardFooter:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   paddingTop: 12.5,
//   //   paddingBottom: 25,
//   //   paddingHorizontal: 16,
//   //   borderBottomLeftRadius: 1,
//   //   borderBottomRightRadius: 1,
//   //   backgroundColor:"#EEEEEE",
//   // },
//   // cardImage:{
//   //   flex: 1,
//   //   height: 150,
//   //   width: null,
//   // },
//   // /* card components */
//   // title:{
//   //   fontSize:18,
//   //   flex:1,
//   // }, 
//   // description:{
//   //   fontSize:15,
//   //   color:"#888",
//   //   flex:1,
//   //   marginTop:5,
//   //   marginBottom:5,
//   // },
//   // time:{
//   //   fontSize:13,
//   //   color: "#808080",
//   //   marginTop: 5
//   // },
//   // icon: {
//   //   width:25,
//   //   height:25,
//   // },
//   // iconData:{
//   //   width:15,
//   //   height:15,
//   //   marginTop:5,
//   //   marginRight:5
//   // },
//   // timeContainer:{
//   //   flexDirection:'row'
//   // },
//   // /* social bar */
//   // socialBarContainer: {
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   flexDirection: 'row',
//   //   flex: 1
//   // },
//   // socialBarSection: {
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   //   flexDirection: 'row',
//   //   flex: 1,
    
//   // },
//   // socialBarlabel: {
//   //   marginLeft: 8,
//   //   alignSelf: 'flex-end',
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   // },
//   // socialBarButton:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
    
//   // }
// });

// ADI CODE


// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   Image,
//   FlatList,
//   Button,
//   TextInput,
//   ScrollView
// } from 'react-native';
// import apidata from './apidata.json'
// import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
// import IoniconsI from 'react-native-vector-icons/Ionicons'
// import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
// import EvilIconsI from 'react-native-vector-icons/EvilIcons'
// import Icon from "react-native-vector-icons/MaterialIcons"
// import Modal from 'react-native-modal';




// export default class Home extends Component {

//   constructor(props) {
//     super(props, {
//       scrollOffset: null,
//     });
//     this.c = 0 
//     this.state = {
//       datasource:apidata,
//     //   visible: false,
//         visible : [false,false,false,false,false,false,false,false,false,false],
//       datasource1: null,
//       end: false,
//       Direction: ['down'],
//       c: 0
//     };
//     this.scrollViewRef = React.createRef();
//   }
//   open = (index) =>{ 
//     var arr = this.state.visible
//     arr[index] = true
//     this.setState({visible: arr,Direction: ['down']})
// };
//   close = () => {
//       var arr = [false,false,false,false,false,false,false,false,false,false]
//       this.setState({visible: arr,Direction: ['down']})
//     };
//   isVisible = () => this.state.visible;
//   handleOnScroll = event => {
//     console.log("sajgfdasjghdfaghsfdhgafdgsf",event.nativeEvent.contentOffset.y)
//     this.setState({
//       scrollOffset: event.nativeEvent.contentOffset.y,
//       // c: 0
//     });
//     this.c = 0
//     // if(event.nativeEvent.contentOffset.y == 0){

//     // }
//   };
//   handleScrollTo = p => {
//     console.log("dasjhdgsa",p)
//     if (this.scrollViewRef.current) {
//       console.log(this.scrollViewRef.current.scrollTo(p))
//       this.scrollViewRef.current.scrollTo({y : this.state.scrollOffset , animated : true});
//     }
//   };
//   end = () => {
//       console.log(this.state.end)
//       this.c++;
//       console.log(this.c)
//       if(this.c>1){
//         this.setState({
//           scrollOffset: 0,
//           Direction: ['down','up']
//         })
//       }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList style={styles.list}
//           data={this.state.datasource}
//           keyExtractor= {(item) => {
//             return item.id;
//           }}
//           // ItemSeparatorComponent={() => {
//           //   return (
//           //     <View style={styles.separator}/>
//           //   )
//           // }}
          
//           renderItem={(post) => {
//             const item = post.item;
//             return(
//                 <View style={{width:wp('90%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
//             <View style={{flex:1}}>

//                 <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
//                     {/* header area */}
//                     <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
//                     <IoniconsI name="ios-person" size={wp('10%')} color="black" />
//                     </View>
//                     <View style={{marginLeft:wp('3%'),}}>
//                         <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
//                             Post Topic
//                         </Text>
//                         <View style={{flexDirection:'row'}}>
//                         <Text style={{fontSize:wp('3%'),color:'grey'}}>
//                         Yesterday at 1:16 PM. </Text>
//                         <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
//                         </View>
//                     </View>
//                     <View style={{flex:1,alignItems:'flex-end'}}>
//                         <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
//                     </View>
//                 </View>

//                 <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
//                     <Text style={{fontSize:wp('4%')}}>
//                         {item.post}
//                     </Text>
//                 </View>


//                 {/* for Icons and image */}
//                 <View style={{width:wp('90%'),justifyContent:'flex-end',flex:1}}>
//                     {/* for Image */}
                    
//                     <View style={{flex:1,marginTop : hp('2%')}}>
//                       <Image source = {require("./download.jpg")} style={{flex:1,width:wp("80%"),alignSelf:'center'}}/>
//                     </View>
//                     <View style={{height:hp('5%'),flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:wp('5%')}}>
//                         <Text>{Math.floor(Math.random() * 100) + 1} Likes</Text>
//                         <Text>{item.comments.length} comments - {Math.floor(Math.random() * 10) + 1} Shares</Text>
//                     </View>
//                     {/* for Icons */}
//                     <View style={{width:wp('90%'),height:hp('6%'),flexDirection:'row',justifyContent:'space-around'}}>

//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
//                         </View>
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
//                           <View style={{flex:1}}>
//                             <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
//                               this.setState({
//                                 datasource1: item.comments
//                               })
//                               this.open(post.index)
//                             }}>
//                           <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text>
//                             </TouchableOpacity>
//                           <Modal
//                             isVisible={this.state.visible[post.index]}
//                             onSwipeComplete={this.close}
//                             swipeDirection={this.state.Direction}
//                             scrollTo={this.handleScrollTo}
//                             scrollOffset={this.state.scrollOffset}
//                             // scrollOffsetMax={1000} // content height - ScrollView height
//                             propagateSwipe={true}
//                             style={styles.modal}>
//                               {/* <View style={{borderRadius:30,flex:1}}> */}
//                             <View style={styles.scrollableModal}>
//                             <View style={styles.header}>
//                               <Icon name = "navigate-before" size={40} onPress={this.close} color="#1f5bc2"/>
//                               <Icon name = "thumb-up" size={30} color="#1f5bc2"/>
//                             </View>
//                             <ScrollView ref={this.scrollViewRef}
//             onScroll={this.handleOnScroll}
//             onScrollEndDrag={this.end}
//             scrollEventThrottle={16} style={{flex:1}}>
//               {this.state.datasource1 != null ? <View>
//                 {
//                 this.state.datasource1.map(item => {
//                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )
//                 })
              
//               }
//               </View> : <View /> }
              

//                             </ScrollView>
    
//                               {/* <FlatList
//                                 // ref={this.scrollViewRef}
//                                 onScrollEndDrag={this.end}
//                                 onScroll={this.handleOnScroll}
//                                 data={this.state.datasource1}
//                                 renderItem={({ item }) => {
//                                   let mainContentStyle;
//                               return(
//                                   <View style={styles.container}>
//                                   <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
//                                   <View style={styles.content}>
//                                     <View style={mainContentStyle}>
//                                       <View style={styles.text}>
//                                       <Text style={styles.name}>Person</Text>
//                                       <View>
//                                         <Text>{item}</Text>
//                                       </View>
//                                       </View>
//                                       <View style={{flexDirection:'row'}}>
//                                       <Text style={styles.timeAgo}>
//                                         2hr
//                                       </Text>
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Like
//                                       </Text>    
//                                       </TouchableOpacity>              
//                                       <TouchableOpacity>
//                                       <Text style={styles.timeAgo}>
//                                         Reply
//                                       </Text>
//                                       </TouchableOpacity>
//                                       </View>
//                                     </View>
//                                   </View>
//                                 </View>
//                                 )}}
//                                 keyExtractor={(item, index) => index}
//                               /> */}
//                               <View style={styles.footer}>
//                               <View style={styles.inputContainer}>
//                                 <TextInput style={styles.inputs}
//                                     placeholder="Write a Comment..."
//                                     underlineColorAndroid='transparent'
//                                     onChangeText={(name_address) => this.setState({name_address})}/>
//                               </View>

//                                 <TouchableOpacity style={styles.btnSend}>
//                                   {/* <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  /> */}
//                                   <Icon name="chevron-right" size={40} color="white"/>
//                                 </TouchableOpacity>
//                             </View>
//                             </View>
                          
//                             {/* </View> */}
//                           </Modal>
// </View>
//                             {/* <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text> */}
//                         </View>

                         
//                         <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
//                             <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
//                             <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
//                         </View>
//                     </View>
//                 </View>

//             </View>

//                 </View>
//             )
//           }}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     // marginTop:20,
//     backgroundColor:"#E6E6E6",

//   },
//   modal: {
//     justifyContent: 'flex-end',
//     marginTop: 30,
//     marginRight: 10,
//     marginLeft: 10,
//     marginBottom : 0
//   },
//   scrollableModal: {
//     // height: 600,
//     flex:1,
//     height: hp("90%"),
//     backgroundColor:'white',
//     borderRadius:30
//   },
//   container: {
//     padding: 16,
//     flexDirection: 'row',
//     borderBottomWidth: 1,
//     borderColor: "#FFFFFF",
//     alignItems: 'flex-start'
//   },
//   avatar: {
//     width:50,
//     height:50,
//     borderRadius:25,
//   },
//   text: {
//     marginBottom: 5,
//     // flexDirection: 'row',
//     flexWrap:'wrap'
//   },
//   content: {
//     flex: 1,
//     marginLeft: 16,
//     marginRight: 0
//   },
//   mainContent: {
//     marginRight: 60
//   },
//   img: {
//     height: 50,
//     width: 50,
//     margin: 0
//   },
//   attachment: {
//     position: 'absolute',
//     right: 0,
//     height: 50,
//     width: 50
//   },
//   separator: {
//     height: 1,
//     backgroundColor: "#CCCCCC"
//   },
//   timeAgo:{
//     fontSize:12,
//     color:"#696969",
//     marginRight:10
//   },
//   timeAgo1:{
//     fontSize:12,
//     color:"#FF3031",
//     marginRight:10
//   },
//   name:{
//     fontSize:16,
//     color:"#1f5bc2",
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent:'space-between',
//     height:40,
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center',
//     borderRadius:30,
//     paddingTop:20
//   },  
//   footer:{
//     flexDirection: 'row',
//     height:60,
//     backgroundColor: '#eeeeee',
//     paddingHorizontal:10,
//     padding:5,
//     alignItems:'center'
//   },
//   btnSend:{
//     backgroundColor:"#1f5bc2",
//     width:40,
//     height:40,
//     borderRadius:360,
//     alignItems:'center',
//     justifyContent:'center',
//   },
//   iconSend:{
//     width:30,
//     height:30,
//     alignSelf:'center',
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius:30,
//     borderBottomWidth: 1,
//     height:40,
//     flexDirection: 'row',
//     alignItems:'center',
//     flex:1,
//     marginRight:10,
//   },
//   inputs:{
//     height:40,
//     marginLeft:16,
//     borderBottomColor: '#FFFFFF',
//     flex:1,
//   },
//   // list: {
//   //   // paddingHorizontal: 17,
//   //   backgroundColor:"#E6E6E6",
//   // },
//   // separator: {
//   //   marginTop: hp('1%'),
//   // },
//   // /* card */
//   // card:{
//   //   shadowColor: '#00000021',
//   //   shadowOffset: {
//   //     width: 2
//   //   },
//   //   shadowOpacity: 0.5,
//   //   shadowRadius: 4,
//   //   marginVertical: 8,
//   //   backgroundColor:"white"
//   // },
//   // cardHeader: {
//   //   paddingVertical: 17,
//   //   paddingHorizontal: 16,
//   //   borderTopLeftRadius: 1,
//   //   borderTopRightRadius: 1,
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   // },
//   // cardContent: {
//   //   paddingVertical: 12.5,
//   //   paddingHorizontal: 16,
//   // },
//   // cardFooter:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'space-between',
//   //   paddingTop: 12.5,
//   //   paddingBottom: 25,
//   //   paddingHorizontal: 16,
//   //   borderBottomLeftRadius: 1,
//   //   borderBottomRightRadius: 1,
//   //   backgroundColor:"#EEEEEE",
//   // },
//   // cardImage:{
//   //   flex: 1,
//   //   height: 150,
//   //   width: null,
//   // },
//   // /* card components */
//   // title:{
//   //   fontSize:18,
//   //   flex:1,
//   // }, 
//   // description:{
//   //   fontSize:15,
//   //   color:"#888",
//   //   flex:1,
//   //   marginTop:5,
//   //   marginBottom:5,
//   // },
//   // time:{
//   //   fontSize:13,
//   //   color: "#808080",
//   //   marginTop: 5
//   // },
//   // icon: {
//   //   width:25,
//   //   height:25,
//   // },
//   // iconData:{
//   //   width:15,
//   //   height:15,
//   //   marginTop:5,
//   //   marginRight:5
//   // },
//   // timeContainer:{
//   //   flexDirection:'row'
//   // },
//   // /* social bar */
//   // socialBarContainer: {
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   flexDirection: 'row',
//   //   flex: 1
//   // },
//   // socialBarSection: {
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   //   flexDirection: 'row',
//   //   flex: 1,
    
//   // },
//   // socialBarlabel: {
//   //   marginLeft: 8,
//   //   alignSelf: 'flex-end',
//   //   justifyContent: 'center',
//   //   alignItems:'center',
//   // },
//   // socialBarButton:{
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
    
//   // }
// });


import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
  TextInput,
  ScrollView
} from 'react-native';
import apidata from './apidata.json'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import IoniconsI from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIconsI from 'react-native-vector-icons/EvilIcons'
import Icon from "react-native-vector-icons/MaterialIcons"
import Modal from 'react-native-modal';




export default class Home extends Component {

  constructor(props) {
    super(props, {
      scrollOffset: null,
    });
    this.state = {
      datasource:apidata,
        visible : [false,false,false,false,false,false,false,false,false,false],
      datasource1: null,
    };
    this.scrollViewRef = React.createRef();
  }
  open = (index) =>{ 
    var arr = this.state.visible
    arr[index] = true
    this.setState({visible: arr})
};
  close = () => {
      var arr = [false,false,false,false,false,false,false,false,false,false]
      this.setState({visible: arr})
    };
  isVisible = () => this.state.visible;
  handleOnScroll = event => {
    // console.log("sajgfdasjghdfaghsfdhgafdgsf",event.nativeEvent.contentOffset.y)
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
    // if(event.nativeEvent.contentOffset.y == 0){

    // }
  };
  handleScrollTo = p => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollTo(p);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.list}
          data={this.state.datasource}
          keyExtractor= {(item) => {
            return item.id;
          }}
          // ItemSeparatorComponent={() => {
          //   return (
          //     <View style={styles.separator}/>
          //   )
          // }}
          
          renderItem={(post) => {
            const item = post.item;
            return(
                <View style={{width:wp('90%'),height:hp('60%'),backgroundColor:'#FFF',marginTop:hp('2%')}}>
            <View style={{flex:1}}>

                <View style={{flexDirection:'row',marginHorizontal:wp('5%'),marginTop:hp('2%'),alignItems:'center'}}>
                    {/* header area */}
                    <View style={{borderColor:'#1f5bc2',borderWidth:2,borderRadius:1000,height:wp('12%'),width:wp('12%'),justifyContent:'center',alignItems:'center'}}>
                    <IoniconsI name="ios-person" size={wp('10%')} color="black" />
                    </View>
                    <View style={{marginLeft:wp('3%'),}}>
                        <Text style={{fontWeight:'bold',fontSize:wp('5%'),}}>
                            Post Topic
                        </Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:wp('3%'),color:'grey'}}>
                        Yesterday at 1:16 PM. </Text>
                        <MaterialCommunityIconsI name="earth" size={wp('3%')} color="grey" />
                        </View>
                    </View>
                    <View style={{flex:1,alignItems:'flex-end'}}>
                        <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
                    </View>
                </View>

                <View style={{marginHorizontal:wp('5%'),marginTop:hp('2.5%')}}>
                    <Text style={{fontSize:wp('4%')}}>
                        {item.post}
                    </Text>
                </View>


                {/* for Icons and image */}
                <View style={{width:wp('90%'),justifyContent:'flex-end',flex:1,marginTop:hp("2%")}}>
                    {/* for Image */}
                    <View style={{flex:1}}>
                        <Image source = {require("./download.jpg")} style={{flex:1,width:wp("80%"),alignSelf:'center',marginTop:hp('2%')}}/>
                      </View>
                      <View style={{height:hp('5%'),flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginHorizontal:wp('5%')}}>
                       <Text>{Math.floor(Math.random() * 100) + 1} Likes</Text>
                        <Text>{item.comments.length} comments - {Math.floor(Math.random() * 10) + 1} Shares</Text>
                    </View>

                    {/* for Icons */}
                    <View style={{width:wp('90%'),height:hp('6%'),flexDirection:'row',justifyContent:'space-around'}}>

                        <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <EvilIconsI name="like" size={wp('7%')} color="#1f5bc2" />
                            <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Like</Text>
                        </View>
                        <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}} >
                          <View style={{flex:1}}>
                            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => {
                              this.setState({
                                datasource1: item.comments
                              })
                              this.open(post.index)
                            }}>
                          <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
                            <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text>
                            </TouchableOpacity>
                          <Modal
                            isVisible={this.state.visible[post.index]}
                            onSwipeComplete={this.close}
                            swipeDirection={['down']}
                            scrollTo={this.handleScrollTo}
                            scrollOffset={this.state.scrollOffset}
                            scrollOffsetMax={400 - 300}
                            // scrollOffset = {0}
                            // scrollOffsetMax={1000} // content height - ScrollView height
                            propagateSwipe={true}
                            style={styles.modal}>
                              {/* <View style={{borderRadius:30,flex:1}}> */}
                            <View style={styles.scrollableModal}>
                            <View style={styles.header}>
                              <Icon name = "navigate-before" size={40} onPress={this.close} color="#1f5bc2"/>
                              <Icon name = "thumb-up" size={30} color="#1f5bc2"/>
                            </View>
                            <ScrollView ref={this.scrollViewRef}
            onScroll={this.handleOnScroll}
            // onScrollEndDrag={this.end}
            scrollEventThrottle={16}>
              {this.state.datasource1 != null ? <View>
                {
                this.state.datasource1.map(item => {
                  let mainContentStyle;
                              return(
                                  <View style={styles.container}>
                                  <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
                                  <View style={styles.content}>
                                    <View style={mainContentStyle}>
                                      <View style={styles.text}>
                                      <Text style={styles.name}>Person</Text>
                                      <View>
                                        <Text>{item}</Text>
                                      </View>
                                      </View>
                                      <View style={{flexDirection:'row'}}>
                                      <Text style={styles.timeAgo}>
                                        2hr
                                      </Text>
                                      <TouchableOpacity>
                                      <Text style={styles.timeAgo}>
                                        Like
                                      </Text>    
                                      </TouchableOpacity>              
                                      <TouchableOpacity>
                                      <Text style={styles.timeAgo}>
                                        Reply
                                      </Text>
                                      </TouchableOpacity>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                                )
                })
              
              }
              </View> : <View /> }
              

                            </ScrollView>
    
                              {/* <FlatList
                                // ref={this.scrollViewRef}
                                onScrollEndDrag={this.end}
                                onScroll={this.handleOnScroll}
                                data={this.state.datasource1}
                                renderItem={({ item }) => {
                                  let mainContentStyle;
                              return(
                                  <View style={styles.container}>
                                  <Image source={{uri:"https://bootdey.com/img/Content/avatar/avatar7.png"}} style={styles.avatar}/>
                                  <View style={styles.content}>
                                    <View style={mainContentStyle}>
                                      <View style={styles.text}>
                                      <Text style={styles.name}>Person</Text>
                                      <View>
                                        <Text>{item}</Text>
                                      </View>
                                      </View>
                                      <View style={{flexDirection:'row'}}>
                                      <Text style={styles.timeAgo}>
                                        2hr
                                      </Text>
                                      <TouchableOpacity>
                                      <Text style={styles.timeAgo}>
                                        Like
                                      </Text>    
                                      </TouchableOpacity>              
                                      <TouchableOpacity>
                                      <Text style={styles.timeAgo}>
                                        Reply
                                      </Text>
                                      </TouchableOpacity>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                                )}}
                                keyExtractor={(item, index) => index}
                              /> */}
                              <View style={styles.footer}>
                              <View style={styles.inputContainer}>
                                <TextInput style={styles.inputs}
                                    placeholder="Write a Comment..."
                                    underlineColorAndroid='transparent'
                                    onChangeText={(name_address) => this.setState({name_address})}/>
                              </View>

                                <TouchableOpacity style={styles.btnSend}>
                                  {/* <Image source={{uri:"https://png.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  /> */}
                                  <Icon name="chevron-right" size={40} color="white"/>
                                </TouchableOpacity>
                            </View>
                            </View>
                          
                            {/* </View> */}
                          </Modal>
</View>
                            {/* <MaterialCommunityIconsI name="comment-outline" size={wp('6%')} color="#1f5bc2" />
                            <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Comment</Text> */}
                        </View>

                         
                        <View style={{flex:.33,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <MaterialCommunityIconsI name="share-outline" size={wp('7%')} color="#1f5bc2" />
                            <Text style={{color:'#1f5bc2',fontWeight:'bold'}}> Share</Text>
                        </View>
                    </View>
                </View>

            </View>

                </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // marginTop:20,
    backgroundColor:"#E6E6E6",

  },
  modal: {
    justifyContent: 'flex-end',
    marginTop: 30,
    marginRight: 10,
    marginLeft: 10,
    marginBottom : 0
  },
  scrollableModal: {
    // height: 600,
    flex:1,
    height: hp("90%"),
    backgroundColor:'white',
    borderRadius:30
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    // flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969",
    marginRight:10
  },
  timeAgo1:{
    fontSize:12,
    color:"#FF3031",
    marginRight:10
  },
  name:{
    fontSize:16,
    color:"#1f5bc2",
  },
  header: {
    flexDirection: 'row',
    justifyContent:'space-between',
    height:40,
    paddingHorizontal:10,
    padding:5,
    alignItems:'center',
    borderRadius:30,
    paddingTop:20
  },  
  footer:{
    flexDirection: 'row',
    height:60,
    backgroundColor: '#eeeeee',
    paddingHorizontal:10,
    padding:5,
    alignItems:'center'
  },
  btnSend:{
    backgroundColor:"#1f5bc2",
    width:40,
    height:40,
    borderRadius:360,
    alignItems:'center',
    justifyContent:'center',
  },
  iconSend:{
    width:30,
    height:30,
    alignSelf:'center',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    height:40,
    flexDirection: 'row',
    alignItems:'center',
    flex:1,
    marginRight:10,
  },
  inputs:{
    height:40,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
  },
  // list: {
  //   // paddingHorizontal: 17,
  //   backgroundColor:"#E6E6E6",
  // },
  // separator: {
  //   marginTop: hp('1%'),
  // },
  // /* card */
  // card:{
  //   shadowColor: '#00000021',
  //   shadowOffset: {
  //     width: 2
  //   },
  //   shadowOpacity: 0.5,
  //   shadowRadius: 4,
  //   marginVertical: 8,
  //   backgroundColor:"white"
  // },
  // cardHeader: {
  //   paddingVertical: 17,
  //   paddingHorizontal: 16,
  //   borderTopLeftRadius: 1,
  //   borderTopRightRadius: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // cardContent: {
  //   paddingVertical: 12.5,
  //   paddingHorizontal: 16,
  // },
  // cardFooter:{
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   paddingTop: 12.5,
  //   paddingBottom: 25,
  //   paddingHorizontal: 16,
  //   borderBottomLeftRadius: 1,
  //   borderBottomRightRadius: 1,
  //   backgroundColor:"#EEEEEE",
  // },
  // cardImage:{
  //   flex: 1,
  //   height: 150,
  //   width: null,
  // },
  // /* card components */
  // title:{
  //   fontSize:18,
  //   flex:1,
  // }, 
  // description:{
  //   fontSize:15,
  //   color:"#888",
  //   flex:1,
  //   marginTop:5,
  //   marginBottom:5,
  // },
  // time:{
  //   fontSize:13,
  //   color: "#808080",
  //   marginTop: 5
  // },
  // icon: {
  //   width:25,
  //   height:25,
  // },
  // iconData:{
  //   width:15,
  //   height:15,
  //   marginTop:5,
  //   marginRight:5
  // },
  // timeContainer:{
  //   flexDirection:'row'
  // },
  // /* social bar */
  // socialBarContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   flex: 1
  // },
  // socialBarSection: {
  //   justifyContent: 'center',
  //   alignItems:'center',
  //   flexDirection: 'row',
  //   flex: 1,
    
  // },
  // socialBarlabel: {
  //   marginLeft: 8,
  //   alignSelf: 'flex-end',
  //   justifyContent: 'center',
  //   alignItems:'center',
  // },
  // socialBarButton:{
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
    
  // }
});