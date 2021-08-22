import { useEffect, useState } from "react";
import axios from "axios";
import { Show } from "../interfaces";

export default function useShows() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [shows, setShows] = useState<Array<Show>>([]);

  useEffect(() => {
    const getShows = async () => {
      const pageNumber = Math.floor(Math.random() * (20)) + 1;
      const url: string = `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${pageNumber}`;
      setIsLoading(true);
      setIsError(false);
      try {
        const { data } = await axios({
          url,
          method: "GET",
        });
        setShows((prevShows) => {
          return [...prevShows, ...data.results];
        });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    getShows();
  }, []);

  return {
    isLoading,
    isError,
    shows,
  };
}
