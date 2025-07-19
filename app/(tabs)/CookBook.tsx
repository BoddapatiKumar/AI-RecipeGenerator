import RecipeCard from "@/components/RecipeCard";
import { UserContext } from "@/context/UserContext";
import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useContext, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CookBook = () => {
  const { user } = useContext(UserContext);
  const [recipeList, setRecipeList] = useState();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    getAllRecipeList();
  }, []);

  const getAllRecipeList = async () => {
    const result = await GlobalApi.getAllRecipesByEmail(user?.email);
    // console.log(result?.data?.data);
    setRecipeList(result?.data?.data);
  };

  const savedRecipes=async()=>{
    const result=await GlobalApi.savedRecipeList(user?.email);
    console.log(result.data.data);
  }

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
      <View style={[styles.tabContainer, { marginBottom: 6 }]}>
        <TouchableOpacity
          style={[styles.tabContainer, { opacity: activeTab === 1 ? 1 : 0.4 }]}
          onPress={() => {setActiveTab(1); getAllRecipeList()}}
        >
          <Ionicons name="sparkles-sharp" size={24} color="black" />
          <Text style={styles.tabText}>My Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabContainer, { opacity: activeTab === 2 ? 1 : 0.4 }]}
          onPress={() => {setActiveTab(2);savedRecipes()}}
        >
          <Ionicons name="bookmark" size={24} color="black" />
          <Text style={styles.tabText}>Saved Recipe</Text>
        </TouchableOpacity>
      </View>
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

const styles = StyleSheet.create({
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 4,
    justifyContent: "space-between",
  },
  tabText: {
    fontFamily: "outfit",
    fontSize: 20,
  },
});
