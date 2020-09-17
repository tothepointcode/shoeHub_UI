import React from "react";
import { View, Text } from "react-native";

// Styled components
import BottomSheet from "./../components/BottomSheet";
import { StyledContainer, colors } from "./../styles/shared";
import styled from "styled-components/native";

const Detail = () => {
  return (
    <>
      <StyledContainer>
        <Text>Detail</Text>
      </StyledContainer>
      <BottomSheet />
    </>
  );
};

export default Detail;
