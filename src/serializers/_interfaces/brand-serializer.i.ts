import { Models, DTOs } from 'noodlecrate-poseidon-entities';

export interface IBrandSerializer {

    serialize (model: Models.BrandModel): DTOs.BrandDto;

}
