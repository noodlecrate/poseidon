import { DTOs } from 'noodlecrate-poseidon-entities';

export interface INoodleManager {

    getById(id: number): DTOs.NoodleDto;

}
