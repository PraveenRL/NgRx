import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IConfig } from 'src/app/pages/user/models/user.interface';
import { ConfigService } from 'src/app/pages/user/services/config.service';
import { EConfigActions, GetConfig, GetConfigSuccess } from '../actions/config.actions';

@Injectable()
export class ConfigEffects {

    constructor(
        private configService: ConfigService,
        private actions$: Actions
    ) { }

    @Effect()
    getConfig$ = this.actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this.configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        })
    );

}