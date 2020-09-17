import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

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
  ItemHead
} from "./../styles/shared";
import styled from "styled-components/native";

const { primary, tint, gray, lighttint, white } = colors;

const SectionTouchable = styled(TouchableOpacity)``;

const Underline = styled.View`
  width: 30%;
  background-color: ${tint};
  height: 4px;
`;

const ShowCase = styled(View)`
  margin-vertical: 15px;
`;

const HomeButton = styled.View`
  background-color: ${tint};
  flex-direction: row;
  width: 40%;
  margin: auto;
  border-radius: 30px;
  padding: 7px;
  align-items: center;
`;

const HomeIcon = styled(SimpleLineIcons)`
  background-color: #2d3748;
  padding: 10px;
  border-radius: 50px;
  font-size: 24px;
`;

const HomeText = styled.Text`
  color: ${primary};
  font-weight: 500;
  font-size: 17px;
  padding-left: 12px;
`;

const Home = ({ navigation }) => {
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
                    color: lighttint,
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
      <ShowCase>
        <ScrollView horizontal={true}>
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail")}
              style={{
                backgroundColor: "white",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Image space</Text>
            </TouchableOpacity>
          </ShoeItem>
        </ScrollView>
      </ShowCase>

      <Discover>
        <DiscoverView>
          <SectionText
            style={{
              fontWeight: "bold",
              color: lighttint,
            }}
          >
            DISCOVER
          </SectionText>
          <SectionText>
            <Ionicons name="ios-list" size={25} color={lighttint} />
          </SectionText>
        </DiscoverView>
        <DiscoverView>
          <DiscoverShoeItem>
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
            <DiscoverFoot pos="flex-end">
              <View>
                <Title color={tint}>Kyrie 6</Title>
                <SubTitle color={lighttint}>$130.00</SubTitle>
              </View>
              <TouchableOpacity>
                <AntDesign name="hearto" size={25} color={lighttint} />
              </TouchableOpacity>
            </DiscoverFoot>
          </DiscoverShoeItem>
          <DiscoverShoeItem>
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
            <DiscoverFoot pos="flex-end">
              <View>
                <Title color={tint}>Kyrie 6</Title>
                <SubTitle color={lighttint}>$130.00</SubTitle>
              </View>
              <TouchableOpacity>
                <AntDesign name="hearto" size={25} color={lighttint} />
              </TouchableOpacity>
            </DiscoverFoot>
          </DiscoverShoeItem>
        </DiscoverView>
      </Discover>
      <HomeButton>
        <HomeIcon name="home" size={25} color={primary} />
        <HomeText>Home</HomeText>
      </HomeButton>
    </StyledContainer>
  );
};

export default Home;
