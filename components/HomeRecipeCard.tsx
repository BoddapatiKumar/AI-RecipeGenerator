import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/services/Colors";
import { useRouter } from "expo-router";

const HomeRecipeCard = ({ recipe }: any) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{
        margin: 5,
      }}
      onPress={() =>
        router.push({
          pathname: "/recipe-detail",
          params: {
            recipeData: JSON.stringify(recipe),
          },
        })
      }
    >
      <Image
        source={{ uri: recipe?.recipeImage }}
        style={{
          width: 220,
          height: 140,
          borderRadius: 20,
        }}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "transparent",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,0.8)",
          "rgba(0,0,0,0.8)",
        ]}
        style={{
          position: "absolute",
          bottom: 0,
          padding: 10,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outfit",
            fontSize: 16,
          }}
        >
          {recipe?.recipeName}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeRecipeCard;
