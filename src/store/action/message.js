import {
  GET_MESSAGE,
  ADD_COMENT,
  UPDATE_MESSAGE,
  UPDATE_COMENT,
  ADD_MESSAGE,
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

export function postMessage(card) {
  return dispatch =>
    fetch("https://simple-blog-api.crew.red/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }) // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(ADD_MESSAGE), data }))
      .catch(err => dispatch({ type: failureAction(ADD_MESSAGE), err }));
}
export function putMessage(card, cardId) {
  return dispatch =>
    fetch("http://localhost:8089/api/card/" + card.id, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }) // Redux Thunk handles these
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: successAction(UPDATE_CARDS),
          data,
          insertAfter: cardId
        })
      )
      .catch(err => dispatch({ type: failureAction(UPDATE_CARDS), err }));
}

//
