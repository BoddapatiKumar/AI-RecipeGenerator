import { UserContext } from "@/context/UserContext";
import React, { useContext, useState } from "react";
import { Image, Switch, Text, View } from "react-native";

const IntroHeader = () => {
  const { user } = useContext(UserContext);
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent:'space-between'
        }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Image
          source={{ uri: user?.picture }}
          style={{
            width: 45,
            height: 45,
            borderRadius: 99,
          }}
        />
        <Text
          style={{
            fontFamily: "outfit-Bold",
            fontSize: 20,
          }}
        >
          Hello,{user?.name}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{
          fontFamily:'outfit-Bold',
          fontSize:16,
        }}>{isEnabled ? "Veg" : "Non-veg"}</Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>
    </View>
  );
};

export default IntroHeader;
