import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { WEATHERS, WEATHER_OPTIONS, ICON_SIZE, ICON_COLOR } from '../constant';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TempText = styled.Text`
  font-size: 36;
  color: white;
`;

const Title = styled.Text`
  color: white;
  font-size: 45;
  font-weight: 300;
  margin-bottom: 10;
`;

const SubTitle = styled.Text`
  font-weight: 600;
  color: white;
  font-size: 24;
`;

export default function Weather({temp, condition, description}) {
  return (
    <LinearGradient
        colors={WEATHER_OPTIONS[condition].gradient}
        style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Container>
        <MaterialCommunityIcons
            name={WEATHER_OPTIONS[condition].iconName}
            size={ICON_SIZE}
            color={ICON_COLOR}/>
        <TempText>{temp}º</TempText>
      </Container>
      <Container>
        <Title>{condition}</Title>
        <SubTitle>{description}</SubTitle>
      </Container>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(WEATHERS).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});