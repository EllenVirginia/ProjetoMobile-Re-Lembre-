import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState, useTransition } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {

  const [produtos, setPrdotuos] = useState(
    [
      { Produto: "Exemplo", key: 1 },
      { Produto: "Exemplo", key: 2 },
      { Produto: "Exemplo", key: 3 },
      { Produto: "Exemplo", key: 4 },
      { Produto: "Exemplo", key: 5 },
      { Produto: "Exemplo", key: 6 },
      { Produto: "Exemplo", key: 7 },
      { Produto: "Exemplo", key: 8 },
      { Produto: "Exemplo", key: 9 },
    ]
  )

  const [nameButton, setButton] = useState("Salvar alterações");
  const [funcaoT, setFunctionT] = useState(true)
  const [funcaoD, setFunctionD] = useState(true)
  const [funcaoTP, setFunctionTP] = useState(true)
  const [Descrição, setDescrição] = useState("Descrição")
  const [tempo, setTempo] = useState("0")
  const [titulo, setTitulo] = useState("Títutlo")

  const ativar = () => {
    setFunctionT(!funcaoT)
  }
  const ativar2 = () => {
    setFunctionD(!funcaoD)
  }
  const ativar3 = () => {
    setFunctionTP(!funcaoTP)
  }

  const Salvar = () => {
    if (funcaoD == false && funcaoT == false && funcaoTP == false) {
      setFunctionT(!funcaoT)
      setFunctionD(!funcaoD)
      setFunctionTP(!funcaoTP)
    } else {
      if (funcaoD == false) {
        setFunctionD(!funcaoD)
      }
      if (funcaoT == false) {
        setFunctionT(!funcaoT)
      }
      if (funcaoTP == false) {
        setFunctionTP(!funcaoTP)
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.top}>
          <TouchableOpacity>
            <Ionicons name="settings-sharp" size={50} color="black"
              style={{ marginTop: 10, }} />
          </TouchableOpacity>
        </View>
        <View style={styles.Relembre}>
          <Text style={styles.text1}>Re|Lembre</Text>
        </View>
      </View>

      <View style={styles.bigBox}>
        <View style={styles.viewBox1}>
          <Ionicons name="ios-notifications-outline" size={35} color="black"
            style={{ marginHorizontal: 10, }}
          />
          <View>
            {funcaoT ?
              <TouchableOpacity
                onPress={ativar}
              >
                <Text style={{ fontSize: 20, opacity: 0.5 }}>{titulo}</Text>
              </TouchableOpacity>
              :
              <TextInput
                multiline
                placeholder="Escreva Título"
                onChangeText={setTitulo}
              />
            }

            {funcaoD ?
              <TouchableOpacity
                onPress={ativar2}
              >
                <Text style={{ fontSize: 15, opacity: 0.5 }}>{Descrição}</Text>
              </TouchableOpacity>
              :
              <TextInput
                multiline
                placeholder="Escreva a Descrição"
                onChangeText={setDescrição}
              />
            }
          </View>
        </View>
        <Text style={{ marginHorizontal: 130, fontSize: 20, textAlign: "justify", marginTop: 20, opacity: 0.5, }}>Produtos:</Text>
        <ScrollView styles={{ marginBottom: 10, }}>
          {
            produtos.map(
              (item) => {
                return (
                  <View style={styles.List}>
                    <Text style={{ opacity: 0.5, }}>{item.Produto}</Text>
                  </View>
                )
              }
            )
          }
        </ScrollView>
        {funcaoTP ?
          <TouchableOpacity
            onPress={ativar3}
            style={styles.time}
          >
            <Text style={{ fontSize: 15, opacity: 0.8, marginTop: 10, }}>Tempo restante: {tempo}</Text>
          </TouchableOpacity>
          :
          <View style={styles.input}>
            <TextInput
              multiline
              placeholder="Quanto Falta?"
              onChangeText={setTempo}
            />
          </View>
        }
      </View>
      <View style={{ marginTop: 80, }}>
        <Button
          title={nameButton}
          onPress={Salvar}
        />
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
  view1: {
    flexDirection: "row"
  },
  top: {
    marginTop: 25,
    width: "48%",
    height: 80,
    justifyContent: "flex-start",
  },
  Relembre: {
    width: "48%",
    justifyContent: "center",
    height: 80,
    marginTop: 25,
    alignItems: "flex-end",
  },
  text1: {
    fontSize: 25,
  },
  bigBox: {
    marginTop: "35%",
    backgroundColor: "#F2B705",
    width: "90%",
    height: 350,
    borderRadius: 40,
  },
  viewBox1: {
    flexDirection: "row",
    alignItems: "center",
    height: "20%"
  },
  List: {
    marginLeft: 40,
    marginBottom: 5,

  },
  time: {
    marginLeft: 40,
    marginBottom: 15,
    height: 45,
  },
  input: {
    marginLeft: 40,
    marginBottom: 15,
    height: 45,
  }
});
