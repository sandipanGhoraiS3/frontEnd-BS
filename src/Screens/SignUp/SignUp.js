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
} from "react-native";
import React, { useState } from "react";
// import { TextInput } from "react-native-gesture-handler";
import styles from "./styles";
import TextInputWithLabel from "../../Components/TextInputWithLabel";
import imagePath from "../../Constans/imagePath";
import { moderateVerticalScale } from "react-native-size-matters";
import ButtonComp from "../../Components/ButtonComp";
import navigationStrings from "../../Constans/navigationStrings";
import ModalPopup from "../../Components/modelPopup";

const SignUp = ({ navigation }) => {
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
    // Add logic here to verify OTP

    // Navigate back to login screen
    toggleModal();
    navigation.navigate(navigationStrings.LOGIN);
  };
  const handleVerifyOTP = () => {
    toggleModal();
    toggleOtpModal();
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
                <Text style={styles.LoginText}>Sign Up</Text>
                <View style={{ bottom: 10 }}>
                  <TextInputWithLabel
                    placeholder="Username"
                    KeyboardType="email-address"
                    leftIcon={imagePath.userIcon}
                  />
                  <TextInputWithLabel
                    placeholder="Phone Number"
                    KeyboardType="email-address"
                    leftIcon={imagePath.phoneIcon}
                  />
                  <TextInputWithLabel
                    placeholder="Password"
                    secureTextEntry={isVisible}
                    rightIcon={
                      isVisible ? imagePath.hideEye : imagePath.showEye
                    }
                    leftIcon={imagePath.passwordIcon}
                    onPressRight={() => setVisible(!isVisible)}
                  />
                </View>
                <View style={{ marginTop: 8 }}>
                  <ButtonComp btnText={"Sign Up"} onPress={toggleOtpModal} />
                </View>
              </View>
              <View style={styles.lowerContainer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(navigationStrings.LOGIN)}
                >
                  <Text style={styles.SignUpTextLink}> Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
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
            <Text style={styles.verifyOtpStyle}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </ModalPopup>
      <ModalPopup visible={showModal} onClose={toggleOtpModal}>
        <View style={{ alignItems: "center" }}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/images/successfull2.png")}
              style={{
                height: 80,
                width: 80,
                marginVertical: 10,
                marginTop: 25,
                bottom: 30,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              bottom: 30,
              color: "#113832",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            Successfully
          </Text>
          <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            bottom: 25,
            color: "#113832",
          }}
        >
          Your Account has been Created.
        </Text>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#03462F",
                borderRadius: 6,
                paddingVertical: 11,
                paddingHorizontal: 35,
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
                Okay
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ModalPopup>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
