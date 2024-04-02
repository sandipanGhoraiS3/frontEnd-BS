import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import imagePath from "../Constans/imagePath";

const TextInputWithLabel = ({
  placeholder,
  onChangeText = () => {},
  rightIcon,
  leftIcon,
  inputContainer = {},
  onPressRight,
  ...props
}) => {
  return (
    <View style={{ ...styles.inputContainer, ...inputContainer }}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#3B4541"
        {...props}
      />
      {<Image source={leftIcon} style={{ right: 280 }} />}
      {!!rightIcon ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
          <Image
            style={{ right: 50, tintColor: "rgba(0, 0, 0, 0.4)" }}
            source={rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default TextInputWithLabel;

const styles = StyleSheet.create({
  inputContainer: {
    // width: "100%",
    marginTop: moderateScale(30),
    paddingHorizontal: 35,
    alignItems: "center",

    flexDirection: "row",
    // flex: 1,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    fontSize: 16,
    borderRadius: 6,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#BFDED3",
  },
});
