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
import EntypoIcon from "react-native-vector-icons/Entypo";

function RecommendedScholarshipsScreen(props) {
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
        <View style={styles.uIPathing1}>
          <View style={styles.rect3}>
            <Text style={styles.loremIpsum1}>
              Placeholder: &quot;UI pathing&quot;
            </Text>
          </View>
        </View>
        <View style={styles.recommendedScholarships}>
          <View style={styles.homePageRectangle1StackStack}>
            <View style={styles.homePageRectangle1Stack}>
              <View style={styles.homePageRectangle1}>
                <Text style={styles.recommendedScholarshipsText}>
                  Your Recommended Scholarships
                </Text>
              </View>
              <View style={styles.scrollArea1}>
                <ScrollView
                  horizontal={false}
                  contentContainerStyle={
                    styles.scrollArea1_contentContainerStyle
                  }
                >
                  <TouchableOpacity style={styles.scholarshipDummy1}>
                    <View style={styles.rect6Stack}>
                      <View style={styles.rect6}>
                        <View style={styles.icon4Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon4}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button1}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum3}>
                        Scholarship Name1{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy2}>
                    <View style={styles.rect7Stack}>
                      <View style={styles.rect7}>
                        <View style={styles.icon5Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon5}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button2}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum4}>
                        Scholarship Name2{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy3}>
                    <View style={styles.rect8Stack}>
                      <View style={styles.rect8}>
                        <View style={styles.icon6Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon6}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button3}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum5}>
                        Scholarship Name3{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy4}>
                    <View style={styles.rect9Stack}>
                      <View style={styles.rect9}>
                        <View style={styles.icon7Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon7}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button4}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum6}>
                        Scholarship Name4{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy5}>
                    <View style={styles.rect10Stack}>
                      <View style={styles.rect10}>
                        <View style={styles.icon8Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon8}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button5}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum7}>
                        Scholarship Name5{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy6}>
                    <View style={styles.rect11Stack}>
                      <View style={styles.rect11}>
                        <View style={styles.icon9Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon9}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button6}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum8}>
                        Scholarship Name6{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy7}>
                    <View style={styles.rect12Stack}>
                      <View style={styles.rect12}>
                        <View style={styles.icon10Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon10}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button7}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum9}>
                        Scholarship Name7{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.scholarshipDummy8}>
                    <View style={styles.rect13Stack}>
                      <View style={styles.rect13}>
                        <View style={styles.icon11Stack}>
                          <EntypoIcon
                            name="heart"
                            style={styles.icon11}
                          ></EntypoIcon>
                          <TouchableOpacity
                            style={styles.button8}
                          ></TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.loremIpsum10}>
                        Scholarship Name8{"\n"}- scholarship amount{"\n"}-
                        deadline
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
            <View style={styles.rect4}></View>
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
    alignSelf: "center"
  },
  homeScreenBackground1_imageStyle: {},
  topMenuBar1: {
    width: 375,
    height: 66,
    marginLeft: 58
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
  uIPathing1: {
    width: 268,
    height: 20,
    marginTop: 13,
    marginLeft: 70
  },
  rect3: {
    width: 268,
    height: 20,
    backgroundColor: "#E6E6E6"
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 20,
    width: 268
  },
  recommendedScholarships: {
    width: 220,
    height: 36,
    marginTop: 11,
    marginLeft: 70
  },
  homePageRectangle1: {
    width: 350,
    height: 50,
    position: "absolute",
    backgroundColor: "rgba(80,227,194,0.5)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    top: 0,
    left: 1
  },
  recommendedScholarshipsText: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 293,
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
    marginLeft: 28
  },
  scrollArea1: {
    top: 48,
    left: 0,
    width: 352,
    height: 525,
    position: "absolute"
  },
  scrollArea1_contentContainerStyle: {
    height: 682,
    width: 352
  },
  scholarshipDummy1: {
    width: 352,
    height: 85,
    alignSelf: "center"
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
  icon4: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button1: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon4Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum3: {
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
  icon5: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button2: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon5Stack: {
    width: 25,
    height: 28,
    marginLeft: 323
  },
  loremIpsum4: {
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
    height: 85
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
  icon6: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button3: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon6Stack: {
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
  rect8Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy4: {
    width: 352,
    height: 85,
    marginTop: 1
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
  icon7: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button4: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon7Stack: {
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
  icon8: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button5: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon8Stack: {
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
  rect10Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy6: {
    width: 352,
    height: 85
  },
  rect11: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon9: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(254,90,90,1)",
    fontSize: 25,
    height: 28,
    width: 25
  },
  button6: {
    top: 0,
    left: 0,
    width: 25,
    height: 28,
    position: "absolute"
  },
  icon9Stack: {
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
  rect11Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy7: {
    width: 352,
    height: 85,
    marginTop: 1
  },
  rect12: {
    top: 0,
    left: 0,
    width: 352,
    height: 85,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  icon10: {
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
  icon10Stack: {
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
  rect12Stack: {
    width: 356,
    height: 85
  },
  scholarshipDummy8: {
    width: 352,
    height: 85
  },
  rect13: {
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
  button8: {
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
  loremIpsum10: {
    top: 8,
    left: 4,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 77,
    width: 352
  },
  rect13Stack: {
    width: 356,
    height: 85
  },
  homePageRectangle1Stack: {
    top: 0,
    left: 0,
    width: 352,
    height: 573,
    position: "absolute"
  },
  rect4: {
    width: 349,
    height: 522,
    position: "absolute",
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
    top: 51,
    left: 1
  },
  homePageRectangle1StackStack: {
    width: 352,
    height: 573,
    marginLeft: 1
  },
  searchbar1: {
    width: 40,
    height: 41,
    marginTop: 561,
    marginLeft: 155
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

export default RecommendedScholarshipsScreen;
