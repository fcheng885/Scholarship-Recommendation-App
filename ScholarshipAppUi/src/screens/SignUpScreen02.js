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

function SignUpScreen02(props) {
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
            Tell Us About Yourself (Part 1):
          </Text>
          <View style={styles.academicMajor}>
            <View style={styles.enterYourFullNameText1Stack}>
              <TextInput
                placeholder="Enter your academic major ..."
                style={styles.enterYourFullNameText1}
              ></TextInput>
              <Text style={styles.academicMajorText}>Academic Major</Text>
            </View>
          </View>
          <View style={styles.age}>
            <View style={styles.enterAgeTextStack}>
              <TextInput
                placeholder="Enter your Age ..."
                keyboardType="numeric"
                style={styles.enterAgeText}
              ></TextInput>
              <Text style={styles.ageText}>Age</Text>
            </View>
          </View>
          <View style={styles.ethnicity}>
            <View style={styles.enterEthnicityTextStack}>
              <TextInput
                placeholder="Enter your Ethnicity ..."
                style={styles.enterEthnicityText}
              ></TextInput>
              <Text style={styles.ethnicityText}>Ethnicity</Text>
            </View>
          </View>
          <View style={styles.gender}>
            <View style={styles.enterGenderTextStack}>
              <TextInput
                placeholder="Enter your Gender ..."
                style={styles.enterGenderText}
              ></TextInput>
              <Text style={styles.genderText}>Gender</Text>
            </View>
          </View>
          <View style={styles.continueButton1}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.continueButtonText1}>Continue</Text>
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
  academicMajor: {
    width: 249,
    height: 48,
    marginTop: 50,
    marginLeft: 50
  },
  enterYourFullNameText1: {
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
  academicMajorText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 125
  },
  enterYourFullNameText1Stack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  age: {
    width: 249,
    height: 48,
    marginTop: 45,
    marginLeft: 50
  },
  enterAgeText: {
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
  ageText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 125
  },
  enterAgeTextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  ethnicity: {
    width: 249,
    height: 48,
    marginTop: 49,
    marginLeft: 50
  },
  enterEthnicityText: {
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
  ethnicityText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 125
  },
  enterEthnicityTextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  gender: {
    width: 249,
    height: 48,
    marginTop: 47,
    marginLeft: 50
  },
  enterGenderText: {
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
  genderText: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 125
  },
  enterGenderTextStack: {
    width: 249,
    height: 72,
    marginTop: -24
  },
  continueButton1: {
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
  continueButtonText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 15,
    alignSelf: "center"
  }
});

export default SignUpScreen02;
