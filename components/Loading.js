import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding-horizontal: 30;
  padding-vertical: 100;
  background-color: #FDF6AA;
`;

const LoadingText = styled.Text`
  color: #2c2c2c;
  font-size: 30;
`;

export default function Loading() {
  return (
    <Container>
      <StatusBar barStyle="dark-content"/>
      <LoadingText>Getting the weather</LoadingText>
    </Container>
  );
}