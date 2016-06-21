import { IModel } from "../../models/models.namespace";

export interface IGetByIdRepository <TModel extends IModel> {

    getById(id: number): TModel;

}
