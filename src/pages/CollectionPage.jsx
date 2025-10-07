import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSideBar from "../components/Products/FilterSideBar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slice/productSlice";

const CollectionPage = () => {
  const { Collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const queryParams = Object.fromEntries([...searchParams]);

  const sideBarRef = useRef(null);
  const [isSideBarOpen, setIsSeideBarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByFilters({ Collection, ...queryParams }));
  }, [dispatch, Collection, searchParams]);

  const toggleSideBar = () => {
    setIsSeideBarOpen(!isSideBarOpen);
  };

  const handleClickOutside = (e) => {
    if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
      setIsSeideBarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:flex-grow">
      {/* Mobile Filter */}
      <button
        onClick={toggleSideBar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2 " />
        Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sideBarRef}
        className={`${
          isSideBarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-56 bg-white overflow-y-auto transition-transform duration-300 
  lg:translate-x-0 lg:static lg:w-1/7`}
      >
        <FilterSideBar />
      </div>

      {/* Collection Section */}
      <div className="flex-grow p-4 lg:w-3/4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sorting option */}
        <SortOptions />

        {/* Product grid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
