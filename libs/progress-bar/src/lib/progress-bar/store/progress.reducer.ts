import { progressAction } from "@developers/models"
import { Action, createReducer, on } from "@ngrx/store"

export interface ProgressState{
    report:{ [id:string] :boolean} 
}

export const initialState:ProgressState={
    report: {}
}

export const progressReducer = createReducer(
    initialState,
    on(progressAction.showAction, (state, action)=> {
       
        return {
            ...state, report: {...state.report, [action.id]: true}
        }
    }),
    on(progressAction.hideAction,  (state, action)=>({...state, report: {...state.report,[action.id]:false}}))  
)

export function reducer (state: ProgressState | undefined, action: Action){
    return progressReducer(state, action);
}