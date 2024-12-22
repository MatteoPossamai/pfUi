import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

import Menu from "./pages/Menu";
import Expenses from "./pages/Expenses";
import Incomes from "./pages/Incomes";

export default function App() {
  const [page, setPage] = useState("menu");

  return (
    <View style={styles.container}>
      <Menu page={page} setPage={setPage} />
      <Expenses page={page} setPage={setPage} />
      <Incomes page={page} setPage={setPage} />
      <StatusBar style="auto" />
    </View>
  );
}

export type SetPage = (page: string) => void;
export type Props = {
  page: string;
  setPage: SetPage;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", 
    backgroundColor: "#222222",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
