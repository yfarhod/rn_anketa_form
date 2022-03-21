import React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

export const FormAnketa = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ anketa: "", vopros1: "", vopros2: "", vopros3: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Text>Номер анкеты</Text>
            <TextInput
              style={styles.inputField}
              placeholder="номер анкеты"
              onChangeText={props.handleChange("anketa")}
              value={props.values.anketa}
            />
            <Text>Вопрос 1</Text>
            <TextInput
              style={styles.inputField}
              placeholder="ответ 1"
              onChangeText={props.handleChange("vopros1")}
              value={props.values.vopros1}
            />
            <Text>Вопрос 2</Text>
            <TextInput
              style={styles.inputField}
              placeholder="ответ 2"
              onChangeText={props.handleChange("vopros2")}
              value={props.values.vopros2}
            />
            <Text>Вопрос 3</Text>
            <TextInput
              style={styles.inputField}
              placeholder="ответ 3"
              onChangeText={props.handleChange("vopros3")}
              value={props.values.vopros3}
            />
            <Button
              style={styles.inputField}
              mode="contained"
              color="green"
              onPress={props.handleSubmit}
            >
              Добавить
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    backgroundColor: "white",
  },
  inputField: {
    margin: 10,
  },
});
