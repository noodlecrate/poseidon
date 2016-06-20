export interface IGetByIdRepository <TModel> {

    getById(id: number): TModel;

}
