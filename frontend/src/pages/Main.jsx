import React from "react";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const { data, error, isLoading } = useQuery("movies", () =>
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json(),
    ),
  );

  return <div>Main</div>;
};

export default Main;
