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


export default class Sample extends React.Component{
    render(){
        return(
            <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
                <Text style={{color:'#1f5bc2', fontWeight:'bold'}}>
                    This is Sample Screen.
                </Text>
            </View>
        )
    }
}