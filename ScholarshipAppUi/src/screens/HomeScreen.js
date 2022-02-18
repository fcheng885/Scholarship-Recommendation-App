import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
  TextInput
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/wp40780171.jpg")}
        resizeMode="stretch"
        style={styles.homeScreenBackground}
        imageStyle={styles.homeScreenBackground_imageStyle}
      >
        <View style={styles.topMenuBar}>
          <View style={styles.rect}>
            <FeatherIcon name="menu" style={styles.icon}></FeatherIcon>
            <View style={styles.iconFiller}></View>
            <FeatherIcon name="home" style={styles.icon4}></FeatherIcon>
          </View>
        </View>
        <View style={styles.homePageTitle}>
          <View style={styles.homePageRectangle}>
            <Text style={styles.homePage}>Home Page</Text>
          </View>
        </View>
        <View style={styles.recommendScholarship}>
          <View style={styles.button6Stack}>
            <TouchableOpacity style={styles.button6}>
              <IoniconsIcon
                name="md-school"
                style={styles.icon9}
              ></IoniconsIcon>
            </TouchableOpacity>
            <Text style={styles.loremIpsum1}>
              Let us recommend scholarships!
            </Text>
          </View>
        </View>
        <View style={styles.browseByCatagory}>
          <TouchableOpacity style={styles.button5}>
            <View style={styles.icon7Row}>
              <EntypoIcon name="archive" style={styles.icon7}></EntypoIcon>
              <Text style={styles.browseByCatagoryText}>
                Browse by Catagory
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.listFavoritesOnly}>
          <View style={styles.switchStack}>
            <Switch value={true} style={styles.switch}></Switch>
            <Text style={styles.listFavoritesOnlyText}>
              List Favorites Only
            </Text>
            <IoniconsIcon name="md-heart" style={styles.icon10}></IoniconsIcon>
          </View>
        </View>
        <View style={styles.scholarshipsAvailable}>
          <View style={styles.rect5}>
            <Text style={styles.scholarshipsText}>Scholarships Available</Text>
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={false}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <TouchableOpacity style={styles.scholarshipDummy1}>
                  <View style={styles.rect6Stack}>
                    <View style={styles.rect6}>
                      <View style={styles.icon11Stack}>
                        <EntypoIcon
                          name="heart"
                          style={styles.icon11}
                        ></EntypoIcon>
                        <TouchableOpacity
                          style={styles.button7}
                        ></TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum5}>
                      Scholarship Name1{"\n"}- scholarship amount{"\n"}-
                      deadline
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scholarshipDummy2}>
                  <View style={styles.rect7Stack}>
                    <View style={styles.rect7}>
                      <View style={styles.icon12Stack}>
                        <EntypoIcon
                          name="heart"
                          style={styles.icon12}
                        ></EntypoIcon>
                        <TouchableOpacity
                          style={styles.button8}
                        ></TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum6}>
                      Scholarship Name2{"\n"}- scholarship amount{"\n"}-
                      deadline
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scholarshipDummy3}>
                  <View style={styles.rect8Stack}>
                    <View style={styles.rect8}>
                      <View style={styles.icon13Stack}>
                        <EntypoIcon
                          name="heart"
                          style={styles.icon13}
                        ></EntypoIcon>
                        <TouchableOpacity
                          style={styles.button9}
                        ></TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum7}>
                      Scholarship Name3{"\n"}- scholarship amount{"\n"}-
                      deadline
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scholarshipDummy4}>
                  <View style={styles.rect9Stack}>
                    <View style={styles.rect9}>
                      <View style={styles.icon14Stack}>
                        <EntypoIcon
                          name="heart"
                          style={styles.icon14}
                        ></EntypoIcon>
                        <TouchableOpacity
                          style={styles.button10}
                        ></TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum8}>
                      Scholarship Name4{"\n"}- scholarship amount{"\n"}-
                      deadline
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.scholarshipDummy5}>
                  <View style={styles.rect10Stack}>
                    <View style={styles.rect10}>
                      <View style={styles.icon15Stack}>
                        <EntypoIcon
                          name="heart"
                          style={styles.icon15}
                        ></EntypoIcon>
                        <TouchableOpacity
                          style={styles.button11}
                        ></TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum9}>
                      Scholarship Name5{"\n"}- scholarship amount{"\n"}-
                      deadline
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.searchbar}>
          <View style={styles.rect1}>
            <View style={styles.icon6Row}>
              <FeatherIcon name="search" style={styles.icon6}></FeatherIcon>
              <TextInput
                placeholder="Search ..."
                textBreakStrategy="simple"
                style={styles.searchBarText}
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
    flex: 1,
    backgroundColor: "#fff"
  },
  homeScreenBackground: {
    width: 492,
    height: 780,
    marginTop: 32,
    marginLeft: -58
  },
  homeScreenBackground_imageStyle: {},
  topMenuBar: {
    width: 375,
    height: 66,
    marginLeft: 58
  },
  rect: {
    backgroundColor: "rgba(214,221,227,1)",
    height: 66,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginLeft: 10,
    marginTop: 10
  },
  iconFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginRight: 11,
    marginTop: 10
  },
  homePageTitle: {
    width: 220,
    height: 36,
    marginTop: 15,
    marginLeft: 68
  },
  homePageRectangle: {
    width: 349,
    height: 50,
    backgroundColor: "rgba(80,227,194,0.5)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 2
  },
  homePage: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 265,
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
    marginLeft: 42
  },
  recommendScholarship: {
    width: 49,
    height: 38,
    marginTop: 46,
    marginLeft: 79
  },
  button6: {
    top: 0,
    left: 0,
    width: 291,
    height: 56,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 35,
    marginTop: 6,
    marginLeft: 12
  },
  loremIpsum1: {
    top: 20,
    left: 61,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 265
  },
  button6Stack: {
    width: 326,
    height: 56,
    marginTop: -8,
    marginLeft: -10
  },
  browseByCatagory: {
    width: 48,
    height: 38,
    marginTop: 35,
    marginLeft: 79
  },
  button5: {
    width: 286,
    height: 56,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 100,
    flexDirection: "row",
    marginTop: -8,
    marginLeft: -6
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 46,
    width: 40
  },
  browseByCatagoryText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 33,
    width: 220,
    marginLeft: 7,
    marginTop: 11
  },
  icon7Row: {
    height: 46,
    flexDirection: "row",
    flex: 1,
    marginRight: 9,
    marginLeft: 10,
    marginTop: 4
  },
  listFavoritesOnly: {
    width: 45,
    height: 23,
    marginTop: 86,
    marginLeft: 208
  },
  switch: {
    position: "absolute",
    top: 2,
    left: 0
  },
  listFavoritesOnlyText: {
    top: 2,
    left: 37,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 31,
    width: 169,
    textAlign: "center",
    fontSize: 16
  },
  icon10: {
    top: 0,
    left: 192,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 25
  },
  switchStack: {
    width: 213,
    height: 33,
    marginTop: -2
  },
  scholarshipsAvailable: {
    width: 220,
    height: 36,
    marginLeft: 68
  },
  rect5: {
    width: 353,
    height: 294,
    backgroundColor: "rgba(80,227,194,0.5)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 8
  },
  scholarshipsText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 265,
    marginTop: 5,
    marginLeft: 7
  },
  scrollArea: {
    width: 352,
    height: 264
  },
  scrollArea_contentContainerStyle: {
    height: 426,
    width: 352
  },
  scholarshipDummy1: {
    width: 352,
    height: 85
  },
  rect6: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon11: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button7: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon11Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum5: {
    top: 8,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 77,
    width: 352
  },
  rect6Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy2: {
    width: 352,
    height: 85
  },
  rect7: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon12: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button8: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon12Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum6: {
    top: 8,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 77,
    width: 352
  },
  rect7Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy3: {
    width: 352,
    height: 85,
    marginTop: 1
  },
  rect8: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon13: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button9: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon13Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum7: {
    top: 8,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 77,
    width: 352
  },
  rect8Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy4: {
    width: 352,
    height: 85
  },
  rect9: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon14: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button10: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon14Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum8: {
    top: 8,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 77,
    width: 352
  },
  rect9Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy5: {
    width: 352,
    height: 85
  },
  rect10: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon15: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button11: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon15Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum9: {
    top: 8,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 77,
    width: 352
  },
  rect10Stack: {
    width: 356,
    height: 85
  },
  searchbar: {
    width: 40,
    height: 41,
    marginTop: 288,
    marginLeft: 155
  },
  rect1: {
    backgroundColor: "rgba(214,221,227,1)",
    height: 88,
    flexDirection: "row",
    marginTop: -15,
    marginLeft: -97,
    marginRight: -238
  },
  icon6: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 41,
    width: 40
  },
  searchBarText: {
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
  icon6Row: {
    height: 41,
    flexDirection: "row",
    flex: 1,
    marginRight: 117,
    marginLeft: 77,
    marginTop: 15
  }
});

export default HomeScreen;
