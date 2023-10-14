import Hero from "../components/Hero";
import MovieCategories from "../components/MovieCategories";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilms, getGenres } from "../app/actions/movieAction";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);
  console.log(state.genres);
  useEffect(() => {
    dispatch(getFilms());
    dispatch(getGenres());
  }, []);
  return (
    <div className="bg-dark text-white">
      <Hero />
      {state.genres.slice(0, 6).map((genre) => (
        <MovieCategories
          key={genre.id}
          title={genre.name}
          fetchUrl={`/discover/movie?with_genres=${genre.id}`}
        />
      ))}
    </div>
  );
};

export default MainPage;
