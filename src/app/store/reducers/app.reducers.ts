import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { ConfigReducers } from './config.reducers';
import { UserReducers } from './user.reducers';

export const AppReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: UserReducers,
    config: ConfigReducers
}