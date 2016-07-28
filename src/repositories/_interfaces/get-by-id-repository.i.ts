import { Models } from 'noodlecrate-poseidon-entities';

export interface IGetByIdRepository <TModel extends Models.IModel> {

    getById(id: number): TModel;

}
