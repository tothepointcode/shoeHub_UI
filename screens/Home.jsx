import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';

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
  width,
} from './../styles/shared';
import styled from 'styled-components/native';

const { primary, tint, lighttint } = colors;

const ShowCase = styled(View)`
  margin-vertical: 20px;
  margin-bottom: 30px;
  margin-horizontal: -20px;
`;

const HomeButton = styled(TouchableOpacity)`
  background-color: ${tint};
  flex-direction: row;
  width: ${width * 0.36}px;
  border-radius: 30px;
  padding: 7px;
  align-items: center;
  position: absolute;
  bottom: 40px;
  left: ${width * 0.32}px;
  right: ${width * 0.32}px;
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
  margin-horizontal: 20px;
`;

// context
// Data using context
const shoes = {
  popular: {
    main: [
      {
        img: [
          require('./../assets/kyrie1.png'),
          require('./../assets/kyrie2.png'),
          require('./../assets/kyrie4.png'),
          require('./../assets/kyrie5.png'),
        ],
        name: 'Kyrie 6',
        price: '$130',
        theme: '#62c2d7',
        unavailableSizes: ['UK 6', 'UK 13'],
      },
      {
        img: [
          require('./../assets/ZX2K.png'),
          require('./../assets/ZX2K1.png'),
          require('./../assets/ZX2K2.png'),
          require('./../assets/ZX2K3.png'),
        ],
        name: '2X 2K 4D',
        price: '$200',
        theme: '#81b0af',
        unavailableSizes: [],
      },
    ],
    discover: [
      {
        img: [require('./../assets/kyrie2.png')],
        name: 'Kyrie Flytrap 3',
        price: '$148',
        theme: '',
      },
      {
        img: [require('./../assets/adidas1.png')],
        name: 'Adidas 3MC',
        price: '$50',
        theme: '',
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
              <TouchableOpacity onPress={() => alert('Add to Fave')}>
                <AntDesign name="hearto" size={25} color={primary} />
              </TouchableOpacity>
            </ItemHead>

            <TouchableOpacity
              onPress={() => navigation.navigate('Detail', { index })}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
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
  const data = useContext(ShoesData);
  const { discover } = data.popular;

  return (
    <StyledContainer>
      <ShowCase>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <ImageTiles data={data} {...props} />
        </ScrollView>
      </ShowCase>

      <Discover>
        <DiscoverView>
          <SectionText
            style={{
              fontWeight: 'bold',
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
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image resizeMode="contain" style={{ width: '100%', height: '100%' }} source={discoverItem.img[0]} />
                </View>

                <DiscoverFoot pos="flex-end">
                  <View>
                    <Title color={tint}>Kyrie 6</Title>
                    <SubTitle color={lighttint}>$130.00</SubTitle>
                  </View>
                  <TouchableOpacity onPress={() => alert('Add to Fave')}>
                    <AntDesign name="hearto" size={25} color={lighttint} />
                  </TouchableOpacity>
                </DiscoverFoot>
              </DiscoverShoeItem>
            );
          })}
        </DiscoverView>
      </Discover>

      <HomeButton onPress={() => alert('Home')}>
        <HomeIcon name="home" size={25} color={primary} />
        <HomeText>Home</HomeText>
      </HomeButton>
    </StyledContainer>
  );
};

export default Home;
