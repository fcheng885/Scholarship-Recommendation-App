import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import BrowseByCatagoryScreen from "./src/screens/BrowseByCatagoryScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignUpScreen01 from "./src/screens/SignUpScreen01";
import SignUpScreen02 from "./src/screens/SignUpScreen02";
import SignUpScreen03 from "./src/screens/SignUpScreen03";
import RecommendedScholarshipsScreen from "./src/screens/RecommendedScholarshipsScreen";
import Untitled from "./src/screens/Untitled";

const DrawerNavigation = createDrawerNavigator({
  BrowseByCatagoryScreen: BrowseByCatagoryScreen,
  HomeScreen: HomeScreen,
  LoginScreen: LoginScreen,
  SignUpScreen01: SignUpScreen01,
  SignUpScreen02: SignUpScreen02,
  SignUpScreen03: SignUpScreen03,
  RecommendedScholarshipsScreen: RecommendedScholarshipsScreen,
  Untitled: Untitled
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    BrowseByCatagoryScreen: BrowseByCatagoryScreen,
    HomeScreen: HomeScreen,
    LoginScreen: LoginScreen,
    SignUpScreen01: SignUpScreen01,
    SignUpScreen02: SignUpScreen02,
    SignUpScreen03: SignUpScreen03,
    RecommendedScholarshipsScreen: RecommendedScholarshipsScreen,
    Untitled: Untitled
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
