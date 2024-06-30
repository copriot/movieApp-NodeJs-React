import React from "react";

const Hero = () => {
  return (
    <div className="text-yellow-400 max-h-[300px] p-10 py-20 lg:px-20 bg-[url('movie.jpg')] bg-cover bg-no-repeat">
      <h1 className="text-4xl md:text-5xl font-bold">Hoşgeldin...</h1>
      <h2 className="text-2xl md:text-3xl font-semibold">
        Milyonlarca Film, Dizi ve Aktörleri Keşfet.
      </h2>

      <div className="relative rounded-full flex mt-5 overflow-hidden">
        <input
          className="w-full p-2 px-4 text-black"
          type="text"
          placeholder="Film,Dizi ve Aktörleri Arayın..."
        />
        <button className="bg-yellow-400 w-20 text-white font-semibold hover:bg-yellow-600 transition end-0">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Hero;
