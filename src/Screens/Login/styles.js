import { StyleSheet } from "react-native";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const styles = StyleSheet.create({
  LoginContainer: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "space-between",
  },
  TextBible: {
    position: "absolute",
    top: 180,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  ImgBack: {
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    right: 4,
  },
  logoText: {
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    textShadowColor: "'rgba(0, 0, 0, 0.4)'",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5,
  },
  redText: {
    fontSize: 60,
    color: "#AA1A1A",
    fontWeight: "bold",
  },
  largeText: {
    fontSize: 45,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  withPastor: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginLeft: 22,
    textShadowColor: "'rgba(0, 0, 0, 0.4)'",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 5,
  },
  LoginText: {
    color: "#03462F",
    fontSize: 32,
    left: 35,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 35,
    alignItems: "center",
    paddingBottom: 35,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    fontSize: 16,
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#BFDED3",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  buttonContainer: {
    marginHorizontal: 8,
    width: 100,
    fontSize: 20,
    alignSelf: "flex-end",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  VectorImage: {
    height: 100,
  },
  forgotView: {
    alignSelf: "flex-end",
    marginVertical: moderateVerticalScale(18),
    marginRight: 32,
  },
  forgotText: {
    fontSize: scale(14),
    color: "#388D7D",
    fontWeight: "400",
  },
  footerText: {
    textAlign: "center",
    fontSize: 15,
    color: "#000000",
    bottom: 20,
  },
  buttomVectorContainer: {
    position: "absolute",
    bottom: 0,
    top: 640,
    right: 2,
  },
  leftVectorImage: {
    position: "absolute",
    bottom: 0,
    top: 640,
    right: 2,
  },
  SignUpTextLink: {
    textDecorationLine: "underline",
    color: "#095E40",
    fontWeight: "bold",
    bottom: 20,
    fontSize: 14
  },
  lowerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateVerticalScale(10),
    justifyContent: "center",
    padding: 20,
    bottom: 0,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 35,
    alignItems: "center",
    paddingBottom: 35,
  },
  loginButton: {
    backgroundColor: "#03462F",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  groupVectorStyle: {
    position: "absolute",
    flexGrow: 1,
    resizeMode: "cover",
    opacity: 0.7,
    bottom: -1
  },
  otpInputStyle: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    fontSize: 20,
    borderRadius: 6,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    backgroundColor: "#BFDED3",
  },
  xImageStyle: {
    height: 30,
    width: 30,
    left: 127,
    bottom: 10,
    alignItems: "flex-end",
  },
  phoneIconStyle: {
    height: 80,
    width: 80,
    marginVertical: 10,
    left: 8,
    bottom: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  enterPhoneNoStyle: {
    fontSize: 20,
    textAlign: "center",
    bottom: 30,
    color: "#113832",
    fontWeight: "bold",
    justifyContent: "center",
  },
  verifyOtpStyle: {
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: 3,
  },
  verifyOtpContainer: {
    backgroundColor: "#03462F",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
    top: 5,
    left: 1,
  },
});

export default styles;
