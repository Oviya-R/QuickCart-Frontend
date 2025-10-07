import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link
          key={product._id || index}
          to={`/product/${product._id}`}
          className="block"
        >
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="w-full mb-4">
              <img
                src={product.images?.[0]?.url || "/images/placeholder.jpg"}
                alt={product.images?.[0]?.altText || product.name}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500 font-medium tracking-tighter">
              ${product.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
