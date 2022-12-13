import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Services = ({ service }) => {
  const { name, price, info, _id } = service;

  const navigate = useNavigation();

  return (
    <View
      key={service._id}
      className=" m-2 h-28 bg-primary-200 p-2 space-y-2 rounded-xl relative"
    >
      <Text className="text-white text-lg">{name}</Text>
      <Text className="text-gray-500 w-[80%]">{info}</Text>
      <Text className="text-yellow-500">R${price} </Text>

      <TouchableOpacity
        className="items-center justify-center  h-8 p-2 absolute right-2 bottom-2 bg-yellow-500 rounded-xl"
        onPress={() => navigate.navigate("Booking", { name })}
      >
        <Text className="text-white font-bold  text-sm  ">Agendar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Services;
