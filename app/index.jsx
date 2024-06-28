// App.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("invalid value");
      }
    } else if (value === "AC") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView className="flex-1  bg-gray-100 p-2">
      <View className="w-full  bg-slate-200 p-6 h-[230px] rounded-xl shadow-xl mb-8">
        <Text className="text-4xl mb-2 text-right font-bold">{input}</Text>
        <Text className="text-3xl text-right text-red-500 mt-3 font-bold">
          {result}
        </Text>
      </View>
      <View className="w-full">
        {[
          ["AC", "%", "^", "/"],
          ["7", "8", "9", "*"],
          ["4", "5", "6", "-"],
          ["1", "2", "3", "+"],
          ["00", "0", ".", "="],
        ].map((row, rowIndex) => (
          <View key={rowIndex} className="flex flex-row justify-around mb-4">
            {row.map((item) => (
              <TouchableOpacity key={item} onPress={() => handlePress(item)}>
                <View className="bg-blue-500 p-6 px-10 rounded-full  m-4">
                  <Text className=" text-white text-2xl text-center font-bold">
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default App;
