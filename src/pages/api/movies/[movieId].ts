// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const movies = require("../../../movies.json");

type Data = {
  movie: string;
};

type NotFound = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | NotFound>
) {
  const { movieId } = req.query;

  const movie = movies.find((movie: { id: string }) => movie.id === movieId);

  if (!movie) {
    return res.status(404).json({ message: "Movie not found" });
  }

  res.status(200).json({ movie });
}
