import React from "react";
import { useQuery } from "@tanstack/react-query";

const Main = () => {
  const { data, error, isLoading } = useQuery("movies", () =>
    api.get("/todo").then((res) => res.data),
  );

  return <div>Main</div>;
};

export default Main;
