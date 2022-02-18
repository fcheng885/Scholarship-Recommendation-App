import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

function BrowseByCatagoryScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/wp40780171.jpg")}
        resizeMode="stretch"
        style={styles.homeScreenBackground1}
        imageStyle={styles.homeScreenBackground1_imageStyle}
      >
        <View style={styles.topMenuBar1}>
          <View style={styles.rect1}>
            <FeatherIcon name="menu" style={styles.icon1}></FeatherIcon>
            <View style={styles.icon1Filler}></View>
            <FeatherIcon name="home" style={styles.icon2}></FeatherIcon>
          </View>
        </View>
        <View style={styles.uIPathing}>
          <View style={styles.rect3}>
            <Text style={styles.loremIpsum}>
              Placeholder: &quot;UI pathing&quot;
            </Text>
          </View>
        </View>
        <View style={styles.chooseCatagoryToBrowseBy}>
          <View style={styles.titleRectangle}>
            <Text style={styles.chooseCatagoryToBrowseByText}>
              Choose Catagory to Browse by:
            </Text>
          </View>
        </View>
        <View style={styles.chooseCatagoryScrollArea}>
          <View style={styles.scrollArea}>
            <ScrollView
              horizontal={false}
              contentContainerStyle={styles.scrollArea_contentContainerStyle}
            >
              <View style={styles.academicMajor}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.academicMajorText}>Academic Major</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.aCTScore}>
                <TouchableOpacity style={styles.button1}>
                  <Text style={styles.aCTScoreText}>ACT Score</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.age}>
                <TouchableOpacity style={styles.button2}>
                  <Text style={styles.ageText}>Age</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.artisticAbility}>
                <TouchableOpacity style={styles.button3}>
                  <Text style={styles.artisticAbility2}>Artistic Ability</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.athleticAbility}>
                <TouchableOpacity style={styles.button4}>
                  <Text style={styles.athleticAbilityText}>
                    Athletic Ability
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.deadline}>
                <TouchableOpacity style={styles.button5}>
                  <Text style={styles.deadlineText}>Deadline</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.employer}>
                <TouchableOpacity style={styles.button6}>
                  <Text style={styles.employerText}>Employer</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.ethnicity}>
                <TouchableOpacity style={styles.button7}>
                  <Text style={styles.ethnicityText}>Ethnicity</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.financialNeed}>
                <TouchableOpacity style={styles.button8}>
                  <Text style={styles.financialNeedText}>Financial Need</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.gender}>
                <TouchableOpacity style={styles.button9}>
                  <Text style={styles.genderText}>Gender</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.gPA}>
                <TouchableOpacity style={styles.button10}>
                  <Text style={styles.gPAText}>GPA</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.honorsOrganization}>
                <TouchableOpacity style={styles.button11}>
                  <Text style={styles.honorsOrganizationText}>
                    Honors Organization
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.militaryAffiliation}>
                <TouchableOpacity style={styles.button12}>
                  <Text style={styles.militaryAffiliationText}>
                    Military Affiliation
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.numberOfScholarshipsAvailable}>
                <TouchableOpacity style={styles.button13}>
                  <Text style={styles.numberOfScholarshipsAvailableText}>
                    Number Of Scholarships Available
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.physicalDisabilities}>
                <TouchableOpacity style={styles.button14}>
                  <Text style={styles.physicalDisabilitiesText}>
                    Physical Disabilities
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.race}>
                <TouchableOpacity style={styles.button15}>
                  <Text style={styles.raceText}>Race</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.religion}>
                <TouchableOpacity style={styles.button16}>
                  <Text style={styles.religionText}>Religion</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.residenceState}>
                <TouchableOpacity style={styles.button17}>
                  <Text style={styles.residenceStateText}>Residence State</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.sATScore}>
                <TouchableOpacity style={styles.button18}>
                  <Text style={styles.sATScoreText}>SAT Score</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.scholarshipAmount}>
                <TouchableOpacity style={styles.button19}>
                  <Text style={styles.scholarshipAmountText}>
                    Scholarship Amount
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.schoolAttendanceState}>
                <TouchableOpacity style={styles.button20}>
                  <Text style={styles.schoolAttendanceStateText}>
                    School Attendance State
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.schoolYear}>
                <TouchableOpacity style={styles.button21}>
                  <Text style={styles.schoolYearText}>School Year</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.specialAttributes}>
                <TouchableOpacity style={styles.button22}>
                  <Text style={styles.specialAttributesText}>
                    Special Attributes
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.studentOrganization}>
                <TouchableOpacity style={styles.button23}>
                  <Text style={styles.studentOrganizationText}>
                    Student Organization
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.searchbar1}>
          <View style={styles.rect2}>
            <View style={styles.icon3Row}>
              <FeatherIcon name="search" style={styles.icon3}></FeatherIcon>
              <TextInput
                placeholder="Search ..."
                textBreakStrategy="simple"
                style={styles.searchBarText1}
              ></TextInput>
            </View>
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
  homeScreenBackground1: {
    width: 492,
    height: 780,
    marginTop: 32,
    marginLeft: -56
  },
  homeScreenBackground1_imageStyle: {},
  topMenuBar1: {
    width: 375,
    height: 66,
    marginLeft: 56
  },
  rect1: {
    backgroundColor: "rgba(214,221,227,1)",
    height: 66,
    flexDirection: "row"
  },
  icon1: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginLeft: 10,
    marginTop: 10
  },
  icon1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  icon2: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginRight: 11,
    marginTop: 10
  },
  uIPathing: {
    width: 268,
    height: 20,
    marginTop: 13,
    marginLeft: 68
  },
  rect3: {
    width: 268,
    height: 20,
    backgroundColor: "#E6E6E6"
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 268
  },
  chooseCatagoryToBrowseBy: {
    width: 350,
    height: 57,
    marginTop: 12,
    marginLeft: 68
  },
  titleRectangle: {
    width: 349,
    height: 59,
    backgroundColor: "rgba(80,227,194,0.5)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    alignSelf: "center"
  },
  chooseCatagoryToBrowseByText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 265,
    fontSize: 18,
    textAlign: "center",
    marginTop: 18,
    marginLeft: 46
  },
  chooseCatagoryScrollArea: {
    width: 350,
    height: 493,
    marginTop: 4,
    marginLeft: 68
  },
  scrollArea: {
    width: 349,
    height: 513,
    backgroundColor: "rgba(80,227,194,1)",
    opacity: 0.5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  scrollArea_contentContainerStyle: {
    height: 1438,
    width: 349
  },
  academicMajor: {
    width: 267,
    height: 38,
    marginTop: 20,
    alignSelf: "center"
  },
  button: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  academicMajorText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  aCTScore: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button1: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  aCTScoreText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  age: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button2: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  ageText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  artisticAbility: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button3: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  artisticAbility2: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  athleticAbility: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button4: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  athleticAbilityText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  deadline: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button5: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  deadlineText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  employer: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button6: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  employerText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  ethnicity: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button7: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  ethnicityText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  financialNeed: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button8: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  financialNeedText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  gender: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button9: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  genderText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  gPA: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button10: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  gPAText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  honorsOrganization: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button11: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  honorsOrganizationText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  militaryAffiliation: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button12: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  militaryAffiliationText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  numberOfScholarshipsAvailable: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button13: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  numberOfScholarshipsAvailableText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  physicalDisabilities: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button14: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  physicalDisabilitiesText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  race: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button15: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  raceText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  religion: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button16: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  religionText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  residenceState: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button17: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  residenceStateText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  sATScore: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button18: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  sATScoreText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  scholarshipAmount: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button19: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  scholarshipAmountText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  schoolAttendanceState: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button20: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  schoolAttendanceStateText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  schoolYear: {
    width: 267,
    height: 38,
    marginTop: 22,
    marginLeft: 41,
    alignSelf: "center"
  },
  button21: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  schoolYearText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  specialAttributes: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button22: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  specialAttributesText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  studentOrganization: {
    width: 267,
    height: 38,
    marginTop: 22,
    alignSelf: "center"
  },
  button23: {
    width: 286,
    height: 47,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    marginTop: -9,
    marginLeft: -9
  },
  studentOrganizationText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    textAlign: "center",
    marginTop: 14,
    marginLeft: 33
  },
  searchbar1: {
    width: 40,
    height: 41,
    marginTop: 42,
    marginLeft: 153
  },
  rect2: {
    backgroundColor: "rgba(214,221,227,1)",
    height: 88,
    flexDirection: "row",
    marginTop: -15,
    marginLeft: -97,
    marginRight: -238
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40
  },
  searchBarText1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 41,
    width: 141,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
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
  icon3Row: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 117,
    marginLeft: 77,
    marginTop: 15
  }
});

export default BrowseByCatagoryScreen;
