import Link from "next/link";
import { use } from "react";
import { Movies } from "../types";

async function getMovies() {
  let res = await fetch("http://localhost:3000/api/movies");
  return res.json();
}

export default function Layout({ children }: React.PropsWithChildren) {
  let { movies }: Movies = use(getMovies());
  return (
    <div className="flex">
      <ul className="pr-10 text-sm flex-none">
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <div>{children}</div>
    </div>
  );
}
