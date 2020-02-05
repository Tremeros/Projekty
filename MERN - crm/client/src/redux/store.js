import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import contacts from "./reducers";


const store = createStore(
  contacts,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
