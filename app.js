#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        // help
    }

    if (args.t) {
        // save token
    }

    if (args.s) {
        // save city
    }

    // print weather
};

initCLI();
