import React, { useState } from "react";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDetails from "../components/product/ProductDetails";
import ProductCare from "../components/product/ProductCare";

// In a real app, this would come from an API or Context
import { productData } from "../assets/data/productData";
import ProductReviews from "../components/product/ProductReviews";

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="max-w-6xl mx-auto pt-4 font-sans">
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <span>Home</span>
        <span className="mx-2">/</span>
        <span>Men</span>
        <span className="mx-2">/</span>
        <span>Shoes</span>
        <span className="mx-2">/</span>
        <span>Sports Shoes</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProductGallery
          images={productData.images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          productName={productData.name}
        />

        {/*product information */}
        <ProductInfo
          product={productData}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>

      <div className="bg-grey h-[1px] w-full my-12"></div>

      {/* details section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <ProductDetails />
      </div>

      <div className="bg-grey h-[1px] w-full my-12"></div>

      <ProductCare />
      <div className="bg-grey h-[1px] w-full my-12"></div>

      <ProductReviews />
    </div>
  );
};

export default ProductDetail;
