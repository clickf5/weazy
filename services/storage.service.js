import { homedir } from 'os';
import { join } from 'path';
import { writeFile, readFile, stat } from 'node:fs/promises';

const filePath = join(homedir(), 'weazy-data.json');

const KEYS = {
    token: 'token',
    city: 'city',
};

const isExist = async (path) => {
    try {
        await stat(path);
        return true;
    } catch (e) {
        return false;
    }
};
const saveKeyValue = async (key, value) => {
    let data = {};

    if (await isExist(filePath)) {
        const file = await readFile(filePath);
        data = JSON.parse(file.toString());
    }

    data[key] = value;
    await writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await readFile(filePath);
        const data = JSON.parse(file.toString());
        return data[key];
    }

    return undefined;
};

export { saveKeyValue, getKeyValue, KEYS };
