import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../utilities/api";
import Loader from "../components/Loader";
import {
  FaTrashCan,
  FaHeartCrack,
  FaBookmark,
  FaStar,
  FaFilm,
} from "react-icons/fa6";
import Error from "../components/Error";

const Detail = () => {
  // 1) URL'deki parametre olan film idsini al
  const { id } = useParams();

  // 2) API'dan film verilerini al
  const { data, error, isLoading } = useQuery({
    queryKey: ["movie", id],
    queryFn: () => api.get(`/movies/${id}`).then((res) => res.data),
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
          <div>
            <div className="flex flex-col gap-5 bg-orange-100 p-10 rounded-md">
              <div className="flex justify-end">
                <button className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700">
                  <FaTrashCan />
                </button>
              </div>

              <div className="flex flex-col gap-10 items-center md:flex-row">
                <div>
                  <img
                    className="rounded-lg"
                    src={data.image}
                    alt={data.title}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-2xl font-bold text-rose-600">
                    {data.title}
                  </h1>
                  <p className="text-green-500 font-semibold">
                    Yıl: {data.year}
                  </p>
                  <p className="text-blue-700 rounded-full font-semibold ">
                    Kullanıcı Puanı: {data.rating}
                  </p>
                  <p className="text-yellow-700 font-semibold">
                    Kategoriler: {data.genre.join("-")}
                  </p>

                  <div className="flex gap-7">
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-500 transition hover:text-red-500">
                      <FaHeartCrack />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-500 transition hover:text-green-400">
                      <FaBookmark />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-500 transition hover:text-yellow-500">
                      <FaStar />
                    </button>
                    <button className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-500 transition hover:text-blue-700">
                      <FaFilm />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Detail;
