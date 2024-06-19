import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../utilities/api";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Card from "../components/Card";

const Main = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("/movies").then((res) => res.data),
  });

  return (
    <div>
      <Hero />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          {data.movies.map((movie, key) => (
            <Card movie={movie} key={key} index={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
