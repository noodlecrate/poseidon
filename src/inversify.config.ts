/// <reference path='../node_modules/inversify-dts/inversify/inversify.d.ts' />

import { Kernel } from 'inversify';
import * as glob from 'glob';

import { IPassport } from './managers/_namespace';
import * as passport from 'passport';

let kernel = new Kernel();

glob('./**/_bindings', (e: Error, filePaths: Array<string>) => {
    filePaths.forEach((filePath: string) => {
        // grab the binding group's exported function
        let registerGroupBindings: Function = require(filePath);
        registerGroupBindings(kernel);
    });
});

kernel.bind<IPassport>('IPassport').toConstantValue(passport);

export {
    kernel
};
