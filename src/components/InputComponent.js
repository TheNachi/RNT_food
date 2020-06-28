import React from "react";
import { TextInput, View, Text, Image } from "react-native";

const InputComponent = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  imageSource,
}) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Image source={imageSource} style={styles.imageStyle} />
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: "#f1f1f1",
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1,
    right: 15,
  },
  containerStyle: {
    height: 60,
    width: 320,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 4,
    borderColor: "#ffffff",
    shadowColor: "rgba(190, 205, 226, 0.5)",
    shadowOpacity: 0.6,
    shadowRadius: 10,
    margin: 10,
    backgroundColor: "#F2F3F7",
    overflow: "hidden",
    elevation: 20,
  },
  imageStyle: {
    height: 19,
    width: 17,
    margin: 30,
  },
};

export default InputComponent;
