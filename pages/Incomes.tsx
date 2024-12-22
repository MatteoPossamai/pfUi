import { TouchableOpacity, Text, View } from "react-native";
import { Props } from "../App";
import React from "react";

const Incomes: React.FC<Props> = ({ page, setPage }) => {
  return (
    <View>
      {page === "incomes" && (
        <View>
          <TouchableOpacity onPress={() => setPage("menu")}>
            <Text>Back Menu</Text>
          </TouchableOpacity>
          <Text>Incomes</Text>
        </View>
      )}
    </View>
  );
};

export default Incomes;
