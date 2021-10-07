import { shallow } from "enzyme";
import DropDown from "../../Components/DropDown";
import { getCountryData } from "../../Actions/actions";

describe("passing props", () => {
  const props = {
    abilities: [
      {
        ability: {
          name: "charmeleon",
        },
      },

      {
        ability: {
          name: "charizard",
        },
      },

      {
        ability: {
          name: "squirtle",
        },
      },

      {
        ability: {
          name: "wartortle",
        },
      },
    ],
  };

  it("should call getCountryData Function", () => {
    const wrapper = shallow(
      <DropDown data={props} getCountryData={getCountryData} />
    );
    expect(
      wrapper.find(`select`).simulate("change", {
        preventDefault: (fn) => fn,
        target: { name: "charmeleon" },
      })
    );
    expect(wrapper.find("getCountryData")).toBeCalled;
  });
});
