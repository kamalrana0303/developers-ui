import { progressAction } from "@developers/models"
import { Action, createReducer, on } from "@ngrx/store"

export interface State{
    progresses:{ [id:string] :boolean} 
}

export const initialState:State={
    progresses: {}
}

export const progressReducer = createReducer(
    initialState,
    on(progressAction.showAction,(state, action)=>({...state, progresses: {[action.id]: true}})),
    on(progressAction.hideAction,  (state, action)=>({...state, progresses: {[action.id]:false}}))  
)

export function reducer (state: State, action: Action){
    return progressReducer(state, action);
}