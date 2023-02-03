import { use } from "react";

async function getMovie(id: string) {
  let res = await fetch(`http://localhost:3000/api/movies/${id}`);
  return res.json();
}

export default function Page({ params }: { params: { id: string } }) {
  let { movie } = use(getMovie(params.id));

  return (
    <div>
      <p className="text-3xl">{movie.title}</p>
      <p className="mt-2">{movie.year}</p>
      <p className="mt-2">{movie.director}</p>
      <p className="mt-2">{movie.cast}</p>
    </div>
  );
}
