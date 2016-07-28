import { Strategy } from 'passport';
import { Handler as ExpressHandler } from 'express';
import { Models } from 'noodlecrate-poseidon-entities';

export interface IPassport {

    serializeUser(
        callback: (user: Models.UserModel, done: (error: Error, userId: number) => void) => void
    ): void;

    deserializeUser(
        callback: (userId: number, done: (error: Error, user: Models.UserModel) => void) => void
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
