import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Button } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homepage</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
})
