import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie, index }) => {
  // const placeholderImage = `https://picsum.photos/500/70${index}`;
  const r = +movie.rating;
  //console.log(r);
  const color = r > 9 ? "blue" : r > 7.5 ? "green" : r > 5 ? "orange" : "red";
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="border shadow p-3 rounded-md hover:bg-gray-200 cursor-pointer transition max-sm:flex max-sm:gap-5"
    >
      <div className="relative">
        <img
          className="rounded  w-[450px] h-[300px] object-fit max-sm:h-[150px] max-sm:w-[100px] object-cover"
          src={movie.image}
          alt="poster"
        />
        <span
          style={{ background: color }}
          className="absolute right-[-10px] bottom-[-10px] font-semibold text-white rounded-full p-1"
        >
          {movie.rating}
        </span>
      </div>
      <div>
        <h3 className="font-bold mt-4 text-2xl sm:text-lg text-amber-600 line-clamp-1">
          {movie.title}
        </h3>
        <div className="text-orange-500 flex gap-2">
          <p>{movie.year}</p>
          <p className="line-clamp-1">
            {movie.genre.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
