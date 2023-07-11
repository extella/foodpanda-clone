import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CategoryCardLarge from "../components/CategoryCardLarge";
import CategoryCardSmall from "../components/CategoryCardSmall";
import RestoCard from "../components/RestoCard";

const Home = () => {
  const [showSearch, setShowSearch] = useState(true);
  const [oldOffset, setOldOffset] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");

  return (
    <SafeAreaView className="w-full h-full bg-pink-500">
      <View className="flex-row h-18 bg-pink-500 px-4 pb-2 pt-6 justify-between items-center">
        <View className="flex-row items-center">
          <MaterialIcons name="menu" size={32} color="white" />
          <View className="px-4">
            <Text className="text-white font-bold text-lg">
              1380 R Arcenas Street
            </Text>
            <Text className="text-white">Cebu City Cebu</Text>
          </View>
        </View>
        <View className="flex-row items-center space-x-2 pr-2">
          <MaterialCommunityIcons
            name="cards-heart-outline"
            size={28}
            color="white"
          />
          <View className="relative">
            <MaterialCommunityIcons
              name="basket-outline"
              size={28}
              color="white"
            />
            <View className="h-5 w-5 rounded-full bg-white items-center justify-center absolute -bottom-2 -right-1 shadow-sm shadow-pink-600">
              <Text className="text-pink-500 text-sm font-extrabold">1</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        className="flex-1"
        onScrollBeginDrag={(event) => {
          const currentOffset = event.nativeEvent.contentOffset.y;
          setOldOffset(currentOffset);

          if (!(currentOffset < 0) && currentOffset !== 0) {
            if (currentOffset < oldOffset) {
              setScrollDirection("up");
            } else {
              setScrollDirection("down");
            }
          }
        }}
        showsVerticalScrollIndicator={false}
      >
        {scrollDirection === "up" && (
          <View className="flex-1 bg-pink-500 px-4 pt-2 pb-4">
            <View className="flex-row items-center justify-start space-x-1 pl-4 bg-white rounded-full h-12">
              <MaterialIcons
                className=""
                name="search"
                size={24}
                color="gray"
              />
              <TextInput placeholder="Search for shops and restaurants" />
            </View>
          </View>
        )}

        <View className="px-4 pt-4 pb-2 bg-slate-100">
          <View className="flex-row">
            <CategoryCardLarge
              title={"Food delivery"}
              desc={"Order for a slam dunk game day"}
            />
            <CategoryCardLarge
              title={"Shops"}
              desc={"Robinsons, 7-11 & more"}
            />
          </View>
          <View className="flex-row">
            <CategoryCardSmall
              title={"Pick-up"}
              desc={"Skip lines for a fast break"}
            />
            <CategoryCardSmall
              title={"pandamart"}
              desc={"And-1! Snack & more"}
            />
          </View>
          <View className="flex-row">
            <CategoryCardSmall
              title={"Dine-in"}
              desc={"Eat out and save 25%"}
            />
            <CategoryCardSmall
              title={"pandago"}
              desc={"Instant padala service"}
            />
          </View>
        </View>

        <View className="flex-1 bg-white p-5">
          <View className="py-4">
            <Text className="text-xl font-bold">Order it again</Text>
          </View>
          <ScrollView
            className="my-2"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <RestoCard />
            <RestoCard />
            <RestoCard />
          </ScrollView>

          <View className="py-4">
            <Text className="text-xl font-bold">Recommended for you</Text>
          </View>
          <ScrollView
            className="my-2"
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <RestoCard />
            <RestoCard />
            <RestoCard />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
