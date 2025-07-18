import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import RecipeCard from "@/components/RecipeCard";

const Explore = () => {
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    getAllRecipes();
  }, []);

  const getAllRecipes = async () => {
    const result = await GlobalApi.getAllRecipeList();
    // console.log(result?.data.data);
    setRecipeList(result?.data?.data);
  };

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 30,
        }}
      >
        Explore
      </Text>

      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={recipeList}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              flex: 1,
            }}
          >
            <RecipeCard recipe={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Explore;
