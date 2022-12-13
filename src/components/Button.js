import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className="bg-white w-72 items-center h-14 justify-center rounded-full mt-4 "
      onPress={onPress}
    >
      <View>
        <Text className="text-primary-300 font-bold text-xl">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
