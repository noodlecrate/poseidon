/// <reference path="../../../typings/index.d.ts"/>

import { Express } from "express-serve-static-core";

export interface IReviewService {

    registerRoutes (app: Express): void;

}
