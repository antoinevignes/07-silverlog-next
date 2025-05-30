const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_KEY}`,
  },
};

export async function fetchPopularMovies(page: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
}

export async function fetchTopMovies(page: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
}

export async function fetchUpcomingMovies(page: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
}

export async function fetchTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch movies");
  }
}

export async function fetchMovieById(id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchMovieCredits(id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot find movie");
  }
}

export async function fetchPeopleDetails(id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot find movie");
  }
}

export async function fetchPeopleMovies(id: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot find movie");
  }
}

export async function searchMovies(query: string, page: number) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Cannot find movie");
  }
}
