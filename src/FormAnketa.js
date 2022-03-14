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
        {(props) => (
          <View>
            <TextInput
              placeholder="номер анкеты"
              onChangeText={props.handleChange("anketa")}
              value={props.values.anketa}
            />
            <TextInput
              placeholder="ответ 1"
              onChangeText={props.handleChange("vopros1")}
              value={props.values.vopros1}
            />
            <TextInput
              placeholder="ответ 2"
              onChangeText={props.handleChange("vopros2")}
              value={props.values.vopros2}
            />
            <TextInput
              placeholder="ответ 3"
              onChangeText={props.handleChange("vopros3")}
              value={props.values.vopros3}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
