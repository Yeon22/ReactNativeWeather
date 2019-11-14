import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { WEATHERS, WEATHER_OPTIONS, ICON_SIZE, ICON_COLOR } from '../constant';

export default function Weather({temp, condition, description}) {
  return (
    <LinearGradient
        colors={WEATHER_OPTIONS["Haze"].gradient}
        style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
            name={WEATHER_OPTIONS["Haze"].iconName}
            size={ICON_SIZE}
            color={ICON_COLOR}/>
        <Text style={styles.temp}>{temp}º</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.title}>{condition}</Text>
        <Text style={styles.subtitle}>{description}</Text>
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
  },
  title: {
    color: "white",
    fontSize: 45,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24
  }
});