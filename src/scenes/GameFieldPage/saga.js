import { takeLatest } from "redux-saga/effects";
import { actionTypes } from "./ducks";

function* fetchProductsSaga(action) {
  try {
  } catch (e) {
    console.log("error", e);
  }
}

export default function* watchSaga() {
  yield takeLatest(actionTypes.TOGGLE_LOADING_FILTERS, fetchProductsSaga);
}
