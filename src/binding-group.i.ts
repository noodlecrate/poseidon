/// <reference path='../node_modules/inversify-dts/inversify/inversify.d.ts' />

import * as Inversify from 'inversify';

export interface IBindingGroup {

    registerBindings(kernel: Inversify.interfaces.Kernel): void;

}
