import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";

export const FormAnketa = () => {
  return (
    <View>
      <Formik
        initialValues={{ anketa: "", vopros1: "", vopros2: "", vopros3: "" }}
        onSubmit={(values) => {}}
      >
        {(props) => <View></View>}
      </Formik>
    </View>
  );
};
