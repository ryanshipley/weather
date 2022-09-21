import './App.css';
import WeatherForecast from './components/WeatherForcast';
import Weather from './WeatherData';

const weather = Weather.map((ele, index) =>{
  return(
    <div className="forecast">
      <WeatherForecast
      img={ele.img}
      conditions={ele.conditions}
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
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QXZwhSE2VriMcdx_06_43Q9Nf3fvAX13uw&usqp=CAU"/>
    </div>
  );
}

export default App;
