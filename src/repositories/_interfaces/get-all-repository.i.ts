import { IModel } from '../../models/_namespace';

export interface IGetAllRepository <TModel extends IModel> {

    getAll(): Array<TModel>;

}
