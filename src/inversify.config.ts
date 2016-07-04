/// <reference path="../node_modules/inversify-dts/inversify/inversify.d.ts" />

import { Kernel } from "inversify";

import {
    IReviewService, ReviewService,
    IServiceManager, ServiceManager,
    IAuthenticationService, AuthenticationService,
    IUserService, UserService
} from "./services/_namespace";

import {
    IUserRepository, UserRepository,
    IReviewRepository, ReviewRepository
} from "./repositories/_namespace";

import {
    IUserSerializer, UserSerializer,
    IReviewSerializer, ReviewSerializer
} from "./serializers/_namespace";

import {
    IAuthenticationManager, AuthenticationManager,
    IReviewManager, ReviewManager,
    IUserManager, UserManager,
    IPassport
} from "./managers/_namespace";

import * as passport from "passport";

var kernel = new Kernel();

kernel.bind<IServiceManager>("IServiceManager").to(ServiceManager);
kernel.bind<IReviewService>("IReviewService").to(ReviewService);
kernel.bind<IAuthenticationService>("IAuthenticationService").to(AuthenticationService);
kernel.bind<IUserService>("IUserService").to(UserService);

kernel.bind<IUserRepository>("IUserRepository").to(UserRepository);
kernel.bind<IReviewRepository>("IReviewRepository").to(ReviewRepository);

kernel.bind<IUserSerializer>("IUserSerializer").to(UserSerializer);
kernel.bind<IReviewSerializer>("IReviewSerializer").to(ReviewSerializer);

kernel.bind<IAuthenticationManager>("IAuthenticationManager").to(AuthenticationManager);
kernel.bind<IReviewManager>("IReviewManager").to(ReviewManager);
kernel.bind<IUserManager>("IUserManager").to(UserManager);

kernel.bind<IPassport>("IPassport").toConstantValue(passport);

export default kernel;
