import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <View className="h-16 bg-pink-500"></View>
      <SafeAreaView className="flex flex-1 m-5">
        <View className="border-300">
          <Text>Search bar</Text>
        </View>
        <Text className="text-lg font-semibold">GoodPanda</Text>
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
