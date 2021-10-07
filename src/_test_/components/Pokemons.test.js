import { Pokemons } from "../../Components/Pokemons";
import DropDown from "../../Components/DropDown";
import { Provider } from "react-redux";
import Enzyme, { shallow } from "enzyme";
import React from "react";
import { mapStateToProps, mapDispatchToProps } from "../../Components/Pokemons";
import Adapter from "enzyme-adapter-react-16";
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
  );
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

  it("mapStateToProps is working fine", () => {
    const INITIAL_STATE = {
      state: { country: { countryData: [] } },
    };
    expect(mapStateToProps(INITIAL_STATE.state)).toEqual({ countriesData: [] });
  });

  it(" mapdispatchToProps is working fine", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).getCountryData();
    expect(dispatch.mock.calls[0][0]).toBeCalled;
  });

  it("should render <Dropdown /> Component", () => {
    const defaultProps = {
      abilities: [
        {
          ability: {
            name: "charmeleon",
          },
        },
      ],
    };
    const wrapper = shallow(<DropDown data={defaultProps} />);
    expect(wrapper.find(".DropDown").length).toEqual(0);
  });
});
