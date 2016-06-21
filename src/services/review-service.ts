/// <reference path="../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";
import { IReviewManager } from "../managers/managers.namespace";
import { IReviewService } from "./_interfaces/review-service.i";

export class ReviewService implements IReviewService {

    private _reviewManager: IReviewManager;

    constructor (reviewManager: IReviewManager) {
        this._reviewManager = reviewManager;
    }

    public registerRoutes (app: Express) {
        app.get('/reviews/', this._getAll.bind(this));
        app.get('/reviews/:id', this._getById.bind(this));
    }

    private _getAll(req: any, res: any): any {
        res.send(this._reviewManager.getAll());
    }

    private _getById(req: any, res: any): any {
        let requestedId = parseInt(req.params['id']);

        res.send(this._reviewManager.getById(requestedId));
    }

}
