import { Strategy } from 'passport';
import { Handler as ExpressHandler } from 'express';

import { UserModel } from '../../models/_namespace';

export interface IPassport {

    serializeUser(
        callback: (user: UserModel, done: (error: Error, userId: number) => void) => void
    ): void;

    deserializeUser(
        callback: (userId: number, done: (error: Error, user: UserModel) => void) => void
    ): void;

    use(
        name: string,
        strategy: Strategy
    ): void;

    authenticate(
        strategy: string,
        callback: Function
    ): ExpressHandler;

}
