export interface Movie {
  id: string;
  title: string;
  year: number;
  director: string;
  description: string;
  image: string;
  cast: string[];
}

export interface Movies {
  movies: Movie[];
}
