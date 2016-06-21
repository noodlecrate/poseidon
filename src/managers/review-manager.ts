import { ReviewModel } from "../models/review-model";
import { ReviewDto } from "../dtos/review-dto";
import { ReviewRepository } from "../repositories/review-repository";
import { ReviewSerializer } from "../serializers/review-serializer";

export class ReviewManager {

    private _reviewRepository: ReviewRepository;
    private _reviewSerializer: ReviewSerializer;

    constructor (reviewRepository: ReviewRepository, reviewSerializer: ReviewSerializer) {
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
