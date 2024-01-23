import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const api = {
  key: '1b51d9624fd77d65bcbc2277ddc51798',
  base: 'https://api.openweathermap.org/data/2.5/'
};

function App() {

  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});

  const searchLocation = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(data => {
      setWeather(data);
      console.log(data)
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Whats the weather?</h1>
      <div>
        <input type='text' 
               placeholder='Enter location'
               onChange={(e) => setSearch(e.target.value)}/>

        <button
          onClick={searchLocation}>
          Search
        </button>  
        
      </div>

        <p>{weather.name}</p>

        <p>{weather.main.temp}°C</p>

        <p>{weather.weather[0].description}</p>
      </header>
    </div>
  );
}

export default App;
