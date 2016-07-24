/// <reference path='../node_modules/inversify-dts/inversify/inversify.d.ts' />

import { Kernel } from 'inversify';

import { BindingGroup as ManagerBindingGroup } from './managers/_bindings';
import { BindingGroup as RepositoryBindingGroup } from './repositories/_bindings';
import { BindingGroup as SerializerBindingGroup } from './serializers/_bindings';
import { BindingGroup as ServiceBindingGroup } from './services/_bindings';

import { IPassport } from './managers/_namespace';
import * as passport from 'passport';

let kernel = new Kernel();

new ManagerBindingGroup().registerBindings(kernel);
new RepositoryBindingGroup().registerBindings(kernel);
new SerializerBindingGroup().registerBindings(kernel);
new ServiceBindingGroup().registerBindings(kernel);

kernel.bind<IPassport>('IPassport').toConstantValue(passport);

export {
    kernel
};
