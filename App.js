/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import IoniconsI from 'react-native-vector-icons/Ionicons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import MaterialCommunityIconsI from 'react-native-vector-icons/MaterialCommunityIcons'
import { createAppContainer,createSwitchNavigator ,withNavigation} from 'react-navigation';
import Home from './HomeScreen'
import Sample from './SampleScreen'

const Tabs = createMaterialTopTabNavigator(
{
  Home : Home,
  Posts : Sample,
  Reviews : Sample,
  Videos : Sample,
  Photos : Sample,
  Notifications : Sample,
  Share : Sample,

},
{
  tabBarOptions: {
    activeTintColor: '#1f5bc2',
    inactiveTintColor: 'gray',
    scrollEnabled : true,
    labelStyle:{
      fontWeight : 'bold',
      fontSize : wp('3.5%'),
      padding:0,
      margin:10
    },
    tabStyle:{
      width:'auto',
    },
    style:{
      backgroundColor:"#FFF",
      
    },
    pressColor : '#7498d6',
    indicatorStyle:{
      backgroundColor:'#1f5bc2'
    }
  },}
);

const AppContiner = createAppContainer(Tabs)


class App extends React.Component{
  render(){
    return(

      <View style={{flex:1}}>
        <View style={{flexDirection:'row',marginTop:hp('3%'),justifyContent:'space-between',alignItems:'center'}}>
{/* IN row */}
          <View style={{marginLeft:wp('5%')}}>
            <IoniconsI name = "md-arrow-round-back" color="#1f5bc2" size = {wp('7%')} />
          </View>
          <View style={{width:wp('70%'),backgroundColor:'#eee',height:hp('5%'),borderRadius:100,flexDirection:'row',alignItems:'center'}}>
            <IoniconsI name="ios-search" size={wp('7%')} color="#999" style={{marginLeft:wp('5%')}} />
            <Text style={{marginLeft:wp('3%'),fontSize:wp('4.5%'),color:'#999',}}>Search</Text>
          </View>
          <View style={{marginRight:wp('5%')}}>
            <IoniconsI name="ios-share-alt" size={wp('7%')} color="#1f5bc2" />
          </View>
        </View>
        <View style={{width:wp('100%'),height:.5,backgroundColor:'#999',marginTop:hp('1%')}}></View>
        <AppContiner />
        <View style={{width:wp('100%'),height:hp('7%'),flexDirection:'row',justifyContent:'space-around'}}>

          <View style={{backgroundColor:'#1f5bc2',width:wp('60%'),height : hp('5%'),borderRadius:8, justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
            <IoniconsI name = "md-cube" size={wp('6%')} color="#FFF" />
            <Text style={{color:'#FFF',fontWeight:'bold'}}>  Use App</Text>
          </View>

          <View style={{backgroundColor:'#ccc',width:wp('12%'),height : hp('5%'),borderRadius:8,justifyContent:'center',alignItems:'center'}}>
            <MaterialCommunityIconsI name="facebook-messenger" size={wp('7%')} color="grey" />
          </View>

          <View style={{backgroundColor:'#ccc',width:wp('12%'),height : hp('5%'),borderRadius:8,justifyContent:'center',alignItems:'center'}}>
            <MaterialCommunityIconsI name="dots-horizontal" size={wp('7%')} color="grey" />
          </View>
        </View>
      </View>

    )
  }
}


export default App;
