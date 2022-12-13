import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserIcon, Bars3Icon } from "react-native-heroicons/solid";
import Services from "../components/Services";
import { getServices } from "../api/api";

const HomeScreen = () => {
  const [services, setServices] = useState([]);

  const navigate = useNavigation();
  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getServices("services")
      .then((resp) => setServices(resp.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView className="bg-primary-100 flex-1 ">
      <View className="flex-row justify-between h-16 items-center p-2 ">
        <TouchableOpacity>
          <Bars3Icon color={"#fff"} />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">
          BARBER<Text className="text-yellow-500">SHOP </Text>
        </Text>

        <TouchableOpacity>
          <UserIcon color={"#fff"} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View className="items-center justify-center p-2 relative">
          <Image
            source={require("../assets/heroBanner.png")}
            className="rounded-xl "
          />
        </View>

        <Text className="text-yellow-500 text-2xl text-center font-bold ">
          SERVIÇOS
        </Text>
        {services.map((service) => (
          <View key={service._id}>
            <Services service={service} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
