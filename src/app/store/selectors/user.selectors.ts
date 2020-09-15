import { createSelector } from '@ngrx/store';

import { IAppState } from "../state/app.state";
import { IUserState } from '../state/user.state';

const userState = (state: IAppState) => state.users;

export const SelectUserList = createSelector(
    userState,
    (state: IUserState) => state.users
);

export const SelectSelectedUser = createSelector(
    userState,
    (state: IUserState) => state.selectedUser
);