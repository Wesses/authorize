import { useEffect, useState } from 'react';
import { getWeather } from '../../api/api';

export const WeatherForecast = () => {
  const tokens = localStorage.getItem('tokens');
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (tokens) {
      getWeather(tokens[0])
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
                {'date - ' + date}
                {'temperatureC - ' + temperatureC}
                {'temperatureF - ' + temperatureF}
                {'summary - ' + summary + '\n'}
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
