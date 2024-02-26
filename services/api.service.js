import axios from 'axios';
import { getKeyValue, KEYS } from './storage.service.js';
const getWeather = async (city) => {
    const token = await getKeyValue(KEYS.token);

    if (!token) {
        throw new Error('Не задан ключ API. Задайте его через команду -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
       params: {
           q: city,
           appid: token,
           lang: 'ru',
           units: 'metric',
       }
    });

    return data;
};

export { getWeather };
