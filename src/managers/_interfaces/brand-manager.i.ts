import { DTOs } from 'noodlecrate-poseidon-entities';

export interface IBrandManager {

    getById(id: number): DTOs.BrandDto;

}
