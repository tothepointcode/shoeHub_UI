import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
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
  ItemHead,
} from "./../styles/shared";
import styled from "styled-components/native";

const { primary, tint, gray, lighttint, white } = colors;

const SectionTouchable = styled(TouchableOpacity)``;

const Underline = styled.View`
  width: 30%;
  background-color: ${lighttint};
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
  margin-bottom: 30px;
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

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  position: absolute;
  right: -30px;
  resize-mode: stretch;
`;

const StyledShoeItem = styled(ShoeItem)`
  background-color: ${(props) => props.theme};
  padding: 10px;
`;

// context
// Data using context
const shoes = {
  popular: {
    main: [
      {
        img: [
          require("./../assets/kyrie1.png"),
          require("./../assets/kyrie2.png"),
          require("./../assets/kyrie4.png"),
          require("./../assets/kyrie5.png"),
        ],
        name: "Kyrie 6",
        price: "$130",
        theme: "#62c2d7",
      },
      {
        img: [
          require("./../assets/ZX2K.png"),
          require("./../assets/ZX2K1.png"),
          require("./../assets/ZX2K2.png"),
          require("./../assets/ZX2K3.png"),
        ],
        name: "2X 2K 4D",
        price: "$200",
        theme: "#81b0af",
      },
    ],
    discover: [
      {
        img: [require("./../assets/kyrie2.png")],
        name: "Kyrie Flytrap 3",
        price: "$148",
        theme: "",
      },
      {
        img: [require("./../assets/adidas1.png")],
        name: "Adidas 3MC",
        price: "$50",
        theme: "",
      },
    ],
  },
};
export const ShoesData = React.createContext(shoes);

const ImageTiles = ({ data, navigation }) => {
  const { main } = data.popular;
  return (
    <>
      {main.map((shoe, index) => {
        return (
          <StyledShoeItem key={index} theme={shoe.theme}>
            <ItemHead>
              <View>
                <Title>{shoe.name}</Title>
                <SubTitle>{shoe.price}</SubTitle>
              </View>
              <TouchableOpacity>
                <AntDesign name="hearto" size={25} color={primary} />
              </TouchableOpacity>
            </ItemHead>

            <TouchableOpacity
              onPress={() => navigation.navigate("Detail")}
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StyledImage source={shoe.img[0]} />
            </TouchableOpacity>
          </StyledShoeItem>
        );
      })}
    </>
  );
};

const Home = (props, { navigation }) => {
  const [activeSection, setActiveSection] = useState(0);

  const data = useContext(ShoesData);

  const sections = [
    { name: "Popular" },
    { name: "Categories" },
    { name: "Brands" },
  ];

  const { discover } = data.popular;

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

      <ShowCase>
        <ScrollView horizontal={true}>
          <ImageTiles data={data} {...props} />
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
          {discover.map((discoverItem, index) => {
            return (
              <DiscoverShoeItem key={index}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{ width: "100%", height: "100%" }}
                    source={discoverItem.img[0]}
                  />
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
            );
          })}
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
