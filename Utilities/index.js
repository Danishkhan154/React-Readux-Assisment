import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import countryReducer from "../src/Reducers/reducer";
import store from "../src/store";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...store)(createStore);
  return createStoreWithMiddleware(countryReducer, initialState);
};
