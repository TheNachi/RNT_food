import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonComponent = ({
  onPress,
  title,
  buttonColor,
  textColor,
  textSize,
  shadowColor,
  topMargin,
  fontWeight
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: buttonColor,
        borderRadius: 5,
        width: 320,
        height: 65,
        marginTop: topMargin,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        shadowColor: shadowColor,
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10.0,
        elevation: 24,
      }}
    >
      <Text
        style={{ color: textColor, fontSize: textSize, fontWeight: fontWeight }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
