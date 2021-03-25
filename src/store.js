import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(contactReducer, composeWithDevTools());

export default store;
