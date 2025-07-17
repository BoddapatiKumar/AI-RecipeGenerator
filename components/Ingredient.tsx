import Colors from "@/services/Colors";
import React from "react";
import { FlatList, Text, View } from "react-native";

const Ingredient = ({ ingredients }: any) => {
  return (
    <View
      style={{
        marginTop: 10,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-Bold",
            fontSize: 20,
          }}
        >
          Ingredient
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
          }}
        >
          {ingredients?.length} items
        </Text>
      </View>
      <FlatList
        data={ingredients}
        renderItem={({ item, index }) => (
          <View key={index} style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 7,
                padding: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  padding: 5,
                }}
              >
                {item?.icon}
              </Text>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 18,
                }}
              >
                {item?.name}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 18,
                  color: Colors.GRAY,
                }}
              >
                {item?.quantity}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Ingredient;
