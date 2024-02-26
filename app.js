#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printSuccess, printHelp } from './services/log.service.js';

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
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
