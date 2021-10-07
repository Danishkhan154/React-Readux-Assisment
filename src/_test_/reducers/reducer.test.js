import countryReducer from "../../Reducers/reducer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import { DROPDOWN_STATE } from "../../Actions/types";
import { ERROR_WHILE_FETCHING } from "../../Actions/types";

describe("Reducer rendering", () => {
  it("Dispatches DROPDOWN_STATE when working", () => {
    const expected_data = { name: "pikachu" };
    const states = countryReducer(undefined, {
      type: DROPDOWN_STATE,
      payload: expected_data,
    });
    expect(states.countryData).toEqual(expected_data);
  });

  it("Dispatches ERROR_WHILE_FETCHING when not working", () => {
    const expected_data = [];
    const states = countryReducer(undefined, {
      type: ERROR_WHILE_FETCHING,
      payload: expected_data,
    });
    expect(states.countryData).toEqual(expected_data);
  });
});
