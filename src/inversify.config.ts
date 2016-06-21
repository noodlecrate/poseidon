import { Kernel } from "inversify";

import {
    IReviewService, ReviewService,
    IServiceManager, ServiceManager
} from "./services/services.namespace";

var kernel = new Kernel();

kernel.bind<IReviewService>("IReviewService").to(ReviewService);
kernel.bind<IServiceManager>("IServiceManager").to(ServiceManager);

export default kernel;
