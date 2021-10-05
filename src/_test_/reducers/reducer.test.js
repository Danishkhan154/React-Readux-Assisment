import countryReducer from "../../Reducers/reducer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });
import { DROPDOWN_STATE } from "../../Actions/types";

describe("Reducer rendering", () => {
  it("Reducer Working", () => {
    const expected_data = { name: "pikachu" };
    const states = countryReducer(undefined, {
      type: DROPDOWN_STATE,
      payload: expected_data,
    });
    expect(states.countryData).toEqual(expected_data);
  });

  it("handles Error", () => {
    const expected_data = [];
    const states = countryReducer(undefined, {
      type: "ERROR_WHILE_FETCHING",
      payload: expected_data,
    });
    expect(states.countryData).toEqual(expected_data);
  });
});
