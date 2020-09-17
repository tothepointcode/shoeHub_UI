import * as React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { StyledContainer, colors, Title, SubTitle } from "./../styles/shared";
import styled from "styled-components/native";

const { tint, lightgray, lighttint, white } = colors;

const Bar = styled.View`
  height: 8px;
  width: 50px;
  background-color: ${tint};
  border-radius: 25px;
  margin: 0 auto;
`;

const SheetHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  align-items: center;
`;

const SheetText = styled.Text`
  padding: 15px;
  font-size: 16px;
`;

export default function Sheet({ details }) {
  const [info, setInfo] = React.useState();
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();
  const [bgcolor, setbgcolor] = React.useState();

  const renderContent = () => (
    <View
      style={{
        backgroundColor: bgcolor || lightgray,
        padding: 16,
        height: 250,
        width: "100%",
      }}
    >
      <Bar />
      <SheetHead>
        <Title size={25} color={tint}>
          {name}
        </Title>
        <SubTitle size={18} color={tint}>
          {price}
        </SubTitle>
      </SheetHead>
      <SheetText>{info}</SheetText>
    </View>
  );

  const sheetRef = React.useRef(null);

  return (
    <>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[250, 100]}
        initialSnap={1}
        borderRadius={25}
        renderContent={renderContent}
        enabledBottomInitialAnimation={true}
        onOpenStart={() => {
          setInfo(details);
          setName("Kyrie 6");
          setPrice("$130.00");
          setbgcolor(white);
        }}
        onCloseStart={() => {
          setInfo("");
          setName("");
          setPrice("");
          setbgcolor("");
        }}
      />
    </>
  );
}
