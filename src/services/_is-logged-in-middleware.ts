import { Request, Response } from 'express-serve-static-core';

export function IsLoggedInMiddleware(req: Request, res: Response, next: Function) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated() && req.user !== undefined) {
        return next();
    }

    res.sendStatus(401);
};
