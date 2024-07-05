import React from "react";
import InputField from "../components/InputField";
import { inputs } from "../utilities/constants";
import axios from "axios";
import api from "../utilities/api";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    //sayfa yenilemeyi engelle
    e.preventDefault();

    //inputlardaki verileri al(nesne şeklinde)
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());

    //kategorileri diziye cevir
    data.genre = data.genre.split(",");
    console.log(data);
    //apiye film olusturma istegi at
    api
      .post("/movies", data)
      .then(() => {
        console.log("başarılı oldu");
        navigate("/");
      })
      .catch((err) => {
        alert("Hata oluştu");
        console.log(err, "hata oluştu");
      });
  };
  return (
    <div>
      <div className="bg-yellow-200 min-h-screen grid place-items-center py-8">
        <div className="bg-gray-100 max-w-[1000px] p-10 rounded shadow-lg grid grid-cols-1 sm:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <h1 className="text-4xl font-bold mb-10">Yeni Film Oluştur</h1>
            {inputs.map((props) => (
              <InputField key={props.name} {...props} />
            ))}

            <button className="bg-orange-100 p-1 rounded hover:bg-orange-400 hover:text-white font-semibold transition">
              Oluştur
            </button>
          </form>
          <div className="flex items-center justify-center">
            <img
              className="rounded-full max-h-[300px]"
              src="/movie-bg.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
