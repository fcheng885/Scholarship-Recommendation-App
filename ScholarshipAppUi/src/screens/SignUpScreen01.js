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
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function SignUpScreen01(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/wp40780171.jpg")}
        resizeMode="stretch"
        style={styles.signUpScreenBackground01}
        imageStyle={styles.signUpScreenBackground01_imageStyle}
      >
        <View style={styles.signUpRectangle01}>
          <Text style={styles.signUp}>Sign Up</Text>
          <View style={styles.enterYourFullName}>
            <View style={styles.icon1Row}>
              <EntypoIcon name="user" style={styles.icon1}></EntypoIcon>
              <View style={styles.enterYourFullNameTextStack}>
                <TextInput
                  placeholder="Enter your Full Name ..."
                  style={styles.enterYourFullNameText}
                ></TextInput>
                <Text style={styles.fullName}>Full Name</Text>
              </View>
            </View>
          </View>
          <View style={styles.enterEmail}>
            <Text style={styles.email}>Email</Text>
            <View style={styles.icon2Row}>
              <EntypoIcon name="mail" style={styles.icon2}></EntypoIcon>
              <TextInput
                placeholder="Enter your Email ..."
                style={styles.enterEmailText}
              ></TextInput>
            </View>
          </View>
          <View style={styles.createPassword1}>
            <Text style={styles.password}>Password</Text>
            <View style={styles.icon3Row}>
              <MaterialIconsIcon
                name="vpn-key"
                style={styles.icon3}
              ></MaterialIconsIcon>
              <TextInput
                placeholder="Create a Password ..."
                style={styles.createPasswordText}
              ></TextInput>
            </View>
          </View>
          <View style={styles.confirmPassword}>
            <Text style={styles.confirmPassword3}>Confirm Password</Text>
            <View style={styles.icon4Row}>
              <IoniconsIcon
                name="ios-checkmark-circle"
                style={styles.icon4}
              ></IoniconsIcon>
              <TextInput
                placeholder="Confirm Password ..."
                style={styles.enterPasswordText2}
              ></TextInput>
            </View>
          </View>
          <View style={styles.continueButton}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  signUpScreenBackground01: {
    width: 517,
    height: 781,
    marginTop: 31,
    marginLeft: -76
  },
  signUpScreenBackground01_imageStyle: {},
  signUpRectangle01: {
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
    marginTop: 66,
    marginLeft: 94
  },
  signUp: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 41,
    width: 90,
    fontSize: 23,
    textAlign: "center",
    marginTop: 50,
    marginLeft: 125
  },
  enterYourFullName: {
    width: 249,
    height: 48,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 58
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 25
  },
  enterYourFullNameText: {
    top: 23,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 249,
    backgroundColor: "rgba(230, 230, 230,1)",
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
    left: 0
  },
  fullName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 97
  },
  enterYourFullNameTextStack: {
    width: 249,
    height: 71,
    marginLeft: 10
  },
  icon1Row: {
    height: 71,
    flexDirection: "row",
    flex: 1,
    marginLeft: -50,
    marginTop: -23
  },
  enterEmail: {
    width: 249,
    height: 48,
    marginTop: 50,
    marginLeft: 58
  },
  email: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 21,
    width: 87,
    marginTop: -21
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 2
  },
  enterEmailText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 249,
    backgroundColor: "rgba(230, 230, 230,1)",
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
  icon2Row: {
    height: 48,
    flexDirection: "row",
    marginLeft: -50
  },
  createPassword1: {
    width: 249,
    height: 48,
    marginTop: 49,
    marginLeft: 58
  },
  password: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 19,
    width: 81,
    marginTop: -23
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 4
  },
  createPasswordText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 249,
    backgroundColor: "rgba(230, 230, 230,1)",
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
  icon3Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: -50
  },
  confirmPassword: {
    width: 249,
    height: 48,
    marginTop: 46,
    marginLeft: 58
  },
  confirmPassword3: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 16,
    width: 136,
    marginTop: -21
  },
  icon4: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 4
  },
  enterPasswordText2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 48,
    width: 249,
    backgroundColor: "rgba(230, 230, 230,1)",
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
    marginLeft: 17
  },
  icon4Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: -50
  },
  continueButton: {
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
    marginTop: 65,
    marginLeft: 83
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
  continueButtonText: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    alignSelf: "center"
  }
});

export default SignUpScreen01;
