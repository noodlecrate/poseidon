import { DTOs } from 'noodlecrate-poseidon-entities';

export interface IReviewManager {

    getAll(): Array<DTOs.ReviewDto>;
    create(review: DTOs.ReviewCreateDto): DTOs.ReviewDto;
    update(id: number, review: DTOs.ReviewCreateDto): DTOs.ReviewDto;
    getById(id: number): DTOs.ReviewDto;

}
