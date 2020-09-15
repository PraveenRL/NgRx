import { Injectable } from "@angular/core";
import { of } from 'rxjs';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { IAppState } from '../state/app.state';
import { EUserActions, GetUser, GetUsers, GetUsersSuccess, GetUserSuccess } from '../actions/user.actions';
import { UserService } from 'src/app/pages/user/services/user.service';
import { SelectUserList } from '../selectors/user.selectors';
import { IUserHttp } from 'src/app/pages/user/models/user.interface';

@Injectable()
export class UserEffects {

    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store<IAppState>
    ) { }

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store.pipe(select(SelectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this.userService.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccess(userHttp.users)))
    );

}