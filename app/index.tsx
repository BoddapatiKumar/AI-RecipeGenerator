
import { Text, View } from "react-native";

export default function Index() {
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit-Bold",
        }}
      >
        CookMate app
      </Text>
      {/* <Redirect href={'/Landing'}/> */}
    </View>
  );
}
