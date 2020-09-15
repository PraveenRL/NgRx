import { IUser } from 'src/app/pages/user/models/user.interface';

export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}

export const initialUserState: IUserState = {
    users: null,
    selectedUser: null
}