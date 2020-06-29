import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import ButtonComponent from "../components/ButtonComponent";
import InputComponent from "../components/InputComponent";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.viewStyles}>
      <ScrollView>
        <Text style={styles.textStyle}>REGISTER</Text>
        <InputComponent
          placeholder="First Name"
          // onChangeText={setEmail}
          imageSource={require("../../assets/profileIcon.png")}
        />
        <InputComponent
          placeholder="Last Name"
          // onChangeText={setEmail}
          imageSource={require("../../assets/profileIcon.png")}
        />
        <InputComponent
          placeholder="Middle Name"
          // onChangeText={setEmail}
          imageSource={require("../../assets/profileIcon.png")}
        />
        <InputComponent
          placeholder="Email"
          // onChangeText={setEmail}
          imageSource={require("../../assets/profileIcon.png")}
        />
        <InputComponent
          placeholder="Phone"
          // onChangeText={setEmail}
          imageSource={require("../../assets/profileIcon.png")}
        />
        <ButtonComponent
          title="Proceed"
          buttonColor="#69541E"
          textColor="#EDF0F4"
          textSize={18}
          shadowColor="rgba(64, 112, 244, 0.5)"
          topMargin={30}
          fontWeight="600"
        />
        <ButtonComponent
          title="I have an account - login"
          buttonColor="#EDF0F4"
          textColor="#456078"
          textSize={14}
          shadowColor="#BECDE2"
          topMargin={60}
          fontWeight="500"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyles: {
    backgroundColor: "#f2f3f8",
    ...StyleSheet.absoluteFillObject,
  },
  textStyle: {
    color: "#000",
    fontWeight: "900",
    fontSize: 40,
    marginTop: 20,
    marginLeft: 40,
    marginBottom: 30,
  },
});

export default RegisterScreen;
