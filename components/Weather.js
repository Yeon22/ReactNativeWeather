import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { WEATHERS, WEATHER_OPTIONS, ICON_SIZE, ICON_COLOR } from '../constant';



export default function Weather({temp, condition}) {
  return (
    <LinearGradient
        colors={WEATHER_OPTIONS[condition].gradient}
        style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
            name={WEATHER_OPTIONS[condition].iconName}
            size={ICON_SIZE}
            color={ICON_COLOR}/>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}>

      </View>
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
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 36,
    color: "white"
  }
});