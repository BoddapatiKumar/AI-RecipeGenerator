import CategoryList from "@/components/CategoryList";
import CreateRecipe from "@/components/CreateRecipe";
import IntroHeader from "@/components/IntroHeader";
import Colors from "@/services/Colors";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Home = () => {
  return (
    <ScrollView
      style={{
        height: "100%",
        backgroundColor: Colors.WHITE,
        padding:25
      }}
    >
      {/* Intro */}
      <IntroHeader />

      {/* RecipeGenerator Ui */}
      <CreateRecipe />

      {/* Categories */}
      <CategoryList />
    </ScrollView>
  );
};

export default Home;
