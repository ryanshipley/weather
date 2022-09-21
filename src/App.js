import './App.css';
import WeatherForecast from './components/WeatherForcast';
import Weather from './WeatherData';

const weather = Weather.map((ele, index) =>{
  return(
    <div className="forecast">
      <WeatherForecast
      img={ele.img}
      condition={ele.condition}
      time={ele.time}
      key={index}
      />
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <h1>Daily Outlook?</h1>
      <div className="weather">{weather}</div>
    </div>
  );
}

export default App;
