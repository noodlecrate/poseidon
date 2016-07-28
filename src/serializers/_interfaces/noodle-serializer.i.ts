import { Models, DTOs } from 'noodlecrate-poseidon-entities';

export interface INoodleSerializer {

    serialize (model: Models.NoodleModel): DTOs.NoodleDto;

}
