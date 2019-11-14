const API_KEY = '4de275e9c1dc478d273652025b925b02';

const WEATHERS = [
  "Thunderstorm",
  "Drizzle",
  "Rain",
  "Snow",
  "Mist",
  "Smoke",
  "Haze",
  "Dust",
  "Fog",
  "Sand",
  "Ash",
  "Squall",
  "Tornado",
  "Clear",
  "Clouds"
];

const WEATHER_STYLES = {
  THUNDERSTORM: {
    iconName: "weather-lightning",
    gradient: ["#003973", "#e5e5be"]
  },
  DRIZZLE: {
    iconName: "weather-hail",
    gradient: ["#076585", "#fff"]
  },
  RAIN: {
    iconName: "weather-pouring",
    gradient: ["#24c6dc", "#514a9d"]
  },
  SNOW: {
    iconName: "weather-snowy",
    gradient: ["#2980b9", "#6dd5fa"]
  },
  ATMOSPHERE: {
    iconName: "weather-fog",
    gradient: ["#757f9a", "#d7dde8"]
  },
  WIND: {
    iconName: "weather-windy",
    gradient: ["#00c9ff", "#92fe9d"]
  },
  SUNNY: {
    iconName: "weather-sunny",
    gradient: ["#ede574", "#e1f5c4"]
  },
};

const WEATHER_OPTIONS = {
  Thunderstorm: WEATHER_STYLES.THUNDERSTORM,
  Drizzle: WEATHER_STYLES.DRIZZLE,
  Rain: WEATHER_STYLES.RAIN,
  Snow: WEATHER_STYLES.SNOW,
  Squall: WEATHER_STYLES.WINd,
  Tornado: WEATHER_STYLES.WIND,
  Mist: WEATHER_STYLES.ATMOSPHERE,
  Smoke: WEATHER_STYLES.ATMOSPHERE,
  Haze: WEATHER_STYLES.ATMOSPHERE,
  Dust: WEATHER_STYLES.ATMOSPHERE,
  Fog: WEATHER_STYLES.ATMOSPHERE,
  Sand: WEATHER_STYLES.ATMOSPHERE,
  Ash: WEATHER_STYLES.ATMOSPHERE,
  Clouds: WEATHER_STYLES.ATMOSPHERE,
  Clear: WEATHER_STYLES.SUNNY,
};

const ICON_SIZE = 90;
const ICON_COLOR = "white";

export {
  API_KEY,
  WEATHERS,
  WEATHER_STYLES,
  WEATHER_OPTIONS,
  ICON_SIZE,
  ICON_COLOR,
};