import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../../api/axios";
import "./SearchPage.css"
import { useDebounce } from "../../hooks/useDebounce";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);

  const navigate = useNavigate(); 

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const dedouncedSearchTerm = useDebounce(query.get("q"))
  useEffect(() => {
    if (dedouncedSearchTerm) {
      fetchSearchMovie(dedouncedSearchTerm);
    }
  }, [dedouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await instance.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResult(response.data.results);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  if (searchResult.length > 0) {
    return (
      <section className="search-container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div onClick={() => navigate(`/${movie.id}`)}
                className="movie_column-poster">
                <img
                  src={movieImageUrl}
                  alt="movie"
                  className="movie_poster"
                ></img>

                </div>
              </div>
            );
          }
        })}
      </section>
    );
  } else {
    return (
      <section className="no-results">
        <div className="no-results_text">
          <p>찾고자하는 검색어 {searchTerm}이 없습니다.</p>
        </div>
      </section>
    );
  }
};

export default SearchPage;
