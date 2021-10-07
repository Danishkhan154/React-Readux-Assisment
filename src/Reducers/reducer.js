import { DROPDOWN_STATE } from "../Actions/types";
import { ERROR_WHILE_FETCHING } from "../Actions/types";

const initialState = {
  countryData: [],
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROPDOWN_STATE:
      let newState = { ...state };
      newState.countryData = action.payload;
      return newState;
    case ERROR_WHILE_FETCHING:
      return {
        ...state,
        data: false,
      };
    default:
      return state;
  }
};

export default countryReducer;
