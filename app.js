#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import {printHelp, printSuccess, printError, printWeather} from './services/log.service.js';
import {saveKeyValue, KEYS, getKeyValue} from './services/storage.service.js';
import {getWeather} from "./services/api.service.js";
import dedent from "dedent-js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
    try {
        await saveKeyValue(KEYS.token, token);
        printSuccess('Токен сохранен')
    } catch (e) {
        printError(e.message);
    }
}

const saveCity = async (city) => {
    if (!city.length) {
        printError('Не передан город');
        return;
    }

    try {
        await saveKeyValue(KEYS.city, city);
        printSuccess('Город сохранен');
    } catch (e) {
        printError(e.message);
    }
}

const getForcast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(KEYS.city);

        if (!city) {
            throw new Error('Не задан город. Задайте его через команду -c [CITY]');
        }

        const res = await getWeather(city);
        printWeather(res);
    } catch (e) {
        if (e?.response?.status === 404) {
            printError('Неверно указан город');
        } else if (e?.response?.status === 401) {
            printError('Неверно указан токен');
        } else {
            printError(e.message);
        }
    }

}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }

    if (args.t) {
        return saveToken(args.t);
    }

    if (args.c) {
        return saveCity(args.c);
    }

    return getForcast();
};

initCLI();
