import styled from "styled-components";
import { Text, View } from "react-native";

export const Header = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white;
  margin-top: 80px;
  margin-bottom: 20px;
`;

export const Container = styled(View)`
  flex: 1;
  background-color: black;
  align-items: center;
`;