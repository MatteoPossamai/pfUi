import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Props } from "../App";

const Menu: React.FC<Props> = ({ page, setPage }) => {
  return (
    <View style={styles.mainContainer}>
      {page === "menu" && (
        <>
          <Text style={styles.title}>Menu</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.blueButton]}
              onPress={() => console.log("Dashboard pressed")}
            >
              <Text style={styles.buttonText}>Dashboard</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.redButton]}
              onPress={() => setPage("expenses")}
            >
              <Text style={styles.buttonText}>Expenses</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.greenButton]}
              onPress={() => setPage("incomes")}
            >
              <Text style={styles.buttonText}>Incomes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.add]}
              onPress={() => console.log("ADD pressed")}
            >
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    position: "absolute",
    bottom: -70,
    right: 20,
    backgroundColor: "#2196F3",
    padding: 15,
    width: 70,
    borderRadius: 70,
    alignItems: "center",
    fontSize: 24,
  },
  mainContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 150,
  },
  buttonContainer: {
    width: "90%",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 20,
    gap: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
  },
  blueButton: {
    backgroundColor: "#2196F3",
  },
  redButton: {
    backgroundColor: "#F44336",
  },
  greenButton: {
    backgroundColor: "#4CAF50",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    gap: 5,
  },
});

export default Menu;
