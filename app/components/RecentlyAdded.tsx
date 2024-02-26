import Image from "next/image";
import prisma from "../utils/db";
import { MovieCard } from "./MovieCard";

async function getMostRecentMovies() {
  const movies = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
      age: true,
      release: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return movies;
}

export default async function RecentlyAdded() {
  const movies = await getMostRecentMovies();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {movies.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt="movie"
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-bottom from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              <Image
                src={movie.imageString}
                alt="movie"
                width={500}
                height={400}
                className="rounded-lg absolute w-full h-full -z-10 object-cover"
              />
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                youtubeURL={movie.videoSource}
                isWatchList={movie.WatchLists.length > 0 ? true : false}
                year={movie.release}
                age={movie.age}
                time={movie.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
