import * as React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { StyledContainer, colors } from "./../styles/shared";
import styled from "styled-components/native";

const { tint, lightgray } = colors;

const Bar = styled.View`
  height: 8px;
  width: 50px;
  background-color: ${tint};
  border-radius: 25px;
  margin: 0 auto;
`;

export default function App() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: lightgray,
        padding: 16,
        height: 450,
        width: "100%",
      }}
    >
      <Bar />
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[450, 100]}
        initialSnap={1}
        borderRadius={25}
        renderContent={renderContent}
        enabledBottomInitialAnimation={true}
      />
    </>
  );
}
