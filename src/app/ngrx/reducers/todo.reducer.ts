import { TodoActionTypes } from '../shared/enum/todo-action-types.enum';
import { ActionParent } from '../actions/todo.actions';
import { Todo } from '../models/todo';

export const initialState: Todo[] = [
    { title: "Todo 1" },
    { title: "Todo 2" },
    { title: "Todo 3" },
    { title: "Todo 4" },
]

export function TodoReducer(state = initialState, action: ActionParent) {
    switch (action.type) {
        case TodoActionTypes.Add:
            return [...state, action.payload];
        case TodoActionTypes.Remove:
            [...state.splice(action.payload, 1)];
            return [...state];
        default:
            return state;
    }
}