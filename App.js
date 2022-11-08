import React, { useState, useEffect } from "react"
import { Text, View, StyleSheet, Button, Modal } from "react-native"
import { BarCodeScanner } from "expo-barcode-scanner"
import styles from "./styles/style"

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [scanned, setScanned] = useState(false)
  const [barcode, setBarcode] = useState("")

  console.log("barcode", barcode)

  const handleBarCodeScanned = ({ type, data }) => {
    const barcode = "http://localhost:3000"

    if (data === barcode) {
      setBarcode("true")
    } else {
      setBarcode("false")
    }

    setScanned(true)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homepage</Text>
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

            <Text>{barcode}</Text>

            {/* button to close modal */}
            <Button
              title="Close Modal"
              onPress={() => {
                setModalVisible(!modalVisible)
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  )
}
