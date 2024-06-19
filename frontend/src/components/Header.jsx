import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-orange-50 flex justify-between items-center px-5 border-b">
      <Link to="/" className="flex items-center ">
        <img src="/movieLogo.png" width={80} />
        <h2 className="font-bold text-orange-400 text-2xl max-sm:hidden">
          FİLMANİA
        </h2>
      </Link>

      <Link
        to="/create"
        className="border rounded-full py-1 px-5 hover:bg-orange-400 hover:text-yellow-50 transition"
      >
        Film Oluştur
      </Link>
    </header>
  );
};

export default Header;
