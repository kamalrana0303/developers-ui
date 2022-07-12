import { Action, createReducer } from "@ngrx/store"

export interface HomeState{
    home: {}
}
export const initialState: HomeState ={
    home: {}
}

const homeReducer = createReducer(
    initialState,
)

export function homeReducerFn(state: HomeState | undefined, action: Action) {
    return homeReducer(state, action);
}