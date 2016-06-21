/// <reference path="../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";
import { IServiceManager, IReviewService, IAuthenticationService } from "./services.namespace";
import { inject, injectable } from "inversify";

@injectable()
export class ServiceManager implements IServiceManager {

    private _reviewService: IReviewService;
    private _authenticationService: IAuthenticationService;

    constructor (
        @inject("IReviewService") reviewService: IReviewService,
        @inject("IAuthenticationService") authenticationService: IAuthenticationService
    ) {
        this._reviewService = reviewService;
        this._authenticationService = authenticationService;
    }

    public registerRoutes (app: Express) {
        this._authenticationService.registerRoutes(app);
        this._reviewService.registerRoutes(app);
    }

}
