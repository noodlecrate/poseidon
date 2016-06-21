/// <reference path="../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";
import { IServiceManager, IReviewService } from "./services.namespace";
import { inject } from "inversify";

@inject("IReviewService")
export class ServiceManager implements IServiceManager {

    private _reviewService: IReviewService;

    constructor (reviewService: IReviewService) {
        this._reviewService = reviewService;
    }

    public registerRoutes (app: Express) {
        this._reviewService.registerRoutes(app);
    }

}
