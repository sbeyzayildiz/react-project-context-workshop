import "./App.css";
import Card from "./components/Card";
import QueryCityWeather from "./components/QueryCityWeather";
import { useWeather } from "./contexts/WeatherContext";

function App() {
  const { weather } = useWeather();
  console.log("weather: ", weather);

  return (
    <div className="App">
      <QueryCityWeather />
      <div className="list">
        {weather && weather.map((weather) => <Card data={weather} />)}
      </div>
    </div>
  );
}

export default App;
