import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const colors = {
  primary: "#fff",
  tint: "#000",
  gray: "#A0AEC0",
};

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding-horizontal: 20px;
`;
