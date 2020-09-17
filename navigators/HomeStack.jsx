import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

// React nav
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./../screens/Home";
import Detail from "./../screens/Detail";

// style
import { colors } from "./../styles/shared";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const StyledRightView = styled.View`
  flex-direction: row;
  margin-right: 5px;
`;

const StyledHeadTouchable = styled(TouchableOpacity)`
  padding: 10px;
`;

const HeaderRight = ({ mode }) => {
  return (
    <>
      {mode !== "Detail" && (
        <StyledRightView>
          <StyledHeadTouchable onPress={() => alert("Search")}>
            <AntDesign name="search1" size={25} color="black" />
          </StyledHeadTouchable>
          <StyledHeadTouchable onPress={() => alert("Account")}>
            <AntDesign name="user" size={25} color="black" />
          </StyledHeadTouchable>
        </StyledRightView>
      )}

      {mode === "Detail" && (
        <StyledRightView>
          <StyledHeadTouchable>
            <AntDesign name="hearto" size={25} color={tint} />
          </StyledHeadTouchable>
        </StyledRightView>
      )}
    </>
  );
};

const Stack = createStackNavigator();
const { tint, primary } = colors;

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        borderBottomWidth: 0,
        elevation: 0,
        height: 100,
        backgroundColor: primary,
      },
      headerTintColor: tint,
      headerTitleStyle: {
        fontSize: 30,
        fontWeight: "bold",
        paddingLeft: 5,
      },
    }}
  >
    <Stack.Screen
      options={{
        headerRight: () => <HeaderRight />,
        title: "Shoes",
      }}
      name="Home"
      component={Home}
    />
    <Stack.Screen
      options={{
        headerRight: () => <HeaderRight mode="Detail" />,
        title: "",
      }}
      name="Detail"
      component={Detail}
    />
  </Stack.Navigator>
);

export default HomeStack;
