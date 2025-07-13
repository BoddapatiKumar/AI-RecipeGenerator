import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Marquee } from "@animatereactnative/marquee";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Colors from "@/services/Colors";

export default function Landing() {
  const imageList = [
    require("./../assets/images/1.jpg"),
    require("./../assets/images/2.jpg"),
    require("./../assets/images/3.jpg"),
    require("./../assets/images/4.jpg"),
    require("./../assets/images/5.jpg"),
    require("./../assets/images/6.jpg"),
    require("./../assets/images/c1.jpg"),
    require("./../assets/images/c2.jpg"),
    require("./../assets/images/c3.jpg"),
  ];
  return (
    <GestureHandlerRootView>
      <View>
        <Marquee
          spacing={10}
          speed={0.7}
          style={{
            transform: [{ rotate: "-4deg" }],
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.4}
          style={{
            transform: [{ rotate: "-4deg" }],
            marginTop: 15,
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>
        <Marquee
          spacing={10}
          speed={0.5}
          style={{
            transform: [{ rotate: "-4deg" }],
            marginTop: 15,
          }}
        >
          <View style={styles.imageContainer}>
            {imageList.map((image, index) => (
              <Image key={index} source={image} style={styles.image} />
            ))}
          </View>
        </Marquee>

        <View
          style={{
            backgroundColor: Colors.WHITE,
            height:'100%',
            padding: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-Bold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Cookmate AI 🥗🔍 | Find, Create & Enjoy Delicious Recipes!
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 17,
              color: Colors.GRAY,
              marginTop: 10,
            }}
          >
            Generate delicious recipees in seconds with the power of AI!! 🍔✨
          </Text>
          <TouchableOpacity style={styles.button} onPress={()=>console.log('clicked')}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "outfit",
                color: Colors.WHITE,
              }}
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 160,
    borderRadius: 25,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    padding: 15,
    borderRadius: 15,
    width: 350,
    marginLeft: 20,
    marginTop: 30,
  },
});
