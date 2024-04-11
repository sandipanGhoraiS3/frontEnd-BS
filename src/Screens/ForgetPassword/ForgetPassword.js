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
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
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
  const [password, setPassword] = useState(""); // to store password
  const [confirmPassword, setConfirmPassword] = useState(""); // to store password

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const nextNavigationPage = () => {
    toggleModal();
    navigation.navigate(navigationStrings.LOGIN);
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
                <Text style={styles.LoginText}>Reset Password</Text>
                <TextInputWithLabel
                  placeholder="New Password"
                  secureTextEntry={isVisible}
                  rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                  leftIcon={imagePath.lockIcon}
                  onPressRight={() => setVisible(!isVisible)}
                  value={password}
                  // error={'hi'}

                  // onChangeText={(password) => setPassword(password)}
                />
                <TextInputWithLabel
                  placeholder="Confirm Password"
                  secureTextEntry={isVisible}
                  rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
                  leftIcon={imagePath.lockIcon}
                  onPressRight={() => setVisible(!isVisible)}
                  value={confirmPassword}
                  // error={'hi'}
                  // onChangeText={(password) => setConfirmPassword(password)}
                  // passwordsMatch={password === confirmPassword}
                />
                <View style={{ marginTop: 60 }}>
                  <ButtonComp btnText={"Update"} onPress={toggleModal} />
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

      <ModalPopup visible={showModal} onClose={toggleModal}>
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
              fontSize: 22,
              textAlign: "center",
              bottom: 30,
              color: "#113832",
              fontWeight: "bold",
              justifyContent: "center",
            }}
          >
            Password Changed!
          </Text>
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              bottom: 25,
              color: "#113832",
            }}
          >
            Your Password has been changed Successfully.
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
              onPress={nextNavigationPage}
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
