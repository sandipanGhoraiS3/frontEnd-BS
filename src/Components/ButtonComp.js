import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";
import colors from "../styles/colors";
import imagePath from "../Constans/imagePath";

const ButtonComp = ({
  btnText,
  btnStyle = {},
  onPress = () => { },
  img,
  btnTextStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{ ...styles.btnStyle, ...btnStyle }}
    >
      {!!img ? (
        <Image style={{ tintColor: colors.white }} source={img} />
      ) : (
        <Text style={{ ...styles.btnTextStyle, ...btnTextStyle }}>
          {btnText}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    height: moderateScale(40),
    width: moderateScale(155),
    backgroundColor: "#03462F",
    alignSelf: "flex-end",
    marginHorizontal: 33,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 1
  },
  btnTextStyle: {
    fontSize: scale(12),
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default ButtonComp;
