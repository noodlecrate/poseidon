import { inject, injectable } from 'inversify';

import { IReviewRepository, IUserRepository } from './_namespace';
import { ReviewModel } from '../models/_namespace';

@injectable()
export class ReviewRepository implements IReviewRepository {

    private _userRepository: IUserRepository;
    private _reviews: Array<ReviewModel>;

    constructor (
        @inject('IUserRepository') userRepository: IUserRepository
    ) {
        this._userRepository = userRepository;

        this._reviews = [];

        this._reviews.push(<ReviewModel> {
            id: 1,
            author: this._userRepository.getById(1),
            title: 'Great noodles, top class.',
            body: 'These really have to be among some of the best noodles I\'ve ever tasted. Their noodliness was as noodly as it gets.',
            imageUrl: 'https://i.ytimg.com/vi/XutaTTNihe0/hqdefault.jpg'
        });

        this._reviews.push(<ReviewModel> {
            id: 2,
            author: this._userRepository.getById(2),
            title: 'Not a fan',
            body: 'noodles were too spicy for my tongue',
            imageUrl: 'http://i.dailymail.co.uk/i/pix/2014/09/03/article-2740204-1C5E561F00000578-366_634x626.jpg'
        });

        this._reviews.push(<ReviewModel> {
            id: 3,
            author: this._userRepository.getById(3),
            title: 'They were alright, I suppose...',
            body: 'They weren\'t the best, but they weren\'t the worst. Food\'s food, I guess.',
            imageUrl: 'http://i798.photobucket.com/albums/yy262/expressionofmyemotions/tumblr_lrud0coRjU1qhsw0o.gif'
        });
    }

    public getAll(): Array<ReviewModel> {
        return this._reviews;
    }

    public getById(id: number): ReviewModel {
        return this._reviews.filter(
            r => r.id === id
        )[0];
    }

}
