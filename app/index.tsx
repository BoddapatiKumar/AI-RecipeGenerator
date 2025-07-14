import { useLogto } from "@logto/rn";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const { getIdTokenClaims, isAuthenticated } = useLogto();

  useEffect(() => {
    if (isAuthenticated) {
      getIdTokenClaims().then((userdata) => {
        console.log(userdata);
      });
    }
  }, [isAuthenticated, getIdTokenClaims]);

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
