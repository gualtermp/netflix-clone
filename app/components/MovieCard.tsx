"use client";

import { Button } from "@/components/ui/button";
import { HeartIcon, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";

type MovieCard = {
  title: string;
  overview: string;
  movieId: number;
  isWatchList: boolean;
  watchListId: string;
  youtubeURL: string;
  year: number;
  age: number;
  time: number;
};

export function MovieCard({
  title,
  overview,
  movieId,
  isWatchList,
  watchListId,
  youtubeURL,
  year,
  age,
  time,
}: MovieCard) {
  const [state, changeState] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => changeState(true)} className="-mt-14">
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {isWatchList ? (
          <form>
            <Button variant="outline" size="icon">
              <HeartIcon className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <HeartIcon className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1"> {title} </h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm"> {year} </p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm"> {time}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
      <PlayVideoModal
        youtubeURL={youtubeURL}
        key={movieId}
        title={title}
        overview={overview}
        state={state}
        changeState={changeState}
      />
    </>
  );
}
