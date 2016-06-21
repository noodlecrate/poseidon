import { inject, injectable } from "inversify";

import { ReviewModel } from "../models/models.namespace";
import { ReviewDto } from "../dtos/dtos.namespace";
import { IReviewRepository } from "../repositories/repositories.namespace";
import { IReviewSerializer } from "../serializers/serializers.namespace";
import { IReviewManager } from "./managers.namespace";

@injectable()
export class ReviewManager implements IReviewManager {

    private _reviewRepository: IReviewRepository;
    private _reviewSerializer: IReviewSerializer;

    constructor (
        @inject("IReviewRepository") reviewRepository: IReviewRepository,
        @inject("IReviewSerializer") reviewSerializer: IReviewSerializer
    ) {
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
