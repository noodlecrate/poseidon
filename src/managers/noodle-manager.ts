import { inject, injectable } from 'inversify';

import { DTOs } from 'noodlecrate-poseidon-entities';
import { INoodleRepository } from '../repositories/_namespace';
import { INoodleSerializer } from '../serializers/_namespace';
import { INoodleManager } from './_namespace';

@injectable()
export class NoodleManager implements INoodleManager {

    private _noodleRepository: INoodleRepository;
    private _noodleSerializer: INoodleSerializer;

    constructor (
        @inject('INoodleRepository') noodleRepository: INoodleRepository,
        @inject('INoodleSerializer') noodleSerializer: INoodleSerializer
    ) {
        this._noodleRepository = noodleRepository;
        this._noodleSerializer = noodleSerializer;
    }

    public getById(id: number): DTOs.NoodleDto {
        let model = this._noodleRepository.getById(id);

        return this._noodleSerializer.serialize(model);
    }

}
