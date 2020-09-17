import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const colors = {
  primary: "#F7FAFC",
  white: '#fff',
  tint: "#000",
  gray: "#A0AEC0",
  lightgray:"#CBD5E0",
  lighttint: "#4A5568"
};

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-horizontal: 20px;
`;
