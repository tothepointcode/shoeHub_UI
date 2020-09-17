import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

// Styled components
import { StyledContainer, colors } from "./../styles/shared";
import styled from "styled-components/native";

const { primary, tint, gray, lighttint, white } = colors;

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

const ShowCase = styled(View)`
  margin-vertical: 15px;
`;

const ShoeItem = styled.View`
  background-color: ${gray};
  width: 250px;
  margin-right: 25px;
  border-radius: 25px;
  padding: 20px;
  height: 300px;
`;

const DiscoverShoeItem = styled(ShoeItem)`
  background-color: ${primary};
  width: 45%;
  padding: 0px;
  margin: 0px;
  margin-top: 25px;
`;

const ItemHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => props.pos || "flex-start"};
  padding: 15px;
`;

const DiscoverFoot = styled(ItemHead)`
  align-items: ${(props) => props.pos || "flex-start"};
  background-color: ${white};
  border-radius: 25px;
  elevation: 1;
`;

const Title = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color || primary};
  padding-bottom: 5px;
  font-size: 18px;
`;

const SubTitle = styled.Text`
  color: ${(props) => props.color || primary};
`;

const Discover = styled.View`
  flex: 1;
`;

const DiscoverView = styled.View`
  flex-direction: row;
  justify-content: space-between;
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
