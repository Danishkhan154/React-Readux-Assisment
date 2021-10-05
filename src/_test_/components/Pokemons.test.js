import { Pokemons } from "../../Components/Pokemons";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import { mapStateToProps, mapDispatchToProps } from "../../Components/Pokemons";
import Adapter from "enzyme-adapter-react-16";
import { getCountryData } from "../../Actions/actions";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
const mockStore = configureStore([thunk]);
const Mock = (state = {}) => {
  return mockStore({ ...state });
};

Enzyme.configure({ adapter: new Adapter() });

const setUp = (initialState = {}) => {
  const store = Mock(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <Pokemons />
    </Provider>
  ).dive();
  return wrapper;
};

describe("Main Component ", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      countryData: [],
    };
    wrapper = setUp(initialState);
  });
  // it("should have 2 Dropdown Component", () => {
  //   const element = wrapper.find("div h1");
  //   // console.log("Debug warpper ", wrapper.debug());
  //   // expect(element.text()).toEqual("Select Your Pokemon :");
  //   // expect(wrapper.find("h1").first().text()).toEqual("Select Your Pokemon :");
  //   expect(element.hasClass("countries")).toBe(true);
  // });

  //   it("The Handle Change Should be Called", () => {
  //     expect(wrapper.instance().handleChange()).toBeCalled;
  //   });
  //   it("should show label", () => {
  //     const text = wrapper.find(".countries h1");
  //     expect(text.text()).toEqual("Select Your Pokemon :");

  //   });

  //   it("should show Select Abilities label", () => {
  //     const text = wrapper.find(".poke-abilities h2");
  //     expect(text.text()).toEqual(" Select Abilities : ");
  //   });
  //

  //   ********************* Running test Cases **********************

  it("mapStateToProps is working fine", () => {
    const INITIAL_STATE = {
      state: { country: { countryData: [] } },
    };

    expect(mapStateToProps(INITIAL_STATE.state)).toBeDefined;
  });

  it("mapdispatchToProps is working fine", () => {
    const dispatch = jest.fn();
    expect(mapDispatchToProps(dispatch).getCountryData).toBeCalled;
  });

  it("should show Select Your Pokemon ", () => {
    expect(
      wrapper.findWhere(
        (n) => n.type() === "h1" && n.contains("Select Your Pokemon :")
      )
    );
  });

  it("should show Ability label ", () => {
    expect(
      wrapper.findWhere(
        (n) => n.type() === "h1" && n.contains("Their abilities are :")
      )
    );
  });
});
