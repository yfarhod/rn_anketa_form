import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import { FormAnketa } from "./src/FormAnketa";

export default function App() {
  return (
    <SafeAreaView>
      <FormAnketa />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
