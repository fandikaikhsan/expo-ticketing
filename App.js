import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Button, Modal } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import styles from "./styles/style"

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [barcode, setBarcode] = useState("")
  const [hasPermission, setHasPermission] = useState(false)

  console.log("barcode", barcode)
  console.log("hasPermission", hasPermission)

  const handleBarCodeScanned = ({ type, data }) => {
    const barcode = "http://localhost:3000"

    if (data === barcode) {
      setBarcode("true")
      setHasPermission(true)
    } else {
      setBarcode("false")
      setHasPermission(false)
    }

    setScanned(true)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Fandika</Text>
      <Text style={styles.text}>Please scan to check in gate 1</Text>
      {/* button to open modal */}
      <Button
        title="Open Modal"
        onPress={() => {
          setModalVisible(true)
        }}
      />

      {/* react native modal */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.")
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            {/* button to close modal */}
            <Button
              title="Close Modal"
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            />

            {/* barcode scanner */}
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />

            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => setScanned(false)}
              />
            )}

            {/* button to close modal */}
          </View>
          {/* text with green background color */}
          {scanned && (
            <Text
              style={
                hasPermission ? styles.textGreenStyle : styles.textRedStyle
              }
            >
              {barcode}
            </Text>
          )}
          <Button
            title="Close Modal"
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
          />
        </View>
      </Modal>
    </View>
  )
}
