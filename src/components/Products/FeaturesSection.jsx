import React from "react";
import {
  HiArrowPathRoundedSquare,
  HiOutlineCreditCard,
  HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
  const features = [
    {
      icon: <HiShoppingBag className="text-4xl text-purple-600" />,
      title: "Free Worldwide Shipping",
      desc: "Enjoy free delivery on all orders over $100.",
    },
    {
      icon: <HiArrowPathRoundedSquare className="text-4xl text-purple-600" />,
      title: "45-Day Easy Returns",
      desc: "Hassle-free returns with cashback guarantee.",
    },
    {
      icon: <HiOutlineCreditCard className="text-4xl text-purple-600" />,
      title: "100% Secure Checkout",
      desc: "Your payments are encrypted and protected.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-purple-100 p-6 rounded-full mb-5 flex items-center justify-center shadow-inner">
              {feature.icon}
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
