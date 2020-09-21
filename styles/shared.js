import React from 'react';
import { View, Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const colors = {
  primary: '#F7FAFC',
  white: '#fff',
  tint: '#000',
  gray: '#A0AEC0',
  lightgray: '#CBD5E0',
  lighttint: '#4A5568',
};

const { gray, primary, white } = colors;

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${primary};
  padding-horizontal: 20px;
`;

export const SectionView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const SectionText = styled.Text`
  font-size: 20px;
  letter-spacing: 0.5px;
  color: ${gray};
`;

export const Discover = styled.View`
  flex: 1;
`;

export const DiscoverView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ShoeItem = styled.View`
  background-color: ${gray};
  width: 250px;
  margin-right: 25px;
  border-radius: 25px;
  padding: 20px;
  height: 320px;
`;

export const ItemHead = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => props.pos || 'flex-start'};
  padding: 15px;
`;

export const DiscoverShoeItem = styled(ShoeItem)`
  background-color: ${primary};
  width: 45%;
  padding: 0px;
  margin: 0px;
  margin-top: 25px;
  height: 210px;
`;

export const DiscoverFoot = styled(ItemHead)`
  align-items: ${(props) => props.pos || 'flex-start'};
  background-color: ${white};
  border-radius: 25px;
  elevation: 1;
`;

export const Title = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color || primary};
  padding-bottom: 5px;
  font-size: ${(props) => props.size || '18'}px;
`;

export const SubTitle = styled.Text`
  color: ${(props) => props.color || primary};
  font-size: ${(props) => props.size || '14'}px;
`;
