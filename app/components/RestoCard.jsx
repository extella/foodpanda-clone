import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const RestoCard = () => {
  return (
    <TouchableOpacity className="flex w-[70vw] mr-4">
      <Image
        source={{
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtA4V-xsk_wHfCVk4mc6SjlcI_OHBWM8fQQ&usqp=CAU",
        }}
        className="h-[20vh] w-full rounded-lg"
      />

      <View className="py-2 space-y-1">
        <Text className="font-semibold text-lg">Chooks to Go - Katipunan</Text>
        <Text className="text-lg text-gray-500">₱₱ Burgers, Sandwiches</Text>
        <Text className="font-bold">₱ 49 delivery fee</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestoCard;
