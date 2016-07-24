/// <reference path='../node_modules/inversify-dts/inversify/inversify.d.ts' />

import { Kernel } from 'inversify';

import {
    IReviewService, ReviewService,
    IServiceManager, ServiceManager,
    IAuthenticationService, AuthenticationService,
    IUserService, UserService,
    INoodleService, NoodleService,
    IBrandService, BrandService
} from './services/_namespace';

import {
    IUserSerializer, UserSerializer,
    IReviewSerializer, ReviewSerializer,
    INoodleSerializer, NoodleSerializer,
    IBrandSerializer, BrandSerializer
} from './serializers/_namespace';

import { BindingGroup as ManagerBindingGroup } from './managers/_bindings';
import { BindingGroup as RepositoryBindingGroup } from './repositories/_bindings';

import { IPassport } from './managers/_namespace';
import * as passport from 'passport';

let kernel = new Kernel();

new ManagerBindingGroup().registerBindings(kernel);
new RepositoryBindingGroup().registerBindings(kernel);

kernel.bind<IServiceManager>('IServiceManager').to(ServiceManager);
kernel.bind<IReviewService>('IReviewService').to(ReviewService);
kernel.bind<IAuthenticationService>('IAuthenticationService').to(AuthenticationService);
kernel.bind<IUserService>('IUserService').to(UserService);
kernel.bind<INoodleService>('INoodleService').to(NoodleService);
kernel.bind<IBrandService>('IBrandService').to(BrandService);

kernel.bind<IUserSerializer>('IUserSerializer').to(UserSerializer);
kernel.bind<IReviewSerializer>('IReviewSerializer').to(ReviewSerializer);
kernel.bind<INoodleSerializer>('INoodleSerializer').to(NoodleSerializer);
kernel.bind<IBrandSerializer>('IBrandSerializer').to(BrandSerializer);

kernel.bind<IPassport>('IPassport').toConstantValue(passport);

export {
    kernel
};
