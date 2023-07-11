import { TouchableOpacity } from "react-native";
import { View, Text, Image } from "react-native";

const CategoryCardSmall = ({ title, desc }) => {
  return (
    <TouchableOpacity className="flex-1 flex-row h-24 m-1 p-4 bg-white rounded-md border-[1px] border-gray-200 shadow-xs justify-between">
      <View className="flex-1 mr-1">
        <Text className="font-bold text-xl">{title}</Text>
        <Text>{desc}</Text>
      </View>
      <View className="w-[35%] -mb-12 -mr-2">
        <Image
          source={{
            url: "https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-hk.png?width=1264",
          }}
          className="h-full"
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCardSmall;
