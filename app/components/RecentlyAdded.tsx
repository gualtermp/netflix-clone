import Image from "next/image";
import prisma from "../utils/db";

async function getMostRecentMovies() {
  const movies = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
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
            className="rounded-sm absolute w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}
