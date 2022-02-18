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

function SignUpScreen03(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/wp40780171.jpg")}
        resizeMode="stretch"
        style={styles.signUpScreenBackground02}
        imageStyle={styles.signUpScreenBackground02_imageStyle}
      >
        <View style={styles.signUpRectangle02}>
          <Text style={styles.tellUsAboutYourself}>
            Tell Us About Yourself (Part 2):
          </Text>
          <View style={styles.gPA}>
            <View style={styles.enterGPATextStack}>
              <TextInput
                placeholder="Enter your GPA ..."
                style={styles.enterGPAText}
              ></TextInput>
              <Text style={styles.gPAText}>GPA</Text>
            </View>
          </View>
          <View style={styles.physicalDisabilities}>
            <View style={styles.enterPhysicalDisabilitiesTextStack}>
              <TextInput
                placeholder="Enter any Physical Disabilities if any ..."
                keyboardType="numeric"
                style={styles.enterPhysicalDisabilitiesText}
              ></TextInput>
              <Text style={styles.physicalDisabilitiesText}>
                Physical Disabilities (if any)
              </Text>
            </View>
          </View>
          <View style={styles.sATScore}>
            <View style={styles.enterSATScoreTextStack}>
              <TextInput
                placeholder="Enter your SAT Score ..."
                style={styles.enterSATScoreText}
              ></TextInput>
              <Text style={styles.sATScoreText}>SAT Score</Text>
            </View>
          </View>
          <View style={styles.location}>
            <View style={styles.enterLocationTextStack}>
              <TextInput
                placeholder="Enter your State or Country of residence ..."
                style={styles.enterLocationText}
              ></TextInput>
              <Text style={styles.locationText}>Location of Residence</Text>
            </View>
          </View>
          <View style={styles.registerButton}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.register2}>Register!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  signUpScreenBackground02: {
    width: 517,
    height: 782,
    marginTop: 30,
    marginLeft: -77
  },
  signUpScreenBackground02_imageStyle: {},
  signUpRectangle02: {
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
    marginTop: 65,
    marginLeft: 95
  },
  tellUsAboutYourself: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 41,
    width: 255,
    fontSize: 23,
    textAlign: "center",
    marginTop: 42,
    marginLeft: 47
  },
  gPA: {
    width: 249,
    height: 48,
    marginTop: 50,
    marginLeft: 50
  },
  enterGPAText: {
    top: 24,
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
  gPAText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 125
  },
  enterGPATextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  physicalDisabilities: {
    width: 249,
    height: 48,
    marginTop: 45,
    marginLeft: 50
  },
  enterPhysicalDisabilitiesText: {
    top: 24,
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
  physicalDisabilitiesText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 205
  },
  enterPhysicalDisabilitiesTextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  sATScore: {
    width: 249,
    height: 48,
    marginTop: 49,
    marginLeft: 50
  },
  enterSATScoreText: {
    top: 24,
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
  sATScoreText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 125
  },
  enterSATScoreTextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  location: {
    width: 249,
    height: 48,
    marginTop: 47,
    marginLeft: 50
  },
  enterLocationText: {
    top: 24,
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
  locationText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 189
  },
  enterLocationTextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  registerButton: {
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
    marginTop: 66,
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
  register2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    alignSelf: "center"
  }
});

export default SignUpScreen03;
