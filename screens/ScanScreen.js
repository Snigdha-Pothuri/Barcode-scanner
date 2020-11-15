import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component {
    constructor () {
        super ();
         this.state = {
             hasCameraPermissions : null ,
             scanned : false,
             scannedData : "",
             buttonState : "normal"
         }
    } 

    getCameraPermissions = async (id) =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
      }

      handleBarCodeScanned = async({type, data})=>{
        const {buttonState} = this.state
        }
        

  render () {
      return (
          <View>
            <TouchableOpacity>
                <Text> Barcode Scanner </Text>
            </TouchableOpacity>
          </View>
      )
  }

