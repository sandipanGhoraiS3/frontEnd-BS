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

const LoginScreen = ({ navigation }) => {
  const [isVisible, setVisible] = useState(true);
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
                  onPressRight={() => setVisible(!isVisible)}
                />
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.forgotView}
                  onPress={() =>
                    navigation.navigate(navigationStrings.FORGETPASSWORD)
                  }
                >
                  <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableOpacity>

                <ButtonComp btnText={"Login"} />
              </View>
              <View style={styles.buttomVectorContainer}>
                <Image
                  source={imagePath.groupVector2}
                  style={styles.leftVectorImage}
                />
              </View>
            </View>
            <View
              style={styles.lowerContainer}
            >
              <Text style={styles.footerText}>Don't have an account yet?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
              >
                <Text style={styles.SignUpTextLink}> Sign Up!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;