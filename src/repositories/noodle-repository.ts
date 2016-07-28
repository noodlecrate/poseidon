import { injectable } from 'inversify';

import { Models } from 'noodlecrate-poseidon-entities';
import { INoodleRepository } from './_namespace';

@injectable()
export class NoodleRepository implements INoodleRepository {

    private _noodles: Array<Models.NoodleModel>;

    constructor () {
        this._noodles = [];

        this._noodles.push(<Models.NoodleModel> {
            id: 1,
            name: 'Pot Noodle'
        });

        this._noodles.push(<Models.NoodleModel> {
            id: 2,
            name: 'James Richford\'s Spicy Noodles'
        });
    }

    public getById(id: number): Models.NoodleModel {
        return this._noodles.filter(
            u => u.id === id
        )[0];
    }

}
