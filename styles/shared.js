import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const colors = {
  primary: "#F7FAFC",
  white: '#fff',
  tint: "#000",
  gray: "#A0AEC0",
  lighttint: "#2D3748"
};

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-horizontal: 20px;
`;
