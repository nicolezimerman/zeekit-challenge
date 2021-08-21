export interface Show {
  backdrop_path: string;
  first_air_date: Date;
  genre_ids: Array<number>;
  id: number;
  name: string;
  origin_country: Array<string>;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}
