/// <reference path='../../node_modules/inversify-dts/inversify/inversify.d.ts' />

import * as Inversify from 'inversify';

import {
    IAuthenticationManager, AuthenticationManager,
    IReviewManager, ReviewManager,
    IUserManager, UserManager,
    INoodleManager, NoodleManager,
    IBrandManager, BrandManager
} from './_namespace';

// tslint:disable-next-line:no-default-export
export default function (kernel: Inversify.interfaces.Kernel): void {
    kernel.bind<IAuthenticationManager>('IAuthenticationManager').to(AuthenticationManager);
    kernel.bind<IReviewManager>('IReviewManager').to(ReviewManager);
    kernel.bind<IUserManager>('IUserManager').to(UserManager);
    kernel.bind<INoodleManager>('INoodleManager').to(NoodleManager);
    kernel.bind<IBrandManager>('IBrandManager').to(BrandManager);
}
