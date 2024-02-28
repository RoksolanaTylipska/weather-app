# Weather Application
This is a simple weather application developed using React Native that retrieves current weather data from a public API.

![image](https://github.com/RoksolanaTylipska/weather-app/assets/88103621/b90c4c50-637f-4ad5-9031-2dd1b4b39490)

## Main Screen
The main screen of the application displays the current weather information for the selected city. It includes details such as temperature, weather conditions, humidity, etc.

### Functionality
API Integration: The application utilizes a public API (OpenWeatherMap API (https://openweathermap.org/guide)) to retrieve weather data.
City Selection: Users can input or select the name of the city for which they want to retrieve weather information.
Display Weather Information: The fetched weather information is displayed on the main screen of the application.
The application handle errors, such as incorrect city names or missing weather data, by providing appropriate error messages to the users.

### Instructions for Running the Application
Clone the repository to your local machine.
Navigate to the project directory.
Install dependencies by running

```bash
npm install
```

Run the application using 

```bash
npx expo start
```

View the application in an web or on a physical device.
- Web: after npx expo start press 'W'
- Physical device: Install the Expo Go app on your iOS or Android phone and connect to the same wireless network as your computer. On Android, use the Expo Go app to scan the QR code from your terminal to open your project. On iOS, use the built-in QR code scanner of the default iOS Camera app.

### Technologies Used
React Native
Expo
OpenWeatherMap API 
