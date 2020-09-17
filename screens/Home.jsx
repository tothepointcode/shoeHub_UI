import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// Styled components
import { StyledContainer, colors } from "./../styles/shared";
import styled from "styled-components/native";

const { primary, tint, gray } = colors;

const SectionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const SectionText = styled.Text`
  font-size: 20px;
  letter-spacing: 0.5px;
  color: ${gray};
`;

const SectionTouchable = styled(TouchableOpacity)``;

const Underline = styled.View`
  width: 30%;
  background-color: ${tint};
  height: 4px;
`;

const ShowCase = styled(ScrollView)`
  width: 100%;
  margin-top: 10px;
`;

const ShoeItem = styled.View`
  height: 300px;
  background-color: ${gray};
  width: 250px;
  margin-right: 25px;
  border-radius: 25px;
  padding: 20px;
`;

const ItemHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.Text`
  font-weight: bold;
  color: ${primary};
  padding-bottom: 5px;
  font-size: 18px;
`;

const SubTitle = styled.Text`
  color: ${primary};
`;

const Home = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: "Popular" },
    { name: "Categories" },
    { name: "Brands" },
  ];

  return (
    <StyledContainer>
      <SectionView>
        {sections.map(({ name }, index) => {
          if (index === activeSection) {
            return (
              <SectionTouchable
                key={index}
                onPress={() => setActiveSection(index)}
              >
                <SectionText
                  style={{
                    fontWeight: "bold",
                    color: tint,
                  }}
                >
                  {name}
                </SectionText>
                <Underline />
              </SectionTouchable>
            );
          }
          return (
            <SectionTouchable
              onPress={() => setActiveSection(index)}
              key={index}
            >
              <SectionText>{name}</SectionText>
            </SectionTouchable>
          );
        })}
      </SectionView>
      {/* <Text>{sections[activeSection].name}</Text> */}
      <ShowCase horizontal={true}>
        <ShoeItem>
          <ItemHead>
            <View>
              <Title>Kyrie 6</Title>
              <SubTitle>$130.00</SubTitle>
            </View>
            <TouchableOpacity>
              <AntDesign name="hearto" size={25} color={primary} />
            </TouchableOpacity>
          </ItemHead>
          <View
            style={{
              backgroundColor: "white",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Image space</Text>
          </View>
        </ShoeItem>
      </ShowCase>
    </StyledContainer>
  );
};

export default Home;
