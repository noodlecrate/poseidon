import { IServiceManager } from "./_interfaces/service-manager.i";
import { ServiceManager } from "./service-manager";

import { IService } from "./_interfaces/service.i";

import { IReviewService } from "./_interfaces/review-service.i";
import { ReviewService } from "./review-service";

import { IAuthenticationService } from "./_interfaces/authentication-service.i";
import { AuthenticationService } from "./authentication-service";

export {
    IServiceManager, ServiceManager,
    IService,
    IReviewService, ReviewService,
    IAuthenticationService, AuthenticationService
};
