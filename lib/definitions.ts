export type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export type Movies = {
  results: Movie[];
  total_pages: number;
};

export type SearchProps = {
  searchParams: {
    page: number;
  };
};

export type DetailsProps = {
  params: {
    id: string;
  };
};
