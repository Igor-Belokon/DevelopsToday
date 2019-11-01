import {
  GET_MESSAGE,
  UPDATE_MESSAGE,
  ADD_FULL_MESSAGE,
  GET_FULL_MESSAGE,
  successAction,
  failureAction
} from "../types";
const initialState = {
  data: []
};
export default function Cards(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_FULL_MESSAGE):
      return {
        data: action.data
      };
    case failureAction(GET_FULL_MESSAGE):
      return {
        ...state,
        error: action.error
      };

    case successAction(ADD_FULL_MESSAGE):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };

    default:
      return state;
  }
}
