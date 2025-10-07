import React, { use, useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../../redux/slice/productSlice";
import { addToCart } from "../../redux/slice/cartSlice";

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);
  const [mainImage, setMainImage] = useState(" ");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") {
      setQuantity((prev) => prev + 1);
    }
    if (action === "minus" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to card.", {
        duration: 1000,
      });
      return;
    }
    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to the cart", {
          duration: 1000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-6">
      {selectedProduct && (
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 border ${
                    mainImage === image.url
                      ? "border-black shadow-md"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => setMainImage(image.url)}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="md:w-1/2 flex justify-center items-center">
              <div className="p-4 bg-gray-50 rounded-2xl shadow-inner">
                <img
                  src={mainImage}
                  alt="Main Product"
                  className="w-full max-h-[500px] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Right Side (Details) */}
            <div className="md:w-1/2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-gray-900">
                  {selectedProduct.name}
                </h1>
                {selectedProduct.originalPrice && (
                  <p className="text-lg text-gray-400 line-through">
                    ${selectedProduct.originalPrice}
                  </p>
                )}
                <p className="text-2xl font-semibold text-gray-800">
                  ${selectedProduct.price}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Color Selection */}
              <div>
                <p className="text-gray-800 font-medium mb-2">Color</p>
                <div className="flex gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-8 h-8 rounded-full border transition-all duration-200 ${
                        selectedColor === color
                          ? "ring-2 ring-black scale-110"
                          : "border-gray-300 hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <p className="text-gray-800 font-medium mb-2">Size</p>
                <div className="flex gap-3">
                  {selectedProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "hover:bg-gray-100 border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <p className="text-gray-800 font-medium mb-2">Quantity</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleQuantityChange("minus")}
                    className="px-3 py-1.5 bg-gray-100 rounded-md text-lg hover:bg-gray-200"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("plus")}
                    className="px-3 py-1.5 bg-gray-100 rounded-md text-lg hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`w-full py-3 rounded-md text-white font-semibold text-lg transition-all duration-300 ${
                  isButtonDisabled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black hover:bg-gray-900 shadow-md hover:shadow-lg"
                }`}
              >
                {isButtonDisabled ? "Adding..." : "Add to Cart"}
              </button>

              {/* Product Details */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Characteristics
                </h3>
                <table className="w-full text-sm text-gray-700 border-t border-gray-200">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 font-medium">Brand</td>
                      <td className="py-2">{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Material</td>
                      <td className="py-2">{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Thumbnails */}
          <div className="md:hidden flex overflow-x-auto gap-4 mt-6 pb-2">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Similar Products Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
              You May Also Like
            </h2>
            <ProductGrid products={similarProducts} loading={loading} error={error} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
