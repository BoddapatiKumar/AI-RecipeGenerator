import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { LogtoProvider, LogtoConfig } from "@logto/rn";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "outfit-semibold": require("./../assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
  });

  const config: LogtoConfig = {
    endpoint: "https://q26ehk.logto.app/",
    appId: "cl39jz3yla2ep0bewqvlm",
  };

  return (
    <LogtoProvider config={config}>
      <Stack>
        <Stack.Screen
          name="Landing"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </LogtoProvider>
  );
}
