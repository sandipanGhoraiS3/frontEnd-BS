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
    justifyContent: 'space-between'
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
    // paddingLeft: 15,
    // paddingRight: 15,
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
    position: "absolute",

    fontSize: 15,
    color: "#000000",
    paddingBottom: 30,
    left: 65
  },
  buttomVectorContainer: {
    position: "absolute",
    bottom: 0,
    top: 650,
  },
  leftVectorImage: {
    bottom: 0,
  },
  SignUpTextLink: {
    marginBottom: 30,
    textDecorationLine: "underline",
    color: "#095E40",
    fontWeight: "bold",
    left: 78
  },
  lowerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: moderateVerticalScale(10),
    justifyContent: "center",
    height: 61,
  }
});

export default styles;
