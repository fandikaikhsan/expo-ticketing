// create component to export

import React from "react"
import { View, Text } from "react-native"
import { RNCamera } from "react-native-camera"

const Barcode = () => {
  return (
    <View>
      <Text>Barcode</Text>
      <RNCamera
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: "Permission to use camera",
          message: "We need your permission to use your camera",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
        androidRecordAudioPermissionOptions={{
          title: "Permission to use audio recording",
          message: "We need your permission to use your audio",
          buttonPositive: "Ok",
          buttonNegative: "Cancel",
        }}
      />
      <RNCamera />
    </View>
  )
}

export default Barcode
