import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Alert,
  Modal,
} from "react-native";
import React, { useState, useCallback } from "react";
// import { TextInput } from "react-native-gesture-handler";
import { moderateScale, scale } from "react-native-size-matters";
import styles from "./styles";
import TextInputWithLabel from "../../Components/TextInputWithLabel";
import imagePath from "../../Constans/imagePath";
import { moderateVerticalScale } from "react-native-size-matters";
import ButtonComp from "../../Components/ButtonComp";
import navigationStrings from "../../Constans/navigationStrings";
import ModalPopup from "../../Components/modelPopup";

const LoginScreen = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [otpModalVisible, setOtpModalVisible] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const toggleOtpModal = () => {
    setOtpModalVisible(!otpModalVisible);
  };

  const handleGenerateOTP = () => {
    toggleModal();
    toggleOtpModal();
  };
  const handleVerifyOTP = () => {
    // Add logic here to verify OTP

    // Navigate back to login screen
    toggleOtpModal();
    navigation.navigate(navigationStrings.FORGETPASSWORD);
  };

  const OTPInputBox = () => {
    return (
      <TextInput
        style={styles.otpInputStyle}
        keyboardType="numeric"
        maxLength={1}
        // onChangeText={text => handleOTPInput(text)}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.LoginContainer}>
            <View>
              <View>
                <Image
                  source={imagePath.backgroundPic}
                  style={styles.ImgBack}
                />
                <View style={styles.TextBible}>
                  <Text style={styles.logoText}>
                    <Text style={styles.largeText}>Bible S</Text>
                    <Text style={styles.redText}>t</Text>
                    <Text style={styles.largeText}>udy</Text>
                    <View>
                      <Text style={styles.withPastor}>with Pastor Ronnie</Text>
                    </View>
                  </Text>
                </View>
              </View>
              <Image
                source={imagePath.groupVector2}
                style={styles.groupVectorStyle}
              />
              <View>
                <Text style={styles.LoginText}>Login</Text>
                <TextInputWithLabel
                  placeholder="Username"
                  KeyboardType="email-address"
                  leftIcon={imagePath.userIcon}
                />
                <TextInputWithLabel
                  placeholder="Password"
                  secureTextEntry={isVisible}
                  rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                  leftIcon={imagePath.passwordIcon}
                  KeyboardType="numeric"
                  onPressRight={() => setVisible(!isVisible)}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.forgotView}
                  onPress={toggleModal}
                >
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>
                <View style={styles.inputContainer}>
                  <ButtonComp
                    btnText={"Login"}
                    onPress={() =>
                      navigation.navigate(navigationStrings.HOME)
                    }
                    btnStyle={{ left: 31 }}
                  />
                </View>
              </View>
              <View style={styles.lowerContainer}>
                <Text style={styles.footerText}>
                  Don't have an account yet?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
                >
                  <Text style={styles.SignUpTextLink}> Sign Up!</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <ModalPopup visible={showModal} onClose={toggleModal}>
        <View style={{ alignItems: "center" }}>
          <View>
            <TouchableOpacity onPress={toggleModal}>
              <Image
                source={require("../../assets/images/x.png")}
                style={styles.xImageStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/phoneNum.png")}
            style={styles.phoneIconStyle}
          />
        </View>
        <Text
          style={styles.enterPhoneNoStyle}
        >
          Enter your phone number
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            bottom: 25,
            color: "#113832",
          }}
        >
          We will send you the 4 digit verification code
        </Text>
        <View>
          <TextInput
            style={{
              width: "100%",
              borderWidth: 1,
              borderColor: "#CCCCCC",
              fontSize: 20,
              borderRadius: 6,
              paddingLeft: 50,
              paddingRight: 50,
              paddingTop: 10,
              paddingBottom: 10,
              backgroundColor: "#BFDED3",
              bottom: 10,
            }}
            placeholder="Phone Number"
            keyboardType="numeric"
            maxLength={10}
            // onChangeText={text => setPhoneNumber(text)}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#03462F",
              borderRadius: 6,
              paddingVertical: 10,
              paddingHorizontal: 20,
              alignSelf: "center",
              marginTop: 8,
              left: 1,
            }}
            onPress={handleGenerateOTP}
          >
            <Text
              style={{
                fontSize: 13,
                color: "white",
                fontWeight: "bold",
                textTransform: "uppercase",
                padding: 3,
              }}
            >
              Generate OTP
            </Text>
          </TouchableOpacity>
        </View>
      </ModalPopup>
      <ModalPopup visible={otpModalVisible} onClose={toggleOtpModal}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={toggleOtpModal}>
            <Image
              source={require("../../assets/images/x.png")}
              style={{
                height: 20,
                width: 20,
                left: 122,
                bottom: 10,
                alignItems: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/phoneNum.png")}
            style={{
              height: 80,
              width: 80,
              marginVertical: 10,
              left: 8,
              bottom: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            bottom: 30,
            color: "#113832",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          Enter your OTP
        </Text>
        <Text
          style={{
            fontSize: 12,
            textAlign: "center",
            bottom: 25,
            color: "#113832",
          }}
        >
          We have sent you a 4-digit OTP on your phone number
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <OTPInputBox />
          <OTPInputBox />
          <OTPInputBox />
          <OTPInputBox />
        </View>
        <View>
          <TouchableOpacity
            style={styles.verifyOtpContainer}
            onPress={handleVerifyOTP}
          >
            <Text
              style={styles.verifyOtpStyle}
            >
              Verify OTP
            </Text>
          </TouchableOpacity>
        </View>
      </ModalPopup>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
