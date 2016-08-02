import { Models } from 'noodlecrate-poseidon-entities';

export interface ISaveRepository <TModel extends Models.IModel> {

    save(model: TModel): void;

}
