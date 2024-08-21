import { View, Text, Image } from "react-native";
import styled from "styled-components";

export const Card = styled(View)`
    width: 350px;
    height: 80px;
    align-items: center;
    background-color: white;
    flex-direction: row;
    gap: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    padding: 10px;
`
export const StyledImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const StyledText = styled(Text)`
    font-size: 16px;
    color: black;
`