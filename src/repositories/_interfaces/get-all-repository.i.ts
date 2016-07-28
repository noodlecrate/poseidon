import { Models } from 'noodlecrate-poseidon-entities';

export interface IGetAllRepository <TModel extends Models.IModel> {

    getAll(): Array<TModel>;

}
