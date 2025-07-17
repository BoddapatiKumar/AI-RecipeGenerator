import CategoryList from "@/components/CategoryList";
import CreateRecipe from "@/components/CreateRecipe";
import IntroHeader from "@/components/IntroHeader";
import LatestRecipes from "@/components/LatestRecipes";
import Colors from "@/services/Colors";
import React from "react";
import { FlatList, ScrollView,} from "react-native";

const Home = () => {
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={
        <ScrollView
          style={{
            height: "100%",
            backgroundColor: Colors.WHITE,
            padding: 25,
          }}
        >
          {/* Intro */}
          <IntroHeader />

          {/* RecipeGenerator Ui */}
          <CreateRecipe />

          {/* Categories */}
          <CategoryList />
          <LatestRecipes />
        </ScrollView>
      }
    />
  );
};

export default Home;
