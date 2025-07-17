import { View, Text, FlatList } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import RecipeIntro from "@/components/RecipeIntro";
import Colors from "@/services/Colors";
import Ingredient from "@/components/Ingredient";
import RecipeSteps from "@/components/RecipeSteps";
import CreateRecipe from "@/components/CreateRecipe";

const RecipeDetail = () => {
  const { recipeData } = useLocalSearchParams();
  const recipe = JSON.parse(recipeData as string);
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.WHITE,
            height: "100%",
          }}
        >
          <RecipeIntro recipe={recipe} />
          <Ingredient ingredients={recipe?.ingredients} />
          <RecipeSteps steps={recipe?.steps} />

          <Text
            style={{
              fontFamily: "outfit-semibold",
              fontSize: 17,
              color: Colors.GRAY,
              marginTop:10
            }}
          >
            Looking for a new recipe? Create here
          </Text>
          <CreateRecipe />
        </View>
      }
    />
  );
};

export default RecipeDetail;
