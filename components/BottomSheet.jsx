import * as React from "react";
import { Text, View } from "react-native";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

import { StyledContainer, colors, Title, SubTitle } from "./../styles/shared";
import styled from "styled-components/native";

import { ShoesData } from "./../screens/Home";

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

export default function Sheet({ chosenId }) {
  const sampleInfo =
    "Designed for Kyrie Irving's creative and unpredictable game, the Kyrie 6 focuses on comfort, control and energy return...";

  const [bgcolor, setbgcolor] = React.useState();
  const [show, setShow] = React.useState(false);

  const data = React.useContext(ShoesData);
  const ActiveInfo = data.popular.main[chosenId];
  const { name, price } = ActiveInfo;

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
      {show && (
        <>
          <SheetHead>
            <Title size={25} color={tint}>
              {name}
            </Title>
            <SubTitle size={18} color={tint}>
              {price}
            </SubTitle>
          </SheetHead>
          <SheetText>{sampleInfo}</SheetText>
        </>
      )}
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
          setShow(true);
          setbgcolor(white);
        }}
        onCloseStart={() => {
          setShow(false);
          setbgcolor("");
        }}
      />
    </>
  );
}
