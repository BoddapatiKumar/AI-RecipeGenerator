import Colors from "@/services/Colors";
import GlobalApi from "@/services/GlobalApi";
import React, { useContext, useRef, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ActionSheet, { ActionSheetRef } from "react-native-actions-sheet";
import Prompt from "./../services/Prompt";
import Button from "./Button";
import { UserContext } from "@/context/UserContext";

const CreateRecipe = () => {
  const [input, setInput] = useState<string>("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const {user}=useContext(UserContext);

  const onGenerate = async () => {
    if (!input) {
      Alert.alert("Please enter input");
      return;
    }

    setLoading(true);

    try {
      const result = await GlobalApi.AiModel(
        `${input}\n\n${Prompt.GENERATE_RECIPE_OPTION_PROMPT}`
      );

      let raw = result?.choices[0]?.message?.content || "";
      console.log("✅ Raw Recipe Response:\n", raw);

      // Clean potential markdown wrapping
      raw = raw.replace(/```json|```/g, "").trim();

      const parsed = JSON.parse(raw);
      setRecipes(parsed);
      actionSheetRef?.current?.show();
    } catch (error) {
      console.error("❌ AI Error:", error);
      Alert.alert("Failed to generate recipe options");
    }

    setLoading(false);
  };

  const generateCompleteRecipe = async (option: any) => {
    try {
      const prompt = `Recipe Name: ${option?.recipeName}\nDescription: ${option?.description}\n${Prompt.GENERATE_COMPLETE_RECIPE}`;
      const result = await GlobalApi.AiModel(prompt);

      let raw = result?.choices[0]?.message?.content || "";
      console.log("📄 Raw Full Recipe:\n", raw);

      raw = raw.replace(/```json|```/g, "").trim();

      const parsed = JSON.parse(raw);
      const imageUrl = await generateRecipeImage(parsed.imagePrompt);
      const insertedRecord = await saveToDb(parsed, imageUrl);

      console.log("✅ Saved Recipe:", insertedRecord);
    } catch (e) {
      console.error("🚨 Failed to generate full recipe", e);
      Alert.alert("Error parsing complete recipe or saving to DB");
    }
  };

  const generateRecipeImage = async (imagePrompt: string) => {
    try {
      const result = await GlobalApi.generateAiImage(imagePrompt);
      const image = result?.data?.image;
      console.log("🖼️ Image URL:", image);
      return image;
    } catch (e) {
      console.error("❌ Image generation failed", e);
      return "";
    }
  };

  const saveToDb = async (content: any, imageUrl: string) => {
    try {
      const payload = {
        ...content,
        recipeImage: imageUrl,
        userEmail:user?.email,
        category: content?.category,
      };

      const result = await GlobalApi.createRecipe(payload);
      return result.data?.data;
    } catch (error) {
      console.error("❌ DB Save Failed", error);
      return null;
    }
  };

  return (
    <View style={styles.Container}>
      <Image
        source={require("./../assets/images/pan.gif")}
        style={styles.panImage}
      />

      <Text style={styles.heading}>
        Warm up your Stove, let us start Cooking!
      </Text>

      <Text style={styles.subHeading}>Make something for your Loved ones</Text>

      <TextInput
        style={styles.textInput}
        placeholder="What do you want to make? Add your ingredients"
        multiline={true}
        onChangeText={(value) => setInput(value)}
      />

      <Button
        label={"Generate Recipe"}
        onPress={onGenerate}
        loading={loading}
        icon="sparkles"
      />

      <ActionSheet ref={actionSheetRef}>
        <View style={styles.actionSheetContainer}>
          <Text style={styles.heading}>Select Recipe</Text>
          {recipes?.map((item: any, index: number) => (
            <TouchableOpacity
              key={index}
              style={styles.recipeContainer}
              onPress={() => generateCompleteRecipe(item)}
            >
              <Text style={{ fontFamily: "outfit-Bold", fontSize: 16 }}>
                {item?.recipeName}
              </Text>
              <Text style={{ fontFamily: "outfit", color: Colors.GRAY }}>
                {item?.description}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ActionSheet>
    </View>
  );
};

export default CreateRecipe;

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    padding: 15,
    borderRadius: 25,
    backgroundColor: Colors.SECONDARY,
    alignItems: "center",
  },
  panImage: {
    width: 80,
    height: 80,
  },
  heading: {
    fontFamily: "outfit-semibold",
    fontSize: 17,
    textAlign: "center",
  },
  subHeading: {
    fontFamily: "outfit",
    fontSize: 16,
    marginTop: 6,
  },
  textInput: {
    backgroundColor: Colors.WHITE,
    marginTop: 8,
    width: "100%",
    borderRadius: 15,
    height: 100,
    textAlignVertical: "top",
    padding: 15,
    fontSize: 15,
  },
  actionSheetContainer: {},
  recipeContainer: {
    padding: 15,
    borderWidth: 0.2,
    borderRadius: 15,
    marginTop: 15,
  },
});
