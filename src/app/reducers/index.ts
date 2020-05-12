import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createAction,
  on,
  createReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export const toggleSomething = createAction('[App] Toggle Something');
export const selectFeature = (state: State) => state.app;
export const getIsLoading = createSelector(selectFeature, state => state.isLoading)

export interface State {
  app: AppState
}

export interface AppState {
  isLoading?: boolean;

}

const initialState: AppState = { isLoading: false }

export const reducer = createReducer(
  initialState,
  on(toggleSomething, state => ({ ...state, isLoading: !state.isLoading }))
)

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
