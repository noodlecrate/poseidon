/// <reference path="../node_modules/inversify-dts/inversify/inversify.d.ts" />

import { Kernel } from "inversify";

import {
    IReviewService, ReviewService,
    IServiceManager, ServiceManager
} from "./services/services.namespace";

import {
    IUserRepository, UserRepository,
    IReviewRepository, ReviewRepository
} from "./repositories/repositories.namespace";

import {
    IUserSerializer, UserSerializer,
    IReviewSerializer, ReviewSerializer
} from "./serializers/serializers.namespace";

import {
    IAuthenticationManager, AuthenticationManager,
    IReviewManager, ReviewManager,
    IUserManager, UserManager,
    IPassport
} from "./managers/managers.namespace";

import * as passport from "passport";

var kernel = new Kernel();

kernel.bind<IReviewService>("IReviewService").to(ReviewService);
kernel.bind<IServiceManager>("IServiceManager").to(ServiceManager);

kernel.bind<IUserRepository>("IUserRepository").to(UserRepository);
kernel.bind<IReviewRepository>("IReviewRepository").to(ReviewRepository);

kernel.bind<IUserSerializer>("IUserSerializer").to(UserSerializer);
kernel.bind<IReviewSerializer>("IReviewSerializer").to(ReviewSerializer);

kernel.bind<IAuthenticationManager>("IAuthenticationManager").to(AuthenticationManager);
kernel.bind<IReviewManager>("IReviewManager").to(ReviewManager);
kernel.bind<IUserManager>("IUserManager").to(UserManager);

kernel.bind<IPassport>("IPassport").toConstantValue(passport);

export default kernel;
