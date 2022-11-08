// // create modal

// import React, { useState } from "react"
// import { View, Text, StyleSheet, Button } from "react-native"

// export default function Modal() {
//   const [modalVisible, setModalVisible] = useState(false)

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Homepage</Text>
//       {/* button to open modal */}
//       <Button
//         title="Open Modal"
//         onPress={() => {
//           setModalVisible(true)
//         }}
//       />

//       {/* modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert("Modal has been closed.")
//           setModalVisible(!modalVisible)
//         }}
//       >
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello World!</Text>
//             {/* button to close modal */}
//             <Button
//               title="Close Modal"
//               onPress={() => {
//                 setModalVisible(!modalVisible)
//               }}
//             />
//           </View>
//         </View>
//       </Modal>
//     </View>
//   )
// }
