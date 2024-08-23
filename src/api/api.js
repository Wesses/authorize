import axios from 'axios';

axios.defaults.baseURL = 'https://communal.in.ua/Cabinet6api/';
const Authenticate = 'api/Authenticate/';
const WeatherForecast = 'WeatherForecast/';

export const apiAuthenticateReq = async (urlParam, type, data) => {
  try {
    if (type === 'GET') {
      const response = await axios.get(Authenticate + urlParam);

      return response.data;
    }
  
    if (type === 'POST') {
      const response = await axios.post(Authenticate + urlParam, data);

      return response.data;
    }
  } catch (err) {
    throw new Error(err);
  }
}

export const getWeather = async (token) => {
  const headers = {
    headers: {
      Authorization: 'Bearer ' + token,
    }
  }

    try {
      const response = await axios.get(WeatherForecast, headers)

      return response.data;
    } catch (err) {
      throw new Error(err);
    }
}