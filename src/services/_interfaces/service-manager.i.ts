/// <reference path="../../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";

export interface IServiceManager {

    registerRoutes (app: Express): void;

}
