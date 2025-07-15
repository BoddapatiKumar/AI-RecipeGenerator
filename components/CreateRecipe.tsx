import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Colors from "@/services/Colors";
import Button from "./Button";

const CreateRecipe = () => {

  const [input, setInput] = useState<string>("");
   
  return (
    <View style={styles.Container}>
      <Image
        source={require("./../assets/images/pan.gif")}
        style={styles.panImage}
      />

      <Text style={styles.heading}>
        Warm up your Stove let us start Cooking!
      </Text>

      <Text style={styles.subHeading}>Make something for your Loved ones</Text>

      <TextInput
        style={styles.textInput}
        placeholder="What do you want to make?Add your ingredients"
        multiline={true}
        onChangeText={(value) => setInput(value)}
      />

      <Button
        label={"Generate Recipe"}
        onPress={() => console.log("button pressed")}
        icon="sparkles"
      />
    </View>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    padding: 15,
    borderRadius: 25,
    backgroundColor: Colors.SECONDARY,
    display: "flex",
    alignItems: "center",
  },
  panImage: {
    width: 80,
    height: 80,
  },
  heading: {
    fontFamily: "outfit-semibold",
    fontSize: 17,
    textAlign: "center",
  },
  subHeading: {
    fontFamily: "outfit",
    fontSize: 16,
    marginTop: 6,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    marginTop: 8,
    width: "100%",
    borderRadius: 15,
    height: 100,
    textAlignVertical: "top",
    padding: 15,
    fontSize: 15,
  },
});
