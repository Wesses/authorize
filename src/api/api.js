import axios from 'axios';

axios.defaults.baseURL = 'https://communal.in.ua/Cabinet6api/api/Authenticate/';

export const swaggerApiReq = async (urlParam, type, data) => {
  try {
    if (type === 'GET') {
      const response = await axios.get(urlParam);

      return response.data;
    }
  
    if (type === 'POST') {
      const response = await axios.post(urlParam, data);

      return response.data;
    }
  } catch (e) {
    throw new Error(e);
  }
}
