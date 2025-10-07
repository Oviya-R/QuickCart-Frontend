import React from "react";
import menCollectionImg from "../../assets/mens-collection.webp";
import womenCollectionImg from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className=" m-3 py-20 px-4 lg:px-0 bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        {/* Women's Collection */}
        <div className="relative flex-1 group overflow-hidden rounded-2xl shadow-sm">
          <img
            className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
            src={womenCollectionImg}
            alt="Women's Collections"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>

          <div className="absolute bottom-10 left-10 text-left transition-all duration-500 group-hover:translate-y-[-5px]">
            <h2 className="text-3xl font-semibold text-white drop-shadow-md mb-4">
              Women's Collection
            </h2>
            <Link
              to="/collection/all?gender=Women"
              className="relative inline-block bg-white text-gray-900 px-6 py-2 font-medium rounded-full shadow-md overflow-hidden group/button"
            >
              <span className="relative z-10 group-hover/button:text-white transition-colors duration-300">
                Shop Now
              </span>
              <span className="absolute inset-0 bg-gray-900 scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-500 rounded-full"></span>
            </Link>
          </div>
        </div>

        {/* Men's Collection */}
        <div className="relative flex-1 group overflow-hidden rounded-2xl shadow-sm">
          <img
            className="w-full h-[600px] object-cover transform transition-transform duration-700 group-hover:scale-105 group-hover:brightness-90"
            src={menCollectionImg}
            alt="Men's Collections"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500"></div>

          <div className="absolute bottom-10 left-10 text-left transition-all duration-500 group-hover:translate-y-[-5px]">
            <h2 className="text-3xl font-semibold text-white drop-shadow-md mb-4">
              Men's Collection
            </h2>
            <Link
              to="/collection/all?gender=Men"
              className="relative inline-block bg-white text-gray-900 px-6 py-2 font-medium rounded-full shadow-md overflow-hidden group/button"
            >
              <span className="relative z-10 group-hover/button:text-white transition-colors duration-300">
                Shop Now
              </span>
              <span className="absolute inset-0 bg-gray-900 scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-500 rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
