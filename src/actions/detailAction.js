import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

// Create action
export const loadDetail = (id) => async (dispatch) => {
  // Redux trick for loading data
  dispatch({
    type: "LOADING_DETAIL",
  });

  // Fetch data
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameScreenshotsURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotData.data,
    },
  });
};
