import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

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
          <Ring>
            <SmallTile>
              <Text>Small Images</Text>
            </SmallTile>
          </Ring>

          <SmallTile>
            <Text>Small Images</Text>
          </SmallTile>
          <SmallTile>
            <Text>Small Images</Text>
          </SmallTile>
        </VarietySectionView>

        <Discover>
          <DiscoverView style={{padding: 10}}>
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
          >
            <SizeView>
              <Size>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                    UK 6
                  </SubTitle>
                </TouchableOpacity>
              </Size>

              <Size>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                    UK 6
                  </SubTitle>
                </TouchableOpacity>
              </Size>

              <Size>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                    UK 6
                  </SubTitle>
                </TouchableOpacity>
              </Size>

              <Size>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                    UK 6
                  </SubTitle>
                </TouchableOpacity>
              </Size>

              <SelectedSize>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={white}>
                    UK 12
                  </SubTitle>
                </TouchableOpacity>
              </SelectedSize>

              <Size>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                    UK 6
                  </SubTitle>
                </TouchableOpacity>
              </Size>

              <Size>
                <TouchableOpacity>
                  <SubTitle style={{ fontSize: 16 }} color={lighttint}>
                    UK 6
                  </SubTitle>
                </TouchableOpacity>
              </Size>
            </SizeView>

            <AddToCart>
              <SubTitle style={{ fontSize: 16 }} color={white}>
                Add to bag
              </SubTitle>
            </AddToCart>
          </ScrollView>
        </Discover>
      </StyledContainer>
      <BottomSheet />
    </>
  );
};

export default Detail;
