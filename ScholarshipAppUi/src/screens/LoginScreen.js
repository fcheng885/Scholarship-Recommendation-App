import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";

function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.icon2Row}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
        <ImageBackground
          source={require("../assets/images/wp40780171.jpg")}
          resizeMode="stretch"
          style={styles.loginScreenBackground}
          imageStyle={styles.loginScreenBackground_imageStyle}
        >
          <View style={styles.loginRectangle}>
            <Text style={styles.welcomeScholar}>Welcome Scholar!</Text>
            <Text style={styles.signIn}>Sign In</Text>
            <View style={styles.enterEmail}>
              <View style={styles.iconRow}>
                <EntypoIcon name="mail" style={styles.icon}></EntypoIcon>
                <TextInput
                  placeholder="Enter your Email ..."
                  style={styles.enterEmailText}
                ></TextInput>
              </View>
            </View>
            <View style={styles.enterPassword}>
              <View style={styles.icon1Row}>
                <MaterialIconsIcon
                  name="vpn-key"
                  style={styles.icon1}
                ></MaterialIconsIcon>
                <TextInput
                  placeholder="Enter your Password ..."
                  style={styles.enterPasswordText}
                ></TextInput>
              </View>
            </View>
            <Text style={styles.forgetPassword}>Forget password?</Text>
            <View style={styles.loginButton}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.login2}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dontHaveAnAccountStack}>
              <Text style={styles.dontHaveAnAccount}>
                Don&#39;t have an account?
              </Text>
              <View style={styles.signUpButton}>
                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.signUp}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 25
  },
  loginScreenBackground: {
    width: 491,
    height: 781,
    marginLeft: 96
  },
  loginScreenBackground_imageStyle: {},
  loginRectangle: {
    width: 339,
    height: 627,
    backgroundColor: "rgba(80,227,194,0.5)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 67,
    marginLeft: 73
  },
  welcomeScholar: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 32,
    width: 239,
    fontSize: 23,
    textAlign: "center",
    marginTop: 26,
    marginLeft: 52
  },
  signIn: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 41,
    width: 77,
    fontSize: 23,
    marginTop: 62,
    marginLeft: 123
  },
  enterEmail: {
    width: 249,
    height: 48,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 57
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 2
  },
  enterEmailText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 249,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 10
  },
  iconRow: {
    height: 48,
    flexDirection: "row",
    flex: 1,
    marginLeft: -50
  },
  enterPassword: {
    width: 249,
    height: 48,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 57
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 4
  },
  enterPasswordText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 249,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 10
  },
  icon1Row: {
    height: 48,
    flexDirection: "row",
    flex: 1,
    marginLeft: -50
  },
  forgetPassword: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 27,
    width: 182,
    marginTop: 13,
    marginLeft: 59
  },
  loginButton: {
    width: 173,
    height: 46,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 0,
    borderRadius: 100,
    marginTop: 6,
    marginLeft: 74
  },
  button: {
    width: 173,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000",
    alignSelf: "center"
  },
  login2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    marginLeft: 69
  },
  dontHaveAnAccount: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 27,
    width: 182,
    textAlign: "center",
    left: 0
  },
  signUpButton: {
    top: 21,
    left: 2,
    width: 173,
    height: 46,
    position: "absolute",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.5,
    shadowRadius: 0,
    borderRadius: 100
  },
  button1: {
    width: 173,
    height: 46,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#000000",
    alignSelf: "center"
  },
  signUp: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    alignSelf: "center"
  },
  dontHaveAnAccountStack: {
    width: 182,
    height: 67,
    marginTop: 61,
    marginLeft: 70
  },
  icon2Row: {
    height: 781,
    flexDirection: "row",
    flex: 1,
    marginRight: -59,
    marginLeft: -193,
    marginTop: 31
  }
});

export default LoginScreen;
