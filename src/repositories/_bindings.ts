/// <reference path='../../node_modules/inversify-dts/inversify/inversify.d.ts' />

import * as Inversify from 'inversify';

import {
    IUserRepository, UserRepository,
    IReviewRepository, ReviewRepository,
    INoodleRepository, NoodleRepository,
    IBrandRepository, BrandRepository
} from './_namespace';

// tslint:disable-next-line:no-default-export
export default function (kernel: Inversify.interfaces.Kernel): void {
    kernel.bind<IUserRepository>('IUserRepository').to(UserRepository);
    kernel.bind<IReviewRepository>('IReviewRepository').to(ReviewRepository);
    kernel.bind<INoodleRepository>('INoodleRepository').to(NoodleRepository);
    kernel.bind<IBrandRepository>('IBrandRepository').to(BrandRepository);
}
