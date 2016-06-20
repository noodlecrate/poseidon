import { ReviewModel } from "../models/review-model";
import { ReviewRepository } from "../repositories/review-repository";

export class ReviewManager {

    private _reviewRepository: ReviewRepository;

    constructor (reviewRepository: ReviewRepository) {
        this._reviewRepository = reviewRepository;
    }

}
