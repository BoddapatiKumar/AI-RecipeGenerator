import { useFonts } from "expo-font";
import { Stack } from "expo-router";
export default function RootLayout() {
  const [loaded, error] = useFonts({
    "outfit-semibold": require("./../assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-Bold": require("./../assets/fonts/Outfit-Bold.ttf"),
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="Landing"
        options={{
          headerShown:false
        }}
      />
    </Stack>
  );
}
