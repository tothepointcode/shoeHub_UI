import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";

import { ShoesData } from "./Home";

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

const { primary, tint, gray, lighttint, white, lightgray } = colors;

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

const Detail = ({ route }) => {
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

  const [selectedSize, setSelectedSize] = useState();
  const [selectedTile, setSelectedTile] = useState(1);
  const [addedToCart, setAddedToCart] = useState();

  const data = useContext(ShoesData);

  const chosenId = route.params.index;
  const ActiveData = data.popular.main[chosenId];
  const smallTiles = [...ActiveData.img.filter((item, index) => index !== 0)];

  return (
    <>
      <StyledContainer>
        <View
          style={{
            height: "35%",
          }}
        >
          <Image
            resizeMode="contain"
            style={{ height: "100%", width: "100%" }}
            source={smallTiles[selectedTile]}
          />
        </View>

        <VarietySectionView>
          {smallTiles.map((tile, index) => {
            if (index === selectedTile) {
              return (
                <Ring key={index}>
                  <SmallTile>
                    <Image
                      resizeMode="contain"
                      style={{ height: "100%", width: "100%" }}
                      source={tile}
                    />
                  </SmallTile>
                </Ring>
              );
            } else {
              return (
                <SmallTile key={index} onPress={() => setSelectedTile(index)}>
                  <Image
                    resizeMode="contain"
                    style={{ height: "100%", width: "100%" }}
                    source={tile}
                  />
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
              {ActiveData.unavailableSizes.length === 0 &&
                sizes.map((size, index) => {
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

              {ActiveData.unavailableSizes.length === 0 &&
                sizes.map((size, index) => {
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

              {ActiveData.unavailableSizes.length > 0 &&
                sizes.map((size, index) => {
                  if (ActiveData.unavailableSizes.indexOf(size) !== -1) {
                    return (
                      <Size
                        style={{ backgroundColor: lightgray, borderWidth: 0 }}
                      >
                        <SubTitle style={{ fontSize: 16 }} color={gray}>
                          {size}
                        </SubTitle>
                      </Size>
                    );
                  } else if (index === selectedSize) {
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
      <BottomSheet chosenId={chosenId} />
    </>
  );
};

export default Detail;
