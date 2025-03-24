export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  runtime: number;
  budget: number;
  genres: { id: number; name: string }[];
  origin_country: [];
  release_date: string;
};

export type Movies = {
  results: Movie[];
};

export type Credits = {
  cast: { name: string }[];
  crew: { name: string }[];
};
