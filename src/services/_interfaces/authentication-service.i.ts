/// <reference path="../../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";

export interface IAuthenticationService {

    registerRoutes (app: Express): void;

}
