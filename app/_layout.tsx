import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen name="index" options={{ title: "Home", headerTitle: "", headerShown: false, }} />
      <Stack.Screen name="chat" options={{ title: "Chat", headerShown: true, }} />
      <Stack.Screen name="main" options={{ title: "Main", headerShown: true, }} />

    </Stack>);
}
