import { IModel } from "../../models/_namespace";

export interface IGetByIdRepository <TModel extends IModel> {

    getById(id: number): TModel;

}
