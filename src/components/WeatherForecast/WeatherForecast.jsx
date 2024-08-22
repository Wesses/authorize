import { useEffect, useState } from 'react';
import { getWeather } from '../../api/api';

export const WeatherForecast = () => {
  const tokens = localStorage.getItem('tokens');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    console.log(tokens);

    if (tokens) {
      getWeather(tokens.split(',')[0])
      .then(r => {
        setWeatherData(r);
      })
      .catch(e => {
        console.log(e);
      })
    }
  }, [tokens]);

  return (
    <>
      {weatherData.length ? (
        <div>
          {
            weatherData.map(({date, temperatureC, temperatureF, summary}) => (
              <div key={date} >
                <div>{'date - ' + date}</div>
                <div>{'temperatureC - ' + temperatureC}</div>
                <div>{'temperatureF - ' + temperatureF}</div>
                <div>{'summary - ' + summary}</div>
                <div>--------------------------------------------------</div>
              </div>
            ))
          }
        </div>
      ) : 
      (
        <div>Loading...</div>
      )}
    </>
  )
}
