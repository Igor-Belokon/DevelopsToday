import {
  GET_MESSAGE,
  ADD_COMENT,
  UPDATE_MESSAGE,
  UPDATE_COMENT,
  ADD_MESSAGE,
  GET_FULL_MESSAGE,
  successAction,
  failureAction
} from "../types";
export function loadMessage() {
  return dispatch =>
    fetch("https://simple-blog-api.crew.red/posts") // Redux Thunk handles these
      .then(res => res.json())

      .then(data => dispatch({ type: successAction(GET_MESSAGE), data }))
      .catch(err => dispatch({ type: failureAction(GET_MESSAGE), err }));
}
export function loadFullMessage(id) {
  return dispatch =>
    fetch("https://simple-blog-api.crew.red/posts/" + id + "?_embed=comments") // Redux Thunk handles these
      .then(res => res.json())

      .then(data => dispatch({ type: successAction(GET_FULL_MESSAGE), data }))
      .catch(err => dispatch({ type: failureAction(GET_FULL_MESSAGE), err }));
}
