import axios from "axios";
import { popularGamesURL } from "../api";

// Action Creator (use another arrow function)
export const loadGames = () => async (dispatch) => {
  // FETCH WITH AXIOS
  const popularGamesData = await axios.get(popularGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGamesData.data.results,
    },
  });
};
