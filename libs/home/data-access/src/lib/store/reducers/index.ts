import { ActionReducerMap } from "@ngrx/store"
import { HomeState , homeReducerFn} from "./home.reducer"

export const FEATURE_HOME = "home"
export interface State {
    _home: HomeState
}
export const reducers : ActionReducerMap<State> = {
    _home: homeReducerFn
}