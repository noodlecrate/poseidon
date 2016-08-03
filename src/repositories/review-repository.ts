import { inject, injectable } from 'inversify';

import { Models } from 'noodlecrate-poseidon-entities';
import { IReviewRepository, IUserRepository } from './_namespace';

@injectable()
export class ReviewRepository implements IReviewRepository {

    private _userRepository: IUserRepository;
    private _reviews: Array<Models.ReviewModel>;

    constructor (
        @inject('IUserRepository') userRepository: IUserRepository
    ) {
        this._userRepository = userRepository;

        this._reviews = [];

        this._createReview(1, 'Great noodles, top class.',
                    'These really have to be among some of the best noodles I\'ve ever tasted. Their noodliness was as noodly as it gets.',
                    'https://i.ytimg.com/vi/XutaTTNihe0/hqdefault.jpg');

        this._createReview(2, 'Not a fan', 'noodles were too spicy for my tongue',
                    'http://i.dailymail.co.uk/i/pix/2014/09/03/article-2740204-1C5E561F00000578-366_634x626.jpg');

        this._createReview(3, 'They were alright, I suppose...',
                    'They weren\'t the best, but they weren\'t the worst. Food\'s food, I guess.',
                    'http://i798.photobucket.com/albums/yy262/expressionofmyemotions/tumblr_lrud0coRjU1qhsw0o.gif');
    }

    private _createReview(authorId: number, title: string, body: string, imageUrl: string) {
        let author = this._userRepository.getById(authorId);

        let review = author.createReview({
            authorId: authorId,
            title: title,
            body: body,
            imageUrl: imageUrl
        });

        review.id = this._reviews.length + 1;

        this._reviews.push(review);
    }

    public getAll(): Array<Models.ReviewModel> {
        return this._reviews;
    }

    public getById(id: number): Models.ReviewModel {
        return this._reviews.filter(
            r => r.id === id
        )[0];
    }

    public save(model: Models.ReviewModel): void {
        if (model.id === undefined) {
            // if there is no ID, we need to insert it

            model.id = this._getHighestId() + 1;
            this._reviews.push(model);
        } else {
            // otherwise there is nothing we need to do for now
        }
    }

    private _getHighestId(): number {
        let clonedReviews = this._reviews.slice();
        clonedReviews.sort((a, b) => b.id - a.id);
        return clonedReviews[0].id;
    }

}
