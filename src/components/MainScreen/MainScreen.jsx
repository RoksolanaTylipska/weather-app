import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import fetchWeather from '../../utils/fetchWeather';

const MainScreen = () => {
  const [city, setCity] = useState('Lviv');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [weatherIcon, setWeatherIcon] = useState('');


  const handleFetchWeather = async () => {
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      console.log(data); 
      setWeather(data);
      setWeatherIcon(getWeatherIcon(data.weather[0].main)); 
      setError(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleFetchWeather()
  },[])

  const getWeatherIcon = (weatherCondition) => {
    switch(weatherCondition) {
      case 'Thunderstorm':
        return require('../../../assets/icons/free-icon-storm.png');
      case 'Drizzle':
        return require('../../../assets/icons/free-icon-cloudy-2.png');
      case 'Rain':
        return require('../../../assets/icons/free-icon-rainy.png');
      case 'Light intensity shower rain':
      case 'Shower rain':
      case 'Heavy intensity shower rain':
      case 'Ragged shower rain':
      case 'Heavy intensity rain':
      case 'Very heavy rain':
        return require('../../../assets/icons/free-icon-rainy.png');
      case 'Snow':
        return require('../../../assets/icons/free-icon-snowy.png');
      case 'Clouds':
        return require('../../../assets/icons/free-icon-cloudy-3.png');
      case 'Clear':
        return require('../../../assets/icons/free-icon-sun.png');
      case 'Mist':
        return require('../../../assets/icons/free-icon-foog.png');

      default:
        return require('../../../assets/icons/free-icon-warm.png');

    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1f1f1f' }}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter city"
            placeholderTextColor="#A9A9A9"
            value={city}
            onChangeText={setCity}
            selectTextOnFocus={false}
            />
          <TouchableOpacity style={styles.searchButton} onPress={handleFetchWeather}>
            <Ionicons name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {loading && <ActivityIndicator size="large" color="blue" />}

        {error ? <Text style={styles.error}>{error}</Text> : null}

        {weather && (
          <View>  
            <Text style={[styles.text, styles.cityName]}>{weather.name}</Text>
            <View style={styles.mainTemperatureContainer}>
              <Image source={weatherIcon} style={styles.weatherIcon} />
              <View style={styles.temperatureContainer}>
                <Text style={[styles.text, {fontSize: 40}]}>{weather.main.temp.toFixed(1)} °C</Text>
                <Text style={[styles.text, {fontSize: 15}]}>Feels like: {weather.main.feels_like.toFixed(1)} °C</Text>
                <Text style={[styles.text, {fontSize: 20}]}>{weather.weather[0].main}</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}> 
              <View style={styles.detailsItemContainer}>
                <Image style={styles.detailsIcon} source={require('../../../assets/icons/free-icon-humidity.png') } />
                <Text style={styles.text}>Humidity {weather.main.humidity}%</Text>
              </View>
              <View style={styles.detailsItemContainer}>
                <Image style={styles.detailsIcon} source={require('../../../assets/icons/free-icon-wind.png') } />
                <Text style={styles.text}>Wind {weather.wind.speed} m/s</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#292929',
    borderRadius: 25,
  },
  input: {
    fontSize: 20,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    color: '#ffffff',
    flex: 1,
  },
  weatherContainer: {
    flex: 1,
    gap: 60
  },
  searchButton: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#1f56a8',
    borderRadius: 25,
    width: 70,
    height: '100%'
  },
  detailsContainer: {
    flex: 1,
    gap: 10,
    backgroundColor: '#292929',
    padding: 20,
    borderRadius: 25,
    height: '70%'
  },
  detailsItemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15
  },
  text: {
    fontSize: 16,
    color: '#ffffff',
  },
  cityName: {
    textAlign: 'center',
    fontSize: 40,
    marginTop: 20,
  },
  weatherIcon: {
    width: 150,
    height: 150,
  },
  detailsIcon: {
    width: 45,
    height: 45,
  },
  mainTemperatureContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30,
    marginVertical: 50,
  },
  temperatureContainer: {
    flex: 1,
    gap: 10
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default MainScreen;