import { DTOs } from 'noodlecrate-poseidon-entities';

export interface IReviewManager {

    getAll(): Array<DTOs.ReviewDto>;
    getById(id: number): DTOs.ReviewDto;

}
