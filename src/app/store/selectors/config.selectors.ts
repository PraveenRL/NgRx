import { createSelector } from '@ngrx/store';

import { IAppState } from "../state/app.state";
import { IConfigState } from '../state/config.state';

const configState = (state: IAppState) => state.config;

export const SelectConfig = createSelector(
    configState,
    (state: IConfigState) => state.config
);