import { inject, injectable } from "inversify";

import { ReviewModel } from "../models/_namespace";
import { ReviewDto } from "../dtos/_namespace";
import { IReviewRepository } from "../repositories/_namespace";
import { IReviewSerializer } from "../serializers/_namespace";
import { IReviewManager } from "./_namespace";

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
