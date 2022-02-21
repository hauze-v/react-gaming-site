require("dotenv").config();

// API KEY
const api_key = process.env.REACT_APP_KEY;
const api_url = `?key=${api_key}`;
console.log(api_key);
console.log(api_url);

// Base URL
const base_url = "https://api.rawg.io/api";

// Getting the current date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `/games${api_url}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcoming Games
const upcoming_games = `/games${api_url}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New Games
const new_games = `/games${api_url}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
// Game Details & Screenshots
export const gameDetailsURL = (gameID) => `${base_url}/games/${gameID}${api_url}`;
export const gameScreenshotsURL = (gameID) =>
  `${base_url}/games/${gameID}/screenshots${api_url}`;
// Searched Gamed
export const searchGameURL = (game_name) =>
  `${base_url}/games${api_url}&search=${game_name}`;
