import axios from "axios";
import { Actiontypes } from "../actionTypes";

export const options = {
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGJlNDgwNjllMjJmODZmZDI5NDM2MDYyOWQ2YTIwZCIsInN1YiI6IjY1Mjk5ZWE5MGNiMzM1MTZmNzQ2YzQ1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QeYprGtUwEp0FFRquFouiwnRwwLulgDchB7LKvXq33U",
  },
};

axios.defaults.baseURL = "https://api.themoviedb.org/3";
export const getFilms = () => (dispatch) => {
  axios.get("/movie/popular", options).then((res) =>
    dispatch({
      type: Actiontypes.GET_FILMS,
      payload: res.data.results,
    })
  );
};

export const getGenres = () => (dispatch) => {
  axios.get("/genre/movie/list", options).then((res) =>
    dispatch({
      type: Actiontypes.GET_GENRES,
      payload: res.data.genres,
    })
  );
};
