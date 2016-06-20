/// <reference path="../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";
import { ReviewManager } from "../managers/review-manager";

export class ReviewService {

    private _reviewManager: ReviewManager;

    constructor (reviewManager: ReviewManager) {
        this._reviewManager = reviewManager;
    }

    public registerRoutes (app: Express) {
        app.get('/reviews/', this._getAll.bind(this));
    }

    private _getAll(req: any, res: any): any {
        res.send(this._reviewManager.getAll());
    }

}
