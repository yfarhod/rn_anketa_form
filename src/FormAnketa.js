import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { TextInput, Button, Text } from "react-native-paper";
import { Formik } from "formik";

export const FormAnketa = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Formik
          initialValues={{ anketa: "", vopros1: "", vopros2: "", vopros3: "" }}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}
        >
          {(props) => (
            <View>
              <Text style={styles.inputField}>Номер анкеты</Text>
              <TextInput
                style={styles.inputField}
                placeholder="номер анкеты"
                onChangeText={props.handleChange("anketa")}
                value={props.values.anketa}
              />
              <Text style={styles.inputField}>Вопрос 1</Text>
              <TextInput
                style={styles.inputField}
                placeholder="ответ 1"
                onChangeText={props.handleChange("vopros1")}
                value={props.values.vopros1}
              />
              <Text style={styles.inputField}>Вопрос 2</Text>
              <TextInput
                style={styles.inputField}
                placeholder="ответ 2"
                onChangeText={props.handleChange("vopros2")}
                value={props.values.vopros2}
              />
              <Text style={styles.inputField}>Вопрос 3</Text>
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
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    backgroundColor: "white",
  },
  inputField: {
    marginHorizontal: 20,
    marginVertical: 6,
  },
});
