import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/services/GlobalApi";
import HomeRecipeCard from "./HomeRecipeCard";

const LatestRecipes = () => {
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {
    const result = await GlobalApi.getAllRecipesByLimit(10);
    // console.log(result?.data?.data);
    setRecipeList(result?.data?.data);
  };
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 20,
        }}
      >
        LatestRecipes
      </Text>
      <FlatList
      horizontal={true}
        data={recipeList}
        renderItem={({ item, index }) => (
          <View key={index}>
            <HomeRecipeCard recipe={item}/>
          </View>
        )}
      />
    </View>
  );
};

export default LatestRecipes;
