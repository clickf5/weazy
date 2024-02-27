import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.service.js';

const printError = (error) => {
    console.log(`${chalk.bgRed(' ERROR ')} ${error}`);
};
const printSuccess = (message) => {
    console.log(`${chalk.bgGreen(' SUCCESS ')} ${message}`);
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')}
        Без параметров - вывод погоды
        -s [CITY] - для установки города
        -t [API_KEY] - для сохранения токена
        -h - для вывода помощи`,
    );
};

const printWeather = (res) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
        ${getIcon(res.weather[0].icon)} ${res.weather[0].description}
        Температура: ${res.main.temp}\u00b0C (ощущается как ${res.main.feels_like}\u00b0C)
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed} м/с`,
    );
};

export {
    printError, printSuccess, printHelp, printWeather,
};
