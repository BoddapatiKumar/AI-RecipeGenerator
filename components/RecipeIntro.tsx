import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/services/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

const RecipeIntro = ({ recipe }: any) => {
  return (
    <View>
      <Image
        source={{
          uri: recipe?.recipeImage.replace(
            "ai-guru-lab-images/",
            "ai-guru-lab-images%2F"
          ),
        }}
        style={{
          width: "100%",
          height: 240,
          borderRadius: 15,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-semibold",
          fontSize: 18,
          marginTop: 7,
        }}
      >
        {recipe?.recipeName}
      </Text>
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 20,
          marginTop: 7,
        }}
      >
        Description
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
          color: Colors.GRAY,
          marginTop: 3,
        }}
      >
        {recipe?.description}
      </Text>
      <View
        style={{
          marginTop: 10,
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-between',
          gap:5
        }}
      >
        <View style={styles.featurContainer}>
          <Ionicons name="leaf" size={24} color={Colors.PRIMARY} />
          <View>
            <Text style={styles.mainText}>{recipe?.calories}Cal</Text>
            <Text>Calories</Text>
          </View>
        </View>
        <View style={styles.featurContainer}>
          <Ionicons name="time" size={24} color={Colors.PRIMARY} />
          <View>
            <Text style={styles.mainText}>{recipe?.cookTime}min</Text>
            <Text>Time</Text>
          </View>
        </View>
        <View style={styles.featurContainer}>
          <Ionicons name="people" size={24} color={Colors.PRIMARY} />
          <View>
            <Text style={styles.mainText}>{recipe?.serveTo}person</Text>
            <Text>ServeTo</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecipeIntro;
const styles = StyleSheet.create({
  featurContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    padding: 10,
    backgroundColor: Colors.SECONDARY,
    borderRadius: 15,
  },
  mainText: {
    fontFamily: "outfit",
    fontSize: 18,
    color: Colors.PRIMARY,
  },
});
