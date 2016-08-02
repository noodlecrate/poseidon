import { DTOs } from 'noodlecrate-poseidon-entities';

export interface IReviewManager {

    getAll(): Array<DTOs.ReviewDto>;
    create(review: DTOs.ReviewDto): DTOs.ReviewDto;
    getById(id: number): DTOs.ReviewDto;

}
