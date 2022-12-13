import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "react-native-heroicons/solid";

const BookingScreen = () => {
  const navigate = useNavigation();
  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  });

  const {
    params: { name },
  } = useRoute();

  //   console.log(params);

  const daysWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "SEX", "Sab"];

  return (
    <SafeAreaView className="bg-primary-100 flex-1">
      <View className="flex-row justify-center h-20 items-center p-2 relative">
        <TouchableOpacity
          className="bg-primary-200 p-2 rounded-full absolute left-4"
          onPress={() => navigate.goBack()}
        >
          <ArrowLeftIcon color={"#C79B00"} />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">
          AGENDA<Text className="text-yellow-500">MENTO</Text>
        </Text>
      </View>

      <View className="bg-black h-24">
        <View className="flex-row justify-between p-2">
          <ChevronLeftIcon color={"#fff"} />
          <Text className="text-xl text-white">NOVEMBRO</Text>
          <ChevronRightIcon color={"#fff"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BookingScreen;
