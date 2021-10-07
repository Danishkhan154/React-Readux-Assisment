import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import * as actions from "../../Actions/actions";
import DROPDOWN_STATE from "../../Actions/types";
import ERROR_WHILE_FETCHING from "../../Actions/types";
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();

describe("getCountry data in actions", () => {
  it("dispatches getCountryData after a successfull API requets", () => {
    mock.onGet("https://pokeapi.co/api/v2/pokemon/charmeleon").reply(200, {
      data: [{ name: "charmeleon" }],
    });
    store.dispatch(actions.getCountryData()).then(() => {
      let expectedActions = [
        {
          type: DROPDOWN_STATE,
          payload: { data: [{ name: "charmeleon" }] },
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatches ERROR_WHILE_FETCHING after a FAILED API requets", () => {
    mock
      .onGet("https://pokeapi.co/api/v2/pokemon/")
      .reply(400, { error: { message: "error message" } });
    store.dispatch(actions.getCountryData()).then(() => {
      let expectedActions = [
        {
          type: ERROR_WHILE_FETCHING,
          payload: error,
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
