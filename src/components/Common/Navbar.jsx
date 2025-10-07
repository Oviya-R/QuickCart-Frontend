import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) || 0;

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 via-blue-100 to-blue-50 shadow-sm sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold text-gray-800 hover:text-gray-500 transition-all"
          >
            QuickCart
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-8 font-medium text-sm uppercase">
            {[
              { label: "Men", link: "/collection/all?gender=Men" },
              { label: "Women", link: "/collection/all?gender=Women" },
              { label: "Top Wear", link: "/collection/all?category=Top Wear" },
              { label: "Bottom Wear", link: "/collection/all?category=Bottom Wear" },
            ].map(({ label, link }) => (
              <Link
                key={label}
                to={link}
                className="relative text-gray-700 hover:text-black transition-all duration-300 group"
              >
                <span className="group-hover:translate-y-[-3px] bg-blue-100 p-2 border rounded-full shadow-lg group-hover:text-black transition-transform duration-300 inline-block">
                  {label}
                </span>
                
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {user && user.role === "admin" && (
              <Link
                to="/admin"
                className="bg-gradient-to-r from-gray-800 to-gray-600 text-white text-sm px-3 py-1.5 rounded-md hover:shadow-md hover:shadow-gray-400/30 transition-all"
              >
                Admin
              </Link>
            )}

            <Link
              to="/profile"
              className="hover:text-black transition-all duration-300 hover:scale-110"
            >
              <HiOutlineUser className="h-6 w-6" />
            </Link>

            <button
              onClick={() => setDrawerOpen(!drawerOpen)}
              className="relative hover:text-black transition-transform duration-300 hover:scale-110"
            >
              <HiOutlineShoppingBag className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1.5 shadow-md animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            <div className="hidden lg:block">
              <SearchBar />
            </div>

            {/* Mobile Menu */}
            <button
              onClick={() => setNavDrawerOpen(!navDrawerOpen)}
              className="md:hidden hover:text-black hover:scale-110 transition-transform duration-300"
            >
              <HiBars3BottomRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        drawerOpen={drawerOpen}
        toggleCartDrawer={() => setDrawerOpen(!drawerOpen)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-gradient-to-b from-white to-gray-100 shadow-xl transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setNavDrawerOpen(false)}>
            <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black transition-all" />
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
            Menu
          </h2>
          <nav className="space-y-4 text-gray-700">
            {[
              { label: "Men", link: "/collection/all?gender=Men" },
              { label: "Women", link: "/collection/all?gender=Women" },
              { label: "Top Wear", link: "/collection/all?category=Top Wear" },
              { label: "Bottom Wear", link: "/collection/all?category=Bottom Wear" },
            ].map(({ label, link }) => (
              <Link
                key={label}
                to={link}
                onClick={() => setNavDrawerOpen(false)}
                className="block hover:text-black hover:translate-x-1 transition-transform duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
