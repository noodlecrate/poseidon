import { inject } from "inversify";

import { ReviewModel } from "../models/review-model";
import { ReviewDto } from "../dtos/review-dto";

import { IReviewRepository } from "../repositories/repositories.namespace";
import { IReviewSerializer } from "../serializers/serializers.namespace";
import { IReviewManager } from "./_interfaces/review-manager.i";

@inject("IReviewRepository", "IReviewSerializer")
export class ReviewManager implements IReviewManager {

    private _reviewRepository: IReviewRepository;
    private _reviewSerializer: IReviewSerializer;

    constructor (reviewRepository: IReviewRepository, reviewSerializer: IReviewSerializer) {
        this._reviewRepository = reviewRepository;
        this._reviewSerializer = reviewSerializer;
    }

    public getAll(): Array<ReviewDto> {
        let serialized: Array<ReviewDto> = [];

        this._reviewRepository.getAll().forEach(
            r => serialized.push(this._reviewSerializer.serialize(r))
        );

        return serialized;
    }

    public getById(id: number): ReviewDto {
        let model = this._reviewRepository.getById(id);

        return this._reviewSerializer.serialize(model);
    }

}
