/// <reference path='../node_modules/inversify-dts/inversify/inversify.d.ts' />

import { Kernel } from 'inversify';
import * as Glob from 'glob';
import * as path from 'path';

import { IPassport } from './managers/_namespace';
import * as passport from 'passport';

let kernel = new Kernel();

// create a glob to match all binding paths
let bindingGlob = path.join(process.cwd(), './**/_bindings.js');

// get all the paths
let bindingFilePaths = Glob.sync(bindingGlob);

bindingFilePaths.forEach((filePath: string) => {
    // grab the binding group's exported function
    let registerGroupBindings: Function = require(filePath).default;
    registerGroupBindings(kernel);
});

kernel.bind<IPassport>('IPassport').toConstantValue(passport);

export {
    kernel
};
