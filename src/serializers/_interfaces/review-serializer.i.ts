import { Models, DTOs } from 'noodlecrate-poseidon-entities';

export interface IReviewSerializer {

    serialize (model: Models.ReviewModel): DTOs.ReviewDto;

}
