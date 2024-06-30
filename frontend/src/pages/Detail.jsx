import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utilities/api";
import Loader from "../components/Loader";
import { FaTrashCan } from "react-icons/fa6";
import Error from "../components/Error";

const Detail = () => {
  // 1) url'de param olan film idsini al
  const { id } = useParams();

  // 2) api'dan film verilerini al
  const { data, error, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/movies/${id}`),
  });

  console.log(data);

  return (
    <div className="p-10">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <>
            <div>
              <div>
                <button>
                  <FaTrashCan />
                </button>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Detail;
