import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";

// Bottom sheet
import BottomSheet from "./../components/BottomSheet";

// Styled components
import {
  StyledContainer,
  colors,
  SectionView,
  SectionText,
  Discover,
  DiscoverView,
  DiscoverShoeItem,
  DiscoverFoot,
  Title,
  SubTitle,
  ShoeItem,
  ItemHead,
} from "./../styles/shared";
import styled from "styled-components/native";

const { primary, tint, gray, lighttint, white } = colors;

const VarietySectionView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-vertical: 30px;
  padding-horizontal: 20px;
`;

const SmallTile = styled(TouchableOpacity)`
  background-color: ${white};
  border-radius: 25px;
  elevation: 1;
  height: 85px;
  width: 85px;
  justify-content: center;
`;

const Ring = styled.View`
  border: 2px solid ${tint};
  border-radius: 30px;
  padding: 5px;
  margin-top: -5px;
`;

const SizeView = styled(DiscoverView)`
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 10px;
`;

const Size = styled(DiscoverFoot)`
  border-radius: 20px;
  elevation: 0;
  background-color: ${primary};
  border: 1px solid ${lighttint};
  width: 80px;
  justify-content: center;
  margin-vertical: 6px;
`;

const SelectedSize = styled(Size)`
  background-color: ${tint};
`;

const AddToCart = styled(TouchableOpacity)`
  background-color: ${tint};
  align-items: center;
  padding: 15px;
  border-radius: 20px;
  margin: 10px;
  margin-top: 45px;
`;

const Detail = () => {
  const sizes = [
    "UK 6",
    "UK 7",
    "UK 8",
    "UK 9",
    "UK 10",
    "UK 11",
    "UK 12",
    "UK 13",
  ];

  const smallTiles = ["Small Images", "Small Images", "Small Images"];

  const sampleInfo =
    "Designed for Kyrie Irving's creative and unpredictable game, the Kyrie 6 focuses on comfort, control and energy return...";

  const [selectedSize, setSelectedSize] = useState();
  const [selectedTile, setSelectedTile] = useState();
  const [addedToCart, setAddedToCart] = useState();

  return (
    <>
      <StyledContainer>
        <View
          style={{
            backgroundColor: "red",
            height: "35%",
          }}
        >
          <Text>Big Image</Text>
        </View>
        <VarietySectionView>
          {smallTiles.map((tile, index) => {
            if (index === selectedTile) {
              return (
                <Ring key={index}>
                  <SmallTile>
                    <Text>Small Images</Text>
                  </SmallTile>
                </Ring>
              );
            } else {
              return (
                <SmallTile key={index} onPress={() => setSelectedTile(index)}>
                  <Text>{tile}</Text>
                </SmallTile>
              );
            }
          })}
        </VarietySectionView>

        <Discover>
          <DiscoverView style={{ padding: 10 }}>
            <SectionText
              style={{
                fontWeight: "bold",
                color: lighttint,
              }}
            >
              Select Size
            </SectionText>
            <SectionText>
              <Entypo name="info-with-circle" size={24} color={lighttint} />
            </SectionText>
          </DiscoverView>

          <ScrollView
            style={{
              maxHeight: 200,
            }}
            showsVerticalScrollIndicator={false}
          >
            <SizeView>
              {sizes.map((size, index) => {
                if (index === selectedSize) {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedSize(undefined);
                        setAddedToCart(false);
                      }}
                    >
                      <SelectedSize>
                        <SubTitle style={{ fontSize: 16 }} color={white}>
                          {size}
                        </SubTitle>
                      </SelectedSize>
                    </TouchableOpacity>
                  );
                } else {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        setSelectedSize(index);
                        setAddedToCart(false);
                      }}
                    >
                      <Size>
                        <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                          {size}
                        </SubTitle>
                      </Size>
                    </TouchableOpacity>
                  );
                }
              })}
            </SizeView>

            {selectedSize !== undefined && addedToCart !== true && (
              <AddToCart onPress={() => setAddedToCart(true)}>
                <SubTitle style={{ fontSize: 16 }} color={white}>
                  Add to bag
                </SubTitle>
              </AddToCart>
            )}

            {selectedSize !== undefined && addedToCart === true && (
              <AddToCart
                style={{ backgroundColor: "#4FD1C5" }}
                onPress={() => setAddedToCart(false)}
              >
                <SubTitle
                  style={{
                    fontSize: 16,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color={white}
                >
                  <Feather name="shopping-bag" size={17} color={white} /> Added
                  to bag
                </SubTitle>
              </AddToCart>
            )}
          </ScrollView>
        </Discover>
      </StyledContainer>
      <BottomSheet details={sampleInfo} />
    </>
  );
};

export default Detail;
