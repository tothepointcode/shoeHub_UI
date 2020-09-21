import * as React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

import { colors } from "./../styles/shared";

const { primary, tint, gray, lighttint, white } = colors;

import Home from "./../screens/Home";

const SecondRoute = () => (
  <View
    style={[
      styles.scene,
      {
        backgroundColor: primary,
        justifyContent: "center",
        alignItems: "center",
      },
    ]}
  >
    <Text style={{ fontSize: 18 }}>Categories</Text>
  </View>
);

const ThirdRoute = () => (
  <View
    style={[
      styles.scene,
      {
        backgroundColor: primary,
        justifyContent: "center",
        alignItems: "center",
      },
    ]}
  >
    <Text style={{ fontSize: 18 }}>Brands</Text>
  </View>
);

const initialLayout = { width: Dimensions.get("window").width };

const width = Dimensions.get("window").width;

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: lighttint }}
    style={{
      backgroundColor: primary,
      elevation: 0,
      marginHorizontal: 20,
    }}
    tabStyle={{
      alignItems: "flex-start",
      width: width * 0.3333,
      paddingLeft: 0,
      paddingBottom: 3,
    }}
    labelStyle={{
      fontWeight: "bold",
      textTransform: "capitalize",
      fontSize: 19,
      width: width * 0.3333,
      marginLeft: 0,
    }}
    indicatorStyle={{
      width: "5%",
      backgroundColor: lighttint,
      height: 4,
    }}
    inactiveColor={gray}
    activeColor={lighttint}
  />
);

export default function SectionTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Popular" },
    { key: "second", title: "Categories" },
    { key: "third", title: "Brands" },
  ]);

  const renderScene = SceneMap({
    first: Home,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
