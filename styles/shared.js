import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

export const colors = {
  primary: "#fff",
  tint: "#000",
};

export const StyledContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  padding: 20px;
`;
