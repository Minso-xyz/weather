import React from "react";
import {Alert} from "react-native";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "fb961a1a1d616a0060928c55b2af0257";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    this.setState({isLoading : false, temp: data.main.temp})

  }
  getLocation = async() => {
    try {
      throw Error();
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(Options);
      // Send to API and get weather
      this.getWeather(latitude, longitude)
      this.setState({ isLoading: false})

    } catch (error) {
      Alert.alert("Can't find you.", "So sad.");
    }
    
  }
  
  componentDiMount() {
    this.getLocation()
  }
  render(){
    const { isLoading, temp } = this.state;
  return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} /> ;
  }
}