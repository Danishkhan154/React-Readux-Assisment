import countryReducer from "../Reducers/reducer";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    country: countryReducer,
  }),

  compose(applyMiddleware(thunk))
);

export default store;
