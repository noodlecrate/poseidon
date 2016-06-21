import { IModel } from "../../models/models.namespace";

export interface IGetAllRepository <TModel extends IModel> {

    getAll(): Array<TModel>;

}
