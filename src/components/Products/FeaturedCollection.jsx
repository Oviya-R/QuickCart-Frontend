import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.png";

const FeaturedCollection = () => {
  return (
    <section className="py-20 px-4 lg:px-0 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center overflow-hidden rounded-3xl shadow-md bg-white">
        {/* Left Section */}
        <div className="lg:w-1/2 p-10 lg:p-16 text-center lg:text-left">
          <h3 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">
            Comfort & Style
          </h3>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-snug">
            Effortless Fashion for Every Moment
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Discover outfits designed to move with you — elegant, versatile, and 
            crafted for your everyday confidence. Redefine comfort with timeless style.
          </p>

          <Link
            to="/collection/all"
            className="inline-block bg-gray-900 text-white text-lg px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:shadow-md"
          >
            Explore Collection
          </Link>
        </div>

        {/* Right Section (Image) */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-[500px] object-cover lg:rounded-l-none rounded-t-3xl lg:rounded-tr-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
