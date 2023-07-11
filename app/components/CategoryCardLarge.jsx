import { View, Text, Image } from "react-native";

import { TouchableOpacity } from "react-native";

const CategoryCardLarge = ({ title, desc }) => {
  return (
    <TouchableOpacity className="flex-1 m-1 justify-between p-4 bg-white rounded-md border-[1px] border-gray-200 shadow-xs">
      <View>
        <Text className="text-xl font-bold">{title}</Text>
        <Text>{desc}</Text>
      </View>

      <View className="flex-row h-24 items-end -mb-4">
        <Image
          source={{
            url: "https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-hk.png?width=1264",
          }}
          className="h-full w-full"
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCardLarge;
