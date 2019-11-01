import {
  GET_MESSAGE,
  ADD_COMENT,
  UPDATE_MESSAGE,
  UPDATE_COMENT,
  ADD_MESSAGE,
  successAction,
  failureAction
} from "../types";
const initialState = {
  data: []
};
export default function Cards(state = initialState, action) {
  switch (action.type) {
    case successAction(GET_MESSAGE):
      return {
        data: action.data
      };
    case failureAction(GET_MESSAGE):
      return {
        ...state,
        error: action.error
      };

    case successAction(ADD_MESSAGE):
      console.log(action);
      return {
        ...state,
        data: [...state.data, action.data]
      };

    default:
      return state;
  }
}
