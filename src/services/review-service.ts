/// <reference path='../../typings/index.d.ts'/>

import { inject, injectable } from 'inversify';
import { Express, Request, Response } from 'express-serve-static-core';

import { IReviewManager } from '../managers/_namespace';
import { IReviewService, IsLoggedInMiddleware } from './_namespace';

@injectable()
export class ReviewService implements IReviewService {

    private _reviewManager: IReviewManager;

    constructor (
        @inject('IReviewManager') reviewManager: IReviewManager
    ) {
        this._reviewManager = reviewManager;
    }

    public registerRoutes (app: Express) {
        app.get('/reviews/', this._getAll.bind(this));
        app.post('/reviews/', IsLoggedInMiddleware, this._create.bind(this));
        app.put('/reviews/:id', IsLoggedInMiddleware, this._update.bind(this));
        app.get('/reviews/:id', this._getById.bind(this));
    }

    private _getAll(req: Request, res: Response): void {
        res.send(this._reviewManager.getAll());
    }

    private _create(req: Request, res: Response): void {
        res.send(this._reviewManager.create(req.body));
    }

    private _update(req: Request, res: Response): void {
        let reviewId = parseInt(req.params.id, 10);

        res.send(this._reviewManager.update(reviewId, req.body));
    }

    private _getById(req: Request, res: Response): void {
        let requestedId = parseInt(req.params.id, 10);

        res.send(this._reviewManager.getById(requestedId));
    }

}
