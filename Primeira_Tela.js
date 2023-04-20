import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState, useTransition } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const [box, setBox] = useState([
    { key: 0 },
    { key: 1 },

  ])

  const [exmplo, setExemplo] = useState(box);
  const [val, SetVal] = useState(2);

  const addElement = () => {
    var newArray = [...box, { key: val, }];
    SetVal(val + 1);
    console.log(box.length);
    setExemplo(newArray);
    setBox(newArray);
  }

  const RemoverElemento = (key) => {
    const OldBox = box.filter((box) => box.key != key)
    setBox(OldBox)
    console.log(box.length);
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Ionicons name="settings-sharp" size={50} color="black" />
      </View>
      <View style={styles.Relembre}>
        <Text style={styles.text1}>Re|Lembre</Text>
      </View>
      <FlatList
        numColumns={1}
        data={box}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.list}>
            <TouchableOpacity style={styles.Notification}>
              <Ionicons name="ios-notifications-outline" size={35} color="black" />
            </TouchableOpacity>
            <Text style={styles.MinText}>Título</Text>
            <TouchableOpacity style={{ justifyContent: "center", }}
              onPress={() => RemoverElemento(item.key)}
            >
              <Ionicons name="trash-outline" size={35} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: "center", }}>
              <Ionicons name="ellipsis-vertical" size={35} color="black" />
            </TouchableOpacity>
          </TouchableOpacity>

        )
        }
      />
      <View>
        <TouchableOpacity style={styles.add}
          onPress={addElement}
        >
          <Ionicons name="md-add-circle" size={70} color="#735702" />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  top: {
    marginTop: 25,
    width: "90%",
    height: 80,
    justifyContent: "flex-start",
    marginLeft: 1,
  },
  Relembre: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },
  text1: {
    fontSize: 50,
  },
  list: {
    backgroundColor: "#F2B705",
    flexDirection: "row",
    height: 80,
    marginTop: 20,
    width: 365,
    borderRadius: 30,
  },
  add: {
    marginBottom: 40,
    borderRadius: 50,
    marginTop: 10,
  },
  Notification: {
    justifyContent: "center",
    marginLeft: 5,
  },
  MinText: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    opacity: 0.3,
    width: "67%"
  },
});
