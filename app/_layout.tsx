import { UserContext } from "@/context/UserContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LogtoConfig, LogtoProvider, UserScope } from "@logto/rn";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  const [user, setUser] = useState();

  const [loaded, error] = useFonts({
    "outfit-semibold": require("./../assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
  });

  const config: LogtoConfig = {
    endpoint: "https://3kqfak.logto.app/",
    appId: "2ynayj46l7hdsxjmy2cnq",
    scopes: [UserScope.Email],
  };

  return (
    <LogtoProvider config={config}>
      <UserContext.Provider value={{ user, setUser }}>
        <Stack>
          <Stack.Screen
            name="Landing"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="recipe-by-category/index"
            options={{
              headerTransparent:true,
              headerTitle:''
            }}
          />
          <Stack.Screen
            name="recipe-detail/index"
            options={{
              headerTitle:'Details',
              headerRight:()=>(
                <Ionicons name="share" size={24} color="black" />
              )
            }}
          />
          
        </Stack>
      </UserContext.Provider>
    </LogtoProvider>
  );
}
