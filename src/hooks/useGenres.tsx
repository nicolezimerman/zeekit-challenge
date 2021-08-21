import { useEffect, useState } from "react";
import axios from "axios";
import { Genre } from "../interfaces";

export default function useGenres() {
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getGenres = async () => {
      const url: string = `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_APIKEY}&language=en-US`;
      try {
        const { data } = await axios({
          url,
          method: "GET",
        });
        setGenres((prevGenres) => {
          return [...prevGenres, ...data.genres];
        });
      } catch (err) {
        setIsError(true);
      }
    };
    getGenres();
  }, []);

  const getGenresFromTV = (ids: Array<number>) => {
    const result = genres
      .filter((g: Genre) => ids.find((id) => id === g.id))
      .map((g) => {
        return g.name;
      });
    return result.join(", ");
  };

  return {
    isError,
    genres,
    getGenresFromTV,
  };
}
