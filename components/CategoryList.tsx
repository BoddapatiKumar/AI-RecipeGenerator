import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/services/GlobalApi";
import { useRouter } from "expo-router";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = async () => {
    const result = await GlobalApi.getCategories();
    // console.log(result.data.data);
    setCategories(result?.data?.data);
  };

  return (
    <View
      style={{
        marginTop: 5,
      }}
    >
      <Text style={styles.heading}>Categories</Text>
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({ item, index }: any) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryContainer}
            onPress={()=>router.push({
              pathname:'/recipe-by-category',
              params:{
                categoryName:item?.name
              },
            })}
          >
            <Image source={{ uri: item?.image?.url }} style={styles.image} />
            <Text
              style={{
                fontFamily: "outfit",
                marginTop: 3,
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "outfit-Bold",
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  categoryContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    marginTop: 8,
  },
});
