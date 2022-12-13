import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { TextInputMask } from "react-native-masked-text";
import axios from "axios";

const Register = () => {
  const [numberPhone, setNumberPhone] = useState("");
  const navigate = useNavigation();
  useLayoutEffect(() => {
    navigate.setOptions({
      headerShown: false,
    });
  });

  const verifyNumber = () => {
    // if (numberPhone.length === 0) {
    //   return console.log("numero invalido");
    // }
    // axios
    //   .post("http://192.168.0.104:3000/phone", {
    //     number: numberPhone,
    //   })
    //   .then((resp) => resp)
    //   .catch((err) => console.log(err));

    return navigate.navigate("Verify");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 items-center justify-center space-y-4 relative">
        <Text className="text-start font-bold text-4xl absolute top-40">
          INFORME{"\n"}SEU <Text className="text-primary-300">NÚMERO</Text>
        </Text>

        <Text className="text-secondary-200 w-[80%] text-lg">
          Insira seu número para receber um código de validação.
        </Text>
        <TextInputMask
          className="border border-primary-300 text-xl p-2 w-[80%] h-12"
          keyboardType="numeric"
          type={"cel-phone"}
          options={{
            maskType: "BRL",
            withDDD: true,
            dddMask: "(99) ",
          }}
          value={numberPhone}
          onChangeText={(text) => setNumberPhone(text)}
        />

        <TouchableOpacity
          className="bg-primary-300 w-72 items-center h-14 justify-center rounded-full mt-4 "
          onPress={() => verifyNumber()}
        >
          <Text className="text-white font-bold text-xl">Continue</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
