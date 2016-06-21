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

var kernel = new Kernel();

kernel.bind<IReviewService>("IReviewService").to(ReviewService);
kernel.bind<IServiceManager>("IServiceManager").to(ServiceManager);

kernel.bind<IUserRepository>("IUserRepository").to(UserRepository);
kernel.bind<IReviewRepository>("IReviewRepository").to(ReviewRepository);

kernel.bind<IUserSerializer>("IUserSerializer").to(UserSerializer);
kernel.bind<IReviewSerializer>("IReviewSerializer").to(ReviewSerializer);

export default kernel;
