/// <reference path="../../typings/index.d.ts"/>

import { inject, injectable } from "inversify";
import { Express } from "express-serve-static-core";

import {
    IServiceManager,
    IReviewService,
    IAuthenticationService,
    IService
} from "./services.namespace";

@injectable()
export class ServiceManager implements IServiceManager {

    private _containedServices: Array<IService>;

    constructor (
        @inject("IReviewService") reviewService: IReviewService,
        @inject("IAuthenticationService") authenticationService: IAuthenticationService
    ) {
        this._containedServices = [
            reviewService,
            authenticationService
        ];
    }

    public registerRoutes (app: Express) {
        this._containedServices.forEach(svc => {
            svc.registerRoutes(app);
        });
    }

}
