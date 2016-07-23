/// <reference path='../../typings/index.d.ts'/>

import { inject, injectable } from 'inversify';
import { Express } from 'express-serve-static-core';

import {
    IServiceManager,
    IReviewService,
    IAuthenticationService,
    IUserService,
    INoodleService,
    IBrandService,
    IService
} from './_namespace';

@injectable()
export class ServiceManager implements IServiceManager {

    private _containedServices: Array<IService>;

    constructor (
        @inject('IReviewService') reviewService: IReviewService,
        @inject('IAuthenticationService') authenticationService: IAuthenticationService,
        @inject('IUserService') userService: IUserService,
        @inject('INoodleService') noodleService: INoodleService,
        @inject('IBrandService') brandService: IBrandService
    ) {
        this._containedServices = [
            reviewService,
            authenticationService,
            userService,
            noodleService,
            brandService
        ];
    }

    public registerRoutes (app: Express) {
        this._containedServices.forEach(svc => {
            svc.registerRoutes(app);
        });
    }

}
