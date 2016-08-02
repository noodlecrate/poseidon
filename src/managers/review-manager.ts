import { inject, injectable } from 'inversify';

import { DTOs, Models } from 'noodlecrate-poseidon-entities';
import { IReviewRepository } from '../repositories/_namespace';
import { IReviewSerializer } from '../serializers/_namespace';
import { IReviewManager, IUserManager } from './_namespace';

@injectable()
export class ReviewManager implements IReviewManager {

    private _reviewRepository: IReviewRepository;
    private _reviewSerializer: IReviewSerializer;
    private _userManager: IUserManager;

    constructor (
        @inject('IReviewRepository') reviewRepository: IReviewRepository,
        @inject('IReviewSerializer') reviewSerializer: IReviewSerializer,
        @inject('IUserManager') userManager: IUserManager
    ) {
        this._reviewRepository = reviewRepository;
        this._reviewSerializer = reviewSerializer;
        this._userManager = userManager;
    }

    public getAll(): Array<DTOs.ReviewDto> {
        let serialized: Array<DTOs.ReviewDto> = [];

        this._reviewRepository.getAll().forEach(
            r => serialized.push(this._reviewSerializer.serialize(r))
        );

        return serialized;
    }

    public create(review: DTOs.ReviewCreateDto): DTOs.ReviewDto {
        let model = <Models.ReviewModel> {
            id: undefined,
            author: this._userManager.getModelById(review.authorId),
            title: review.title,
            body: review.body,
            imageUrl: review.imageUrl
        };

        this._reviewRepository.save(model);

        return this._reviewSerializer.serialize(model);
    }

    public getById(id: number): DTOs.ReviewDto {
        let model = this._reviewRepository.getById(id);

        return this._reviewSerializer.serialize(model);
    }

}
