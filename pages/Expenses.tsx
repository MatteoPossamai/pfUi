import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Props } from "../App";

const Expenses: React.FC<Props> = ({ page, setPage }) => {
  return (
    <View>
      {page === "expenses" && (
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

export default Expenses;
