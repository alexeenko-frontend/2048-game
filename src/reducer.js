import { combineReducers } from "redux";
import { all } from "redux-saga/effects";

import features from "features";

console.log(features);

export const rootReducers = combineReducers({
  gamefield: features.gamefield.reducer
});

export const rootSagas = function* rootSaga() {
  yield all([features.gamefield.saga()]);
};
