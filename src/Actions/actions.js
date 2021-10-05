import axios from "axios";
import { DROPDOWN_STATE } from "./types";

export const getCountryData =
  (value = "charmeleon") =>
  async (dispatch) => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((result) => {
        dispatch({ type: DROPDOWN_STATE, payload: result.data });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR_WHILE_FETCHING",
          // payload: {},
          payload: error,
        });
      });
  };
