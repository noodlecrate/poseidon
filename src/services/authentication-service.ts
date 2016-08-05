/// <reference path='../../typings/index.d.ts'/>

import { inject, injectable } from 'inversify';
import { Express, Request, Response, NextFunction } from 'express-serve-static-core';

import { IAuthenticationService, IsLoggedInMiddleware } from './_namespace';
import { IAuthenticationManager, IPassport } from '../managers/_namespace';

@injectable()
export class AuthenticationService implements IAuthenticationService {

    private _passport: IPassport;

    constructor (
        @inject('IAuthenticationManager') authenticationManager: IAuthenticationManager,
        @inject('IPassport') passport: IPassport
    ) {
        this._passport = passport;
        authenticationManager.setupPassport();
    }

    public registerRoutes(app: Express): void {
        app.post('/session', this._authenticationPost.bind(this));
        app.delete('/session', IsLoggedInMiddleware, this._authenticationDelete.bind(this));
    }

    private _authenticationPost(req: Request, res: Response, next: NextFunction): void {
        this._passport.authenticate('local-login', (err, user, info) => {
            if (err || !user) {
                return this._sendAuthenticationError(req, res);
            }

            req.logIn(user, (err) => {
                if (err) {
                    return this._sendAuthenticationError(req, res);
                }

                return res.sendStatus(201);
            });
        })(req, res, next);
    }

    private _sendAuthenticationError(req: Request, res: Response): void {
        res.sendStatus(401);
    }

    private _authenticationDelete(req: Request, res: Response): void {
        req.logout();
    }

}
