import { has } from "lodash";

export const actionTypes = {
  TOGGLE_LOADING_FILTERS: "TOGGLE_LOADING_FILTERS"
};

const INITIAL_STATE = {
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LOADING_FILTERS:
      return {
        ...state,
        loadingFilters: action.payload
      };
    default:
      return state;
  }
};

export const actions = {
  toggleLoadingFilters: payload => ({
    type: actionTypes.TOGGLE_LOADING_FILTERS,
    payload
  })
};
