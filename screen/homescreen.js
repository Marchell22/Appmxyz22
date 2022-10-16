import React from "react";
import {StyleSheet, Image, Text, TouchableOpecity, View, Button, SafeAreaView, TouchableOpacity } from "react-native";


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
          <Image style={styles.picture} source={require('../assets/icon.png')} />
              <TouchableOpacity onPress={() => navigation.navigate("second")}>
                <View style={styles.button}>
                    <Text style={styles.buttonstyles}> Video</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("third")}>
                <View style={styles.button}>
                    <Text style={styles.buttonstyles}> Album</Text>
                </View>
          </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ffffff",
    alignItems: "center", //Fungsi untuk membuat tampilan di tengah pada bagian pertama
    justifyContent: "center",//Fungsi untuk membuat tampilan berada di tengah tepi kiri
  },
  picture: {
    resizeMode: "contain",
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: "#00FFFF",
    height: 30,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginHorizontal: 10,
    marginVertical: 5,
    top: 20,
  },
    buttonstyles: {
    fontWeight: "300",
    letterSpacing: 0.5,
  },
});