import { IConfig } from 'src/app/pages/user/models/user.interface';

export interface IConfigState {
    config: IConfig
}

export const initialConfigState: IConfigState = {
    config: null
}