import { injectable } from 'inversify';

import { Models } from 'noodlecrate-poseidon-entities';
import { IBrandRepository } from './_namespace';

@injectable()
export class BrandRepository implements IBrandRepository {

    private _brands: Array<Models.BrandModel>;

    constructor () {
        this._brands = [];

        this._brands.push(<Models.BrandModel> {
            id: 1,
            name: 'Pot Noodle'
        });

        this._brands.push(<Models.BrandModel> {
            id: 2,
            name: 'James Richford\'s Food Co.'
        });
    }

    public getById(id: number): Models.BrandModel {
        return this._brands.filter(
            u => u.id === id
        )[0];
    }

}
