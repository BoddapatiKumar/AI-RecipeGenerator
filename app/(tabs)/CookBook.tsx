import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import { UserContext } from "@/context/UserContext";
import RecipeCard from "@/components/RecipeCard";

const CookBook = () => {
  const { user } = useContext(UserContext);
  const [recipeList, setRecipeList] = useState();

  useEffect(() => {
    getAllRecipeList();
  }, []);

  const getAllRecipeList = async () => {
    const result = await GlobalApi.getAllRecipesByEmail(user?.email);
    // console.log(result?.data?.data);
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
          fontSize: 35,
        }}
      >
        CookBook
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

export default CookBook;
