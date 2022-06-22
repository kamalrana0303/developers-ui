import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProgressState } from "./progress.reducer";

export const selectProgress= createFeatureSelector<ProgressState>("progressState");

export const selectIsProgressing= createSelector(selectProgress, (state)=> state.report);
export const showProgress=(props:any)=>{

    return createSelector(selectIsProgressing, (state: { [x: string]: any; })=>{
     
        return state[props.progressId]
    } )
}