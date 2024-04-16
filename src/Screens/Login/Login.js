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
import { OtpInput } from "react-native-otp-entry";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MyCustomPhoneInput from "../../Components/MyCustomPhoneInput";
import axios from 'axios';
// import { user_login } from "../../api/AuthApi";
import { handle_login } from "../../api/AuthApi";

const LoginScreen = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [otpModalVisible, setOtpModalVisible] = useState(false);

  // let cors = require("cors");
  // app.use(cors());

  // constant for login api connection 
  const [uname, setUname] = useState('')
  const [pword, setPword] = useState('')

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

  // api function
  const handleUname = (text) => {
    // setUname()
    console.log(text)
  }
  const handlePword = (text) => {
    console.log(text)
  }

  // const fetchData = async (uname, pword) => {
  //   try {
  //     const data = {
  //       username: uname,
  //       password: pword
  //     };
  //     console.log(data);

  //     const response = await user_login(data);
  //     navigation.navigate(navigationStrings.HOME)
      
  //   } catch (error) {
  //     console.error('Error fetching data: ', error);
  //   }
  // };
  const fetchData = async (uname, pword) => {
    try {
      // Call handle_login function to handle login or token refresh
      const response = await handle_login({ username: uname, password: pword });
      
      // Navigate to the home screen or perform any other actions upon successful login
      navigation.navigate(navigationStrings.HOME);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle login errors, such as invalid credentials or session expiration
      // You can display an error message to the user or perform any other actions
    }
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
                  value={uname}
                  onChangeText={text => setUname(text)}
                  // error={'hi'}
                />
                <TextInputWithLabel
                  placeholder="Password"
                  secureTextEntry={isVisible}
                  rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                  leftIcon={imagePath.passwordIcon}
                  KeyboardType="numeric"
                  onPressRight={() => setVisible(!isVisible)}
                  value={pword}
                  onChangeText={text => setPword(text)}
                  // error={'hi'}
                  // errorStyle={{right: 304}}
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
                    // onPress={() => navigation.navigate(navigationStrings.HOME)}
                    onPress={() => fetchData(uname, pword)}
                    btnStyle={{ left: 31, marginTop: 15 }}
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
          <TouchableOpacity onPress={toggleModal}>
            <Image
              source={require("../../assets/images/x.png")}
              style={styles.xImageStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/images/phoneNum.png")}
            style={styles.phoneIconStyle}
          />
        </View>
        <Text style={styles.enterPhoneNoStyle}>Enter your phone number</Text>
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
        <View
          style={{ justifyContent: "center", alignItems: "center", bottom: 10 }}
        >
          {/* <MyCustomPhoneInput maxLength={10} minLength={10} /> */}
          <TextInputWithLabel
            placeholder="Phone Number"
            KeyboardType="numeric"
            leftIcon={imagePath.phoneIcon}
            leftImage={{right: 224}}
            inputContainer={{bottom: 30, paddingHorizontal: 10}}
            innerTextStyle={{width: '100%', paddingLeft: 45, left: 15}}
            // error={'hi'}
            // errorStyle={{right: 227}}
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
              // marginTop: 15,
              bottom: 5,
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
        <View>
          <TouchableOpacity
            style={styles.verifyOtpContainer}
            onPress={handleVerifyOTP}
          >
            <Text style={styles.verifyOtpStyle}>Verify OTP</Text>
          </TouchableOpacity>
        </View>
      </ModalPopup>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
