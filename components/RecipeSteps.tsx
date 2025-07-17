import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/services/Colors";

const RecipeSteps = ({ steps }: any) => {
  return (
    <View
      style={{
        marginTop: 15,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 20,
        }}
      >
        RecipeSteps
      </Text>
      <FlatList
        data={steps}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 7,
              marginTop: 10,
              padding: 10,
              borderRadius:15,
              borderWidth:0.3
            }}
          >
            <Text
              style={[
                styles.text,
                {
                  padding: 10,
                  width: 40,
                  textAlign: "center",
                  backgroundColor: Colors.SECONDARY,
                  borderRadius: 7,
                },
              ]}
            >
              {index + 1}
            </Text>
            <Text style={[styles.text,{flex:1}]}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default RecipeSteps;

const styles = StyleSheet.create({
  text: {
    fontFamily: "outfit",
    fontSize: 18,
  },
});
