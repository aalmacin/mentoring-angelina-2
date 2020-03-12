import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  Action
} from "@ngrx/store";
import { environment } from "../../environments/environment";

export interface State {
  balance: number;
}

const balanceReducer = (state = 10, action: Action): number => {
  return state;
};

export const reducers: ActionReducerMap<State> = {
  balance: balanceReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
