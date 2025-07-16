import RecipeCard from "@/components/RecipeCard";
import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

const RecipeByCategory = () => {
  const { categoryName } = useLocalSearchParams();
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    getRecipeByCategory();
  }, []);

  const getRecipeByCategory = async () => {
    const result = await GlobalApi.getRecipeByCategory(categoryName as string);
    // console.log(result.data.data);
    setRecipeList(result?.data?.data);
  };
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 80,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-Bold",
          fontSize: 25,
        }}
      >
        Browse {categoryName} Recipes
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

export default RecipeByCategory;
