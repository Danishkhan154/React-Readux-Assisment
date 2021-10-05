import { shallow } from "enzyme";
import App from "../../App";

describe("rendering App component properly", () => {
  const props = {
    List: [
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
  it("<App /> component will render", () => {
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.find(".main-component").exists()).toBe(false);
  });
});
