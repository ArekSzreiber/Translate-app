import {createSelector} from '@ngrx/store';
import {TranslateState} from './translate.reducer';

export const selectTranslate =
  (state: { translate: TranslateState }) => state.translate;

// export const selectSource =
//   (state: { translate: { source: string, target: string } }) => state.translate.source;
export const selectSource = createSelector(
  selectTranslate,
  (state: TranslateState) => state.source,
);



export const selectTarget  = createSelector(
  selectTranslate,
  (state: TranslateState) => state.target,
);
