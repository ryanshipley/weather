import './App.css';
import WeatherForecast from './components/WeatherForcast';
import Weather from './WeatherData';

const weather = Weather.map((ele, index) =>{
  return(
    <div>
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
      
    </div>
  );
}

export default App;
