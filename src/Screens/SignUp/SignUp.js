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
import { OtpInput } from "react-native-otp-entry";
import CheckBoxCustom from "../../Components/CheckBoxCustom";

const SignUp = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
                <View style={{ bottom: 15 }}>
                  <TextInputWithLabel
                    placeholder="Username"
                    KeyboardType="default"
                    leftIcon={imagePath.userIcon}
                    // error={"hi"}
                  />
                  <TextInputWithLabel
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    maxLength={10}
                    leftIcon={imagePath.phoneIcon}
                    // error={'hi'}
                    // errorStyle={{right: 285}}
                  />
                  <TextInputWithLabel
                    placeholder="Password"
                    keyboardType="visible-password"
                    secureTextEntry={isVisible}
                    rightIcon={
                      isVisible ? imagePath.hideEye : imagePath.showEye
                    }
                    leftIcon={imagePath.passwordIcon}
                    onPressRight={() => setVisible(!isVisible)}
                    // error={'hi'}
                    // errorStyle={{right: 190}}
                  />
                </View>
                <View style={{ marginTop: 1 }}>
                  <CheckBoxCustom
                    label="Are you Admin?"
                    isChecked={isChecked}
                    onChange={setIsChecked}
                  />
                </View>
                <View style={{ bottom: 13 }}>
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

      {/* <ModalPopup visible={showModal} onClose={toggleOtpModal}>
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
      </ModalPopup> */}

      <ModalPopup visible={otpModalVisible} onClose={toggleOtpModal}>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={toggleOtpModal}>
            <Image
              source={require("../../assets/images/x.png")}
              style={{
                height: 30,
                width: 30,
                left: 127,
                bottom: 10,
                alignItems: "flex-end",
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/Lock.png")}
            style={{
              height: 70,
              width: 70,
              marginVertical: 10,
              left: 7,
              bottom: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            textAlign: "center",
            bottom: 30,
            color: "#113832",
            fontWeight: "bold",
            justifyContent: "center",
          }}
        >
          A verification code has been sent to your phone +91-XXXXX XXX23
        </Text>

        <View>
          <View style={{ marginVertical: 8, bottom: 15 }}>
            <OtpInput
              numberOfDigits={4}
              onTextChange={(text) => console.log(text)}
              focusColor={"#8AC8B3"}
              theme={{
                pincodeContainer: {
                  backgroundColor: "white",
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  color: "red",
                },
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              bottom: 10,
            }}
          >
            <Text>Don't receive the code ?</Text>
            <TouchableOpacity>
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "#095E40",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                {"  "}Resend Code
              </Text>
            </TouchableOpacity>
          </View>
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
