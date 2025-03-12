// import sampleProduct from "../assets/LandingPage/sampleProduct.png";

export const categories = [
  {
    name: "All Products",
    icon: "🌿",
    count: 48,
    action: (navigate) => {
      navigate("/products");
    },
  },
  {
    name: "Clothing",
    icon: "👕",
    count: 24,
    action: (navigate) => {
      navigate("/products/clothing");
    },
  },
  {
    name: "Footwear",
    icon: "👟",
    count: 12,
    action: (navigate) => {
      navigate("/products/footwear");
    },
  },
  {
    name: "Accessories",
    icon: "👜",
    count: 18,
    action: (navigate) => {
      navigate("/products/accessories");
    },
  },
  {
    name: "Home Goods",
    icon: "🏠",
    count: 15,
    action: (navigate) => {
      navigate("/products/home");
    },
  },
  {
    name: "Beauty and Wellness",
    icon: "✨",
    count: 9,
    action: (navigate) => {
      navigate("/products/beauty");
    },
  },
];

import beltSample from "../assets/LandingPage/beltSample.png";
import kurthaSample from "../assets/LandingPage/kuthaSample.png";
import maskSample from "../assets/LandingPage/maskSample.png";
import tshirtSample from "../assets/LandingPage/TshirtSample.png";
export const featuredProducts = [
  {
    name: "Classy Hemp Kurta",
    price: 390,
    image: kurthaSample,
  },
  {
    name: "Hemp Belts",
    price: 200,
    image: beltSample,
  },
  {
    name: "Cannabis Leaf T-shirt",
    price: 300,
    image: tshirtSample,
  },
  {
    name: "Hemp Masks",
    price: 50,
    image: maskSample,
  },
];
