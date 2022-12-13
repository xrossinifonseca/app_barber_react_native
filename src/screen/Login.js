import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";

const Login = () => {
  const navigate = useNavigation();

  //   useLayoutEffect(() => {
  //     navigate.setOptions({
  //       headerShown: false,
  //     });
  //   });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center justify-center space-y-4 relative">
        <Text className="text-start font-bold text-4xl absolute top-40">
          CONFIRMAR CÓDIGO{"\n"}DE
          <Text className="text-primary-300"> VALIDAÇÃO</Text>
        </Text>
        {/* 
        <Text className="text-secondary-200 w-[80%] text-lg">
          Insira seu número para receber um código de validação.
        </Text> */}
        <TextInputMask
          className="border border-primary-300 text-xl p-2 w-[80%] h-12"
          keyboardType="numeric"
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
        />

        <TouchableOpacity
          className="bg-primary-300 w-72 items-center h-14 justify-center rounded-full mt-4 "
          onPress={() => verifyNumber()}
        >
          <Text className="text-white font-bold text-xl">Confirmar</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
