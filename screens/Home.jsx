import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

// Styled components
import { StyledContainer, colors } from "./../styles/shared";
import styled from "styled-components/native";

const { tint, gray } = colors;

const SectionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const SectionText = styled.Text`
  font-size: 20px;
  letter-spacing: 0.5
  color: ${gray};
`;

const SectionTouchable = styled(TouchableOpacity)``;

const Underline = styled.View`
  width: 30%;
  background-color: ${tint};
  height: 4px;
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
      <Text>{sections[activeSection].name}</Text>
    </StyledContainer>
  );
};

export default Home;
