import React from 'react';
import { Alert } from 'react-native';
import { API_KEY } from './constant';

import Loading from './components/Loading';
import Weather from './components/Weather';

import * as Location from 'expo-location';
import axios from 'axios';

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      description: weather[0].description,
      temp,
    });
  }

  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find your location.", "Please allow location permission");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const { isLoading, condition, description, temp } = this.state;
    return isLoading ? <Loading/> : <Weather condition={condition} description={description} temp={Math.round(temp)}/>;
  }
}
